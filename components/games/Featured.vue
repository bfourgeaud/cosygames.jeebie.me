<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
    <games-card
      v-for="(feature, i) in featured"
      :key="i"
      :value="feature"
      dense
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'FeaturedGames',
  computed: { ...mapGetters('games', ['featured']) }
}
</script>
