<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
    <games-card
      v-for="(game, i) in ordered"
      :key="i"
      :value="game"
      :class="[game.highlight ? 'md:col-span-2 md:row-span-2' : '', game.popular ? 'md:row-span-2' : '']"
      :prominent="game.highlight"
      :tall="game.popular"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'GameList',
  computed: {
    ...mapGetters('games', ['ordered'])
  }
}
</script>
