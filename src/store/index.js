import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toggleConfig: `restart pause none pause`,
    startConfig: `center 80%`,
    isAnimationDisabled: false,
  },
  mutations: {
    updateAnimationState(state) {
      state.isAnimationDisabled = !state.isAnimationDisabled
    },
  },
  actions: {},
  modules: {},
})
