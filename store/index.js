// state data
export const state = () => ({})

// for tracking state change (Synchronous)
export const mutations = {}

// for update like methods (Asynchronous)
export const actions = {}

// like computed
export const getters = {
  isAuthenticated(state) {
    return !!state.token
  }
}
