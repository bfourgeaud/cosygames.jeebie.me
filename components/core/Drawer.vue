<template>
  <div>
    <aside
      :style="`width:${width}px`"
      :class="[opened ? '' : 'hidden', right ? 'right-0' : 'left-0', fixed ? 'lg:block lg:visible' : '']"
      class="z-40 top-0 absolute bg-gray-800 h-screen lg:static"
    >
      <div class="flex justify-center">
        <slot name="prepend" />
        <slot />
        <slot name="append" />
      </div>
    </aside>
    <div v-if="opened" class="z-30 absolute inset-0 bg-green-800 opacity-50 w-screen h-screen lg:hidden" @click="opened = !opened">Overlay</div>
  </div>
</template>

<script>
export default {
  name: 'Drawer',
  props: {
    right: { type: Boolean, default: false },
    permanent: { type: Boolean, default: false },
    overlayColor: { type: String, default: undefined },
    overlayOpacity: { type: String, default: undefined },
    width: { type: [String, Number], default: 256 },
    fixed: { type: Boolean, default: false },
    absolute: { type: Boolean, default: false },
    value: { type: Boolean, default: false }
  },
  data () {
    return {
      lazyValue: this.value
    }
  },
  computed: {
    opened: {
      get () { return this.lazyValue },
      set (val) {
        this.lazyValue = val
        this.$emit('input', val)
      }
    }
  },
  watch: {
    value (val) {
      this.lazyValue = val
      const v = document.getElementsByTagName('BODY')[0]
      val ? v.classList.add('overflow-hidden') : v.classList.remove('overflow-hidden')
    }
  }
}
</script>
