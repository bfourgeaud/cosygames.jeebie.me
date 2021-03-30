<template>
  <div class="flex">
    <icons-star v-for="i in stars.full" :key="'full-' + i" :width="width" :height="height" full />
    <icons-star v-for="i in stars.half" :key="'half-' + i" :width="width" :height="height" half />
    <icons-star v-for="i in stars.empty" :key="'empty-' + i" :width="width" :height="height" />
  </div>
</template>

<script>
export default {
  name: 'StarEval',
  props: {
    height: Number,
    width: Number,
    score: Number,
    max: { type: Number, default: 5 }
  },
  computed: {
    stars () {
      return {
        full: Math.floor(this.score),
        half: Math.ceil(this.score % 1),
        empty: this.max - Math.ceil(this.score)
      }
    }
  }
}
</script>
