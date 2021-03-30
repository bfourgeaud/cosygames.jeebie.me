import { set } from '@/utils/vuex'

export const state = () => ({
  featured: [],
  games: []
})

export const mutations = {
  setGames: set('games')
}

export const actions = {
  updateGames ({ commit }) {
    this.$fire.firestore.collection('games').get()
      .then((snapshot) => {
        if (!snapshot.empty) {
          const games = []
          snapshot.forEach((doc) => {
            games.push({
              ...doc.data(),
              id: doc.id
            })
          })
          commit('setGames', games)
        }
      })
  }
}

export const getters = {
  featured: (state) => {
    const sorted = state.games.slice() // Create shadow copy of game state
    return sorted.sort((a, b) => {
      if (a.updated < b.updated) { return -1 }
      if (a.updated > b.updated) { return 1 }
      return 0
    }).slice(0, 3)
  },
  ordered: (state, getter) => {
    const highlights = state.games.filter(e => e.highlight)
    const other = state.games.filter(e => !e.highlight)

    return [
      ...highlights,
      ...other
    ]
  }
}
