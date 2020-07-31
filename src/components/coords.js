const coords = {
  computed: {
    svgCoords: function() {
      return {
        x: this.viewportSize == "large" ? this.x : this.xSmall,
        y: this.viewportSize == "large" ? this.y : this.ySmall
      }
    }
  }
}

export default coords;