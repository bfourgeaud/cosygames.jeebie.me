<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path v-if="up" d="M7 15l5-5 5 5H7z" />
    <path v-else-if="down" d="M7 10l5 5 5-5H7z" />
    <path v-else-if="right" d="M10 17l5-5-5-5v10z" />
    <path v-else d="M14 7l-5 5 5 5V7z" />
  </svg>
</template>

<script>
export default {
  name: 'MenuDirIcon',
  props: {
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    up: { type: Boolean, default: false },
    down: { type: Boolean, default: false }
  }
}
</script>
