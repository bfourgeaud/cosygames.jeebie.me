<template>
  <div>
    <!-- Game Header -->
    <div class="relative">
      <img src="/bg.png" :alt="game.name" class="w-full object-cover" style="min-height: 50vh;">
      <router-link to="/games" class="absolute inset-0 p-2">
        Back to Games
      </router-link>
      <div class="absolute inset-0 w-full h-full flex flex-col items-center justify-center">
        <img src="/game-logo.png" alt="" class="mx-auto mb-5 object-contain" style="width:200px;">
      </div>

      <!-- Games options -->
      <div class="absolute grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center px-4 left-0 bottom-0 bg-overlay w-full" style="height:100px;">
        <!-- Launch Controls -->
        <div class="flex">
          <button class="bg-blue-500 hover:bg-blue-600 uppercase text-xl rounded-sm opacity-100 flex items-center justify-center focus:outline-none" style="min-width: 150px; height: 52px;">
            <icons-play class="fill-current mr-2" />
            Play
          </button>
          <button class="bg-blue-500 hover:bg-blue-600 uppercase text-xl rounded-sm opacity-100 ml-1 focus:outline-none" style="min-width: 25px; height: 52px;">
            <icons-menu-dir class="fill-current" down/>
          </button>
        </div>

        <!-- Gaming Time-->
        <div class="items-center text-gray-700 font-medium hidden sm:flex">
          <icons-clock class="fill-current mr-2" width="48" height="48" />
          <div>
            <p class="uppercase">Gaming Time</p>
            <p>140,3 hours</p>
          </div>
        </div>

        <!-- Achievements -->
        <div class="items-center text-gray-700 font-medium hidden sm:flex">
          <icons-achievement class="fill-current mr-2" width="48" height="48" />
          <div>
            <p class="uppercase">Achievements</p>
            <p>50/62</p>
          </div>
        </div>

        <!-- Last Played-->
        <div class="text-gray-700 font-medium hidden md:block">
          <p class="uppercase">Last played</p>
          <p>2 days ago</p>
        </div>
      </div>
    </div>

    <!-- Game Content -->
    <div class="text-gray-700 bg-dark-400 px-4 py-4">
      <h1 class="text-5xl text-black font-bold mb-4">{{ game.name }}</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-top">
        <div class="leading-6">
          <p class="mb-4">Nunc nec neque. Vestibulum fringilla pede sit amet augue. Curabitur at lacus ac velit ornare lobortis. Pellentesque commodo eros a enim. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Vivamus in erat ut urna cursus vestibulum. Quisque ut nisi. Curabitur nisi. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Donec vitae sapien ut libero venenatis faucibus. Maecenas nec odio et ante tincidunt tempus. Pellentesque commodo eros a enim. Suspendisse feugiat. Nulla facilisi. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
          <p class="mb-4">Nunc nec neque. Vestibulum fringilla pede sit amet augue. Curabitur at lacus ac velit ornare lobortis. Pellentesque commodo eros a enim. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Vivamus in erat ut urna cursus vestibulum. Quisque ut nisi. Curabitur nisi. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Donec vitae sapien ut libero venenatis faucibus. Maecenas nec odio et ante tincidunt tempus. Pellentesque commodo eros a enim. Suspendisse feugiat. Nulla facilisi. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
          <p class="mb-4">Nunc nec neque. Vestibulum fringilla pede sit amet augue. Curabitur at lacus ac velit ornare lobortis. Pellentesque commodo eros a enim. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Vivamus in erat ut urna cursus vestibulum. Quisque ut nisi. Curabitur nisi. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Donec vitae sapien ut libero venenatis faucibus. Maecenas nec odio et ante tincidunt tempus. Pellentesque commodo eros a enim. Suspendisse feugiat. Nulla facilisi. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
        </div>

        <!-- Game Informations -->
        <div>
          <lazy-media-slider :images="['/bg.png', '/bg2.png']" />
          <div class="flex flex-wrap items-center justify-left">
            <ul class="px-8 py-2">
              <li class="flex"><p class="font-bold mr-2">Players :</p> <p class="font-medium">2-6</p></li>
              <li class="flex"><p class="font-bold mr-2">Age :</p> <p class="font-medium">10-99+</p></li>
              <li class="flex"><p class="font-bold mr-2">Category :</p> <nuxt-link to="/games?category=cards" class="text-blue-600 font-medium">Cards</nuxt-link></li>
              <li class="flex"><p class="font-bold mr-2">Developped by :</p> <nuxt-link to="/games?developper=jeebie" class="text-blue-600 font-medium">Jeebie</nuxt-link></li>
            </ul>
            <div class="px-8 py-2 flex items-center">
              <star-eval :width="24" :height="24" :score="Number('3.5')" class="text-yellow-700" />
              <small class="ml-2">(12 854)</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GamePage',
  async asyncData ({ $fire, params, error }) {
    try {
      const doc = await $fire.firestore.collection('games').doc(params.id).get()
      if (doc.exists) {
        return { game: doc.data() }
      }
    } catch (error) {
      error({ statusCode: 500, message: 'Error getting document: ' + error })
    }
    error({ statusCode: 500, message: 'No such document !' })
  }
}
</script>

<style scoped>
.bg-overlay {
  background-color: rgb(254,254,254,0.5);
}
</style>
