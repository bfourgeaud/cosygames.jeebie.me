<template>
  <div class="container h-screen flex flex-col items-center justify-center text-xl">
    <h1 v-if="error.statusCode === 404">
      Page not found
    </h1>
    <h1 v-else>
      {{ error.message || 'An error occurred' }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: { type: Object, required: true }
  }
}
</script>
