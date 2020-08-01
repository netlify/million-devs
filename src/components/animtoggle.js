const animtoggle = {
  computed: {
    isAnimationDisabled() {
      return this.$store.state.isAnimationDisabled
    },
  },
  methods: {
    animationToggle() {
      if (this.isAnimationDisabled) {
        ScrollTrigger.getAll().forEach((trigger) => {
          let animation = trigger.animation
          trigger.kill()
          animation && animation.progress(1).kill()
        })
      }
    },
  },
  mounted() {
    console.log("working")
    this.animationToggle()
  },
}
