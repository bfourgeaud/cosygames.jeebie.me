import { set } from '@/utils/vuex'

export const state = () => ({
  loggedIn: false,
  user: null
})

export const mutations = {
  setLoggedIn: set('loggedIn'),
  setUser: set('user')
}

export const actions = {
  login: ({ commit }, user) => {
    commit('setLoggedIn', true)
    commit('setUser', user)
  },
  logout: ({ commit }) => {
    commit('setLoggedIn', false)
    commit('setUser', null)
  }
}
