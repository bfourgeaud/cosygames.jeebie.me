<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="fill-current" viewBox="0 0 24 24">
    <path v-if="full" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.45 4.73L5.82 21 12 17.27z" />
    <path v-else-if="half" d="M12 15.4V6.1l1.71 4.03 4.38.37-3.32 2.89.99 4.28M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24z" />
    <path v-else d="M12 15.39l-3.76 2.27.99-4.28-3.32-2.88 4.38-.37L12 6.09l1.71 4.04 4.38.37-3.32 2.88.99 4.28M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24z" />
  </svg>
</template>

<script>
export default {
  name: 'StarIcon',
  props: {
    full: { type: Boolean, default: false },
    half: { type: Boolean, default: false }
  }
}
</script>
