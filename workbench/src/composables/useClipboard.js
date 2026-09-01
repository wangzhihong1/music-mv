import { ref } from 'vue'

export function useClipboard() {
  const copiedTarget = ref('')
  let copiedTimer

  async function copyText(text, target) {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      textarea.remove()
    }

    copiedTarget.value = target
    window.clearTimeout(copiedTimer)
    copiedTimer = window.setTimeout(() => {
      if (copiedTarget.value === target) copiedTarget.value = ''
    }, 1800)
  }

  return {
    copiedTarget,
    copyText,
  }
}
