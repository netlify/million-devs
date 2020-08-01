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
        github: 18112, // out of order?
        letsencrypt: 25000,
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
        "golden-gate": 600000,
        docs: 625040,
        virtual: 750000,
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
    milestoneCoords(state, getters) {
      let coords = {
        jet: { x: 1050, y: -350 },
        redirect: { x: 450, y: 250 },
        github: { x: 450, y: 250 },
        letsencrypt: { x: 450, y: 250 },
        seed: { x: 700, y: 850 },
        deploypreview: { x: 420, y: 1200 },
        deploybutton: { x: 350, y: 1700 },
        twodoto: { x: 850, y: 1680 },
        splittesting: { x: 1130, y: 2020 },
        auditlogs: { x: 730, y: 2200 },
        smashing: { x: 200, y: 2430 },
        netlifycms: { x: 700, y: 2900 },
        functions: { x: 250, y: 3250 },
        drop: { x: 380, y: 3650 },
        jamstack1: { x: 890, y: 3870 },
        largemedia: { x: 100, y: 4200 },
        "statue-dev": { x: 700, y: 4400 },
        analyticsuk: { x: 800, y: 5050 },
        book: { x: 1180, y: 4900 },
        "golden-gate": { x: 200, y: 5300 },
        docs: { x: 700, y: 5700 },
        virtual: { x: 1400, y: 5950 },
        "build-plugins": { x: 750, y: 6450 },
        million: { x: 750, y: 6800 },
      }

      if (coords[getters.milestone]) {
        return coords[getters.milestone]
      }
      return { x: -250, y: -1000 }
    },
  },
  actions: {},
  modules: {},
})
