import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toggleConfig: `restart pause none pause`,
    startConfig: `center 80%`,
    isAnimationDisabled: false,
    user: {
      name: "",
      number: ""
    }
  },
  mutations: {
    updateAnimationState(state) {
      state.isAnimationDisabled = !state.isAnimationDisabled
    },
    login(state, payload) {
      state.user.name = payload.name;
      state.user.number = payload.number;
    }
  },
  actions: {},
  modules: {},
})
