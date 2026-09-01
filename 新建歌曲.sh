#!/bin/zsh

set -eu

project_dir="${0:A:h}"
template_dir="$project_dir/05-歌曲模板"
working_dir="$project_dir/02-创作中"

show_usage() {
  print '用法：'
  print '  ./新建歌曲.sh "歌名"'
  print '  ./新建歌曲.sh --描述 "创作描述"'
  print '  ./新建歌曲.sh --歌名 "歌名" --描述 "创作描述"'
}

song_name=''
creation_brief=''
legacy_name_parts=()

while (( $# > 0 )); do
  case "$1" in
    --歌名|-n)
      if (( $# < 2 )); then
        print -u2 '缺少歌名。'
        show_usage >&2
        exit 1
      fi
      song_name="$2"
      shift 2
      ;;
    --描述|-d)
      if (( $# < 2 )); then
        print -u2 '缺少创作描述。'
        show_usage >&2
        exit 1
      fi
      creation_brief="$2"
      shift 2
      ;;
    --帮助|-h|--help)
      show_usage
      exit 0
      ;;
    -* )
      print -u2 "无法识别的选项：$1"
      show_usage >&2
      exit 1
      ;;
    *)
      legacy_name_parts+=("$1")
      shift
      ;;
  esac
done

if (( ${#legacy_name_parts} > 0 )); then
  if [[ -n "$song_name" || -n "$creation_brief" ]]; then
    print -u2 '直接输入歌名时，请不要与 --歌名 或 --描述 混用。'
    show_usage >&2
    exit 1
  fi
  song_name="${(j: :)legacy_name_parts}"
fi

if [[ -z "$song_name" && -z "${creation_brief//[[:space:]]/}" ]]; then
  show_usage >&2
  exit 1
fi

using_placeholder=0

if [[ -z "$song_name" ]]; then
  song_name='未命名歌曲'
  using_placeholder=1
fi

if [[ -z "$creation_brief" ]]; then
  creation_brief='（未提供，可后续补充）'
fi

if [[ -z "${song_name//[[:space:]]/}" || "$song_name" == *'/'* || "$song_name" == *$'\n'* ]]; then
  print -u2 '歌名不能为空，也不能包含斜杠或换行。'
  exit 1
fi

date_prefix="$(date +%Y%m%d)"
target_dir="$working_dir/$date_prefix-$song_name"

if [[ -e "$target_dir" ]]; then
  if (( using_placeholder )); then
    placeholder_number=2
    while [[ -e "$target_dir" ]]; do
      song_name="未命名歌曲-$(printf '%02d' $placeholder_number)"
      target_dir="$working_dir/$date_prefix-$song_name"
      (( placeholder_number += 1 ))
    done
  else
    print -u2 "歌曲文件夹已存在：$target_dir"
    exit 1
  fi
fi

mkdir -p "$target_dir/参考素材"

for template_file in "$template_dir"/*.md; do
  output_file="$target_dir/${template_file:t}"

  while IFS= read -r line || [[ -n "$line" ]]; do
    line="${line//\{\{歌名\}\}/$song_name}"
    line="${line//\{\{日期\}\}/$date_prefix}"
    line="${line//\{\{创作描述\}\}/$creation_brief}"
    print -r -- "$line"
  done < "$template_file" > "$output_file"
done

node "$project_dir/scripts/create-song-json.mjs" \
  "$target_dir/song.json" \
  "$song_name" \
  "$date_prefix" \
  "$creation_brief"

print "已创建：$target_dir"
