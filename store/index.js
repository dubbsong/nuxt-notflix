// state data
export const state = () => ({
  jwt: null,
  locale: 'en',
  locales: ['en', 'ko']
})

// for tracking state change (Synchronous)
export const mutations = {
  setToken(state, payload) {
    state.jwt = payload
  },
  removeToken(state, payload) {
    state.jwt = null
  },
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

// for update like methods (Asynchronous)
export const actions = {
  login({ commit }, jwt) {
    sessionStorage.setItem('jwt', jwt)
    commit('setToken', jwt)
  },
  logout({ commit }) {
    sessionStorage.removeItem('jwt')
    commit('removeToken')
  }
}

// like computed
export const getters = {
  isAuthenticated(state) {
    return !!state.jwt
  }
}
