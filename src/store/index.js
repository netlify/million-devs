import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toggleConfig: `play pause none pause`,
    startConfig: `center 90%`,
    isAnimationDisabled: false,
    viewportSize: "large",
    user: {
      name: "",
      number: "",
    },
  },
  mutations: {
    updateViewportState(state, size) {
      state.viewportSize = size
    },
    updateAnimationState(state) {
      state.isAnimationDisabled = !state.isAnimationDisabled
    },
    login(state, payload) {
      state.user.name = payload.name
      state.user.number = payload.number
    },
  },
  getters: {
    tweetPreviewLink: function(state, getters) {
      let twitterVideoSlugs = {
        jet: "1288850213172662272",
        redirect: "1288850337349197824",
        github: "1289369827228827648",
        letsencrypt: "1288850557013299203",
        seed: "1288852224467247106",
        deploypreview: "1289369944078143492",
        deploybutton: "1288852349335764997",
        twodoto: "1289370041616445440",
        splittesting: "1288852492248387586",
        auditlogs: "1288852552474406912",
        smashing: "1288852619251908608",
        netlifycms: "1289370121908047872",
        functions: "1288852683449933832",
        drop: "1288852749153718273",
        jamstack1: "1288852888312328192",
        largemedia: "1288852991529963525",
        "statue-dev": "1288853067518152705",
        analyticsuk: "1288853373496832003",
        book: "1288853167535464450",
        "golden-gate": "1288853434041589760",
        docs: "1288853499208503298",
        virtual: "1288853975710695424",
        "build-plugins": "1288854043134132227",
        million: "1288849874671341569",
      }

      if (twitterVideoSlugs[getters.milestone]) {
        return `https://twitter.com/1mdevs/status/${
          twitterVideoSlugs[getters.milestone]
        }/video/1`
      }
      return ""
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
        million: 1000000,
      }

      let userNumber = parseInt(
        ("" + state.user.number).replace(/[^\d]*/g, ""),
        10
      )
      let lastId = 0
      for (let idStr in ids) {
        if (userNumber < ids[idStr]) {
          return lastId
        }
        lastId = idStr
      }
      return false
    },
    milestonePlacement(state, getters) {
      let twitterVideoSlugs = {
        jet: { x: 750, y: -400 },
        redirect: { x: 1000, y: 1050 },
        github: "1289369827228827648",
        letsencrypt: "1288850557013299203",
        seed: "1288852224467247106",
        deploypreview: "1289369944078143492",
        deploybutton: "1288852349335764997",
        twodoto: "1289370041616445440",
        splittesting: "1288852492248387586",
        auditlogs: "1288852552474406912",
        smashing: "1288852619251908608",
        netlifycms: "1289370121908047872",
        functions: "1288852683449933832",
        drop: "1288852749153718273",
        jamstack1: "1288852888312328192",
        largemedia: "1288852991529963525",
        "statue-dev": "1288853067518152705",
        analyticsuk: "1288853373496832003",
        book: "1288853167535464450",
        "golden-gate": "1288853434041589760",
        docs: "1288853499208503298",
        virtual: "1288853975710695424",
        "build-plugins": "1288854043134132227",
        million: "1288849874671341569",
      }

      if (twitterVideoSlugs[getters.milestone]) {
        return `https://twitter.com/1mdevs/status/${
          twitterVideoSlugs[getters.milestone]
        }/video/1`
      }
      return ""
    },
  },
  actions: {},
  modules: {},
})
