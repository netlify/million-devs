<template>
  <svg
    :x="coords.x"
    :y="coords.y"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
  >
    <slot></slot>
  </svg>
</template>

<script>
export default {
  props: {
    x: {
      type: [Number, String],
      default: 1450,
    },
    y: {
      type: [Number, String],
      default: 170,
    },
    xSmall: {
      type: [Number, String],
      default: 1450,
    },
    ySmall: {
      type: [Number, String],
      default: 170,
    },
    width: {
      type: [Number, String],
      default: 170,
    },
    height: {
      type: [Number, String],
      default: 170,
    },
    viewBox: {
      type: [Number, String],
      default: 170,
    }
  },
  computed: {
    coords: function() {
      return {
        x: window.matchMedia("(min-width: 1000px)").matches ? this.x : this.xSmall,
        y: window.matchMedia("(min-width: 1000px)").matches ? this.y : this.ySmall
      }
    }
  }
};
</script>
