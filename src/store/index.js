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
    tweetPreviewLink: function(state, getters) {
      let slugs = {
        jet: "launch",
        redirect: "redirects",
        github: "gitlab",
        letsencrypt: "lets-encrypt",
        seed: "seed-funding",
        deploypreview: "deploy-previews",
        deploybutton: "deploy-to-netlify",
        twodoto: "design-system",
        splittesting: "split-testing",
        auditlogs: "audit-logs",
        smashing: "smashing-magazine",
        netlifycms: "netlify-cms",
        functions: "netlify-functions",
        drop: "netlify-drop",
        jamstack1: "jamstack-conf",
        largemedia: "netlify-large-media",
        "statue-dev": "netlify-dev",
        analyticsuk: "netlify-analytics",
        book: "jamstack-book",
        "golden-gate": "jamstack-sf",
        docs: "docs",
        virtual: "jamstack-virtual",
        "build-plugins": "build-plugins",
        million: "1-million-developers"
      };

      // TODO use a Netlify env variable for this origin?
      // Use the full URL, this text is going on the tweet
      return `https://million-devs.netlify.app/share/${slugs[getters.milestone]}/`;
    },
    milestone: function(state) {
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
          return lastId;
        }
        lastId = idStr;
      }
      return false;
    }
  },
  actions: {},
  modules: {},
})
