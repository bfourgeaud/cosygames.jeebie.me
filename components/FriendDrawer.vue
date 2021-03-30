<template>
  <div>
    <div v-if="drawer" class="absolute hidden lg:static lg:block top-0 left-0 h-screen" :style="`width:${width}px`" />
    <aside
      :style="`width:${width}px`"
      :class="drawer ? 'fixed' : 'hidden'"
      class="z-50 top-0 right-0 bg-dark-900 h-screen"
    >
      <div v-if="loggedIn" class="flex flex-col justify-center items-center py-8 px-2 h-full">
        <!-- Content -->
        <div class="rounded-full flex items-center justify-center bg-dark-800 p-4" style="width: 128px; height: 128px;">
          <icons-account class="fill-current text-dark-600 w-full h-full" />
        </div>
      </div>
      <div v-else class="flex flex-col text-left text-lg py-8 px-2">
        <lazy-friend-list />
      </div>
    </aside>
    <div v-if="drawer" class="z-40 fixed inset-0 bg-dark-500 opacity-50 w-screen h-screen lg:hidden" @click="toggleDrawer" />

    <button
      aria-label="friends"
      class="z-50 fixed bottom-0 right-0 bg-blue-500 active:bg-blue-600 p-4 m-4 rounded-full shadow hover:shadow-md outline-none focus:outline-none"
      @click="toggleDrawer"
    >
      <icons-accounts />
    </button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'FriendDrawer',
  props: {
    width: { type: [String, Number], default: 256 }
  },
  computed: {
    ...mapState('friends', ['drawer']),
    ...mapState('auth', ['loggedIn', 'user'])
  },
  watch: {
    drawer (val) {
      const v = document.getElementsByTagName('BODY')[0]
      val ? v.classList.add('overflow-hidden', 'lg:overflow-auto') : v.classList.remove('overflow-hidden', 'lg:overflow-auto')
    }
  },
  methods: { ...mapMutations('friends', ['toggleDrawer']) }
}
</script>
