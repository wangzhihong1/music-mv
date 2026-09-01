<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button
    class="icon-button"
    type="button"
    :aria-label="label"
    :data-tooltip="label"
  >
    <slot />
  </button>
</template>
