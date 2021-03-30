<template>
  <!-- Head Nav -->
  <header class="fixed flex w-full lg:hidden bg-dark-800" :style="`height:${height}px`">
    <div class="flex-1 flex justify-between items-center" @click="toggleDrawer">
      <icons-menu class="fill-current ml-4" />
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'AppBar',
  props: ['height'],
  methods: { ...mapMutations('app', ['toggleDrawer']) }
}
</script>
