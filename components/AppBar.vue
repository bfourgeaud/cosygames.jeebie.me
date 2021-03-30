<template>
  <!-- Head Nav -->
  <header class="fixed flex justify-between items-center w-full lg:hidden bg-dark-800" :style="`height:${height}px`">
    <div @click="toggleDrawer">
      <icons-menu class="fill-current ml-4 cursor-pointer" />
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'AppBar',
  props: {
    height: { type: Number, default: 48 }
  },
  methods: { ...mapMutations('app', ['toggleDrawer']) }
}
</script>
