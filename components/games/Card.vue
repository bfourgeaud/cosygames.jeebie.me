<template>
  <nuxt-link
    :to="`/games/${value.id}`"
    class="shadow-xl bg-transparent"
  >
    <div class="hover:bg-white w-full h-full rounded-md">
      <img src="bg.png" :alt="value.name" class="rounded-md w-full object-cover hover:opacity-75" :style="`height: ${height}px;`">
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'GameCard',
  props: {
    tall: { type: Boolean, default: false },
    dense: { type: Boolean, default: false },
    prominent: { type: Boolean, default: false },
    value: { type: Object, default: () => ({}) }
  },
  computed: {
    height () {
      if (this.tall) { return 516 }
      if (this.dense) { return 150 }
      if (this.prominent) { return 600 }
      return 250
    }
  }
}
</script>
