<template>
  <div class="text-white bg-dark-700">
    <app-bar :height="navHeight" class="z-30" />
    <div class="flex">
      <main-drawer width="200" />
      <Nuxt class="px-4 mt-12 lg:mt-4 container mx-auto" />
      <friend-drawer width="325" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      navHeight: 50
    }
  }
}
</script>
