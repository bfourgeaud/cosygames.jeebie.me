<template>
  <div>
    <lazy-games-featured />
    <lazy-games-list />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Games',
  computed: { ...mapState('games', ['games']) },
  // Client-side only
  mounted () {
    // If we didn't already do it on the server)
    if (this.games.length === 0) {
      this.updateGames()
    }
  },
  methods: { ...mapActions('games', ['updateGames']) }
}
</script>
