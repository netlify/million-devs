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
  getters: {
    milestoneId: function(state) {
      let ids = {
        jet: 0, // but really 7656
        redirect: 12400,
        github: 28112, // out of order?
        letsencrypt: 18558,
        seed: 31226,
        deploypreview: 33769,
        deploybutton: 44319,
        twodoto: 74179,
        splittesting: 82983,
        auditlogs: 90554,
        smashing: 128546,
        netlifycms: 135652,
        functions: 183658,
        drop: 269271,
        jamstack1: 308307,
        largemedia: 395967,
        "statue-dev": 435285,
        analyticsuk: 520824,
        book: 542309,
        "golden-gate": 626192,
        docs: 625040,
        virtual: 948344,
        "build-plugins": 948344,
        million: 1000000
      };

      let userNumber = parseInt((""+state.user.number).replace(/[^\d]*/g, ""), 10);
      let lastId = 0;
      for(let idStr in ids) {
        if(userNumber < ids[idStr]) {
          return `#milestone-${lastId}`;
        }
        lastId = idStr;
      }
      return false;
    }
  },
  actions: {},
  modules: {},
})
