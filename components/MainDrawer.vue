<template>
  <div>
    <div class="absolute hidden lg:static lg:block top-0 left-0 h-screen" :style="`width:${width}px`" />
    <aside
      :style="`width:${width}px`"
      :class="drawer ? 'fixed' : 'hidden lg:block lg:fixed'"
      class="z-50 top-0 left-0 bg-dark-800 h-screen"
    >
      <!-- Content -->
      <div class="flex flex-col justify-center py-2">
        <!-- Logo Header -->
        <div class="flex items-center justify-center mb-4">
          <div class="rounded-full" style="width: 48px; height: 48px;">
            <img src="/icons/light/android-icon-48x48.png" alt="logo" width="48" height="48">
          </div>
          <h1 class="text-lg ml-4">Cosy Games</h1>
        </div>

        <!-- Menu Items -->
        <div class="flex flex-col text-center text-lg">
          <nuxt-link to="/" @click.native="setDrawer(false)" class="px-4 flex items-center hover:opacity-50">
            <div class="mr-4 my-2 flex items-center justify-center" style="height: 40px; min-width: 40px; width: 40px;">
              <icons-home class="fill-current" />
            </div>
            <div class="py-2">Home</div>
          </nuxt-link>
          <nuxt-link to="/games" @click.native="setDrawer(false)" class="px-4 flex items-center hover:opacity-50">
            <div class="mr-4 my-2 flex items-center justify-center" style="height: 40px; min-width: 40px; width: 40px;">
              <icons-gamepad class="fill-current" />
            </div>
            <div class="py-2">Games</div>
          </nuxt-link>
          <nuxt-link to="/social" @click.native="setDrawer(false)" class="px-4 flex items-center hover:opacity-50">
            <div class="mr-4 my-2 flex items-center justify-center" style="height: 40px; min-width: 40px; width: 40px;">
              <icons-accounts class="fill-current" />
            </div>
            <div class="py-2">Social</div>
          </nuxt-link>
          <nuxt-link to="/settings" @click.native="setDrawer(false)" class="px-4 flex items-center hover:opacity-50">
            <div class="mr-4 my-2 flex items-center justify-center" style="height: 40px; min-width: 40px; width: 40px;">
              <icons-settings class="fill-current" />
            </div>
            <div class="py-2">Settings</div>
          </nuxt-link>
        </div>
      </div>
    </aside>

    <!-- Overlay -->
    <div v-if="drawer" class="z-40 fixed inset-0 bg-dark-500 opacity-50 w-screen h-screen lg:hidden" @click="toggleDrawer">Overlay</div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Drawer',
  props: {
    width: { type: [String, Number], default: 256 }
  },
  computed: { ...mapState('app', ['drawer']) },
  watch: {
    drawer (val) {
      const v = document.getElementsByTagName('BODY')[0]
      val ? v.classList.add('overflow-hidden') : v.classList.remove('overflow-hidden')
    }
  },
  methods: { ...mapMutations('app', ['toggleDrawer', 'setDrawer']) }
}
</script>

<style>
.nuxt-link-exact-active {
  @apply bg-dark-600;
}
</style>
