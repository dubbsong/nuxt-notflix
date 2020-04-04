// state data
export const state = () => ({
  locale: 'en',
  locales: ['en', 'ko']
})

// for tracking state change (Synchronous)
export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

// for update like methods (Asynchronous)
export const actions = {}

// like computed
export const getters = {
  isAuthenticated(state) {
    return !!state.token
  }
}
