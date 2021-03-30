import { set, toggle } from '@/utils/vuex'

export const state = () => ({
  drawer: null,
  friends: [
    {
      id: 1,
      name: 'Lambert',
      online: true,
      game: {
        id: 10,
        logo: '/bg2.png',
        name: 'Battle of StormPeak'
      }
    },
    {
      id: 2,
      name: 'Lucas',
      online: true
    },
    {
      id: 3,
      name: 'Viktor',
      online: false
    },
    {
      id: 4,
      name: 'Pauline',
      online: false
    }
  ]
})

export const mutations = {
  setDrawer: set('drawer'),
  toggleDrawer: toggle('drawer')
}

export const getters = {
  online: (state) => {
    const total = state.friends.length
    const online = state.friends.filter(friend => friend.online).length

    return `(${online}/${total})`
  }
}
