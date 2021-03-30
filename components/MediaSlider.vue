<template>
  <div class="px-4 relative img-gallery">
    <img :src="images[currentImg]" class="shadow-xl rounded-lg w-full object-cover" alt="" style="height:250px;">
    <button class="absolute left-arrow text-white hover:text-dark-500 focus:outline-none" @click="prev">
      <icons-chevron width="48" height="48" class="fill-current" left />
    </button>
    <button class="absolute right-arrow text-white hover:text-dark-500 focus:outline-none" @click="next">
      <icons-chevron width="48" height="48" class="fill-current" right />
    </button>
  </div>
</template>

<script>
export default {
  name: 'MediaSlider',
  props: {
    images: { type: Array, default: () => [] }
  },
  data () {
    return {
      currentImg: 0
    }
  },
  methods: {
    next () {
      const current = this.currentImg
      const nbImgs = this.images.length
      this.currentImg = current + 1 >= nbImgs ? 0 : current + 1
    },
    prev () {
      const current = this.currentImg
      const nbImgs = this.images.length
      this.currentImg = current - 1 < 0 ? nbImgs - 1 : current - 1
    }
  }
}
</script>

<style scoped>
.img-gallery > .left-arrow {
  left: 25px;
  top: 50%;
}
.img-gallery > .right-arrow {
  right: 25px;
  top: 50%;
}
</style>
