<template>
  <a
    :href="`https://www.netlify.com/blog/2020/08/03/netlify-milestones-on-the-road-to-1-million-devs/#${urlSlug}`"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="450"
      height="250"
      :x="svgCoords.x"
      :y="svgCoords.y"
      viewBox="0 0 280 115.4"
    >
      <g :class="`textnode text${num}`">
        <rect class="a" width="69.8" height="21.39" />
        <rect class="b" y="25.4" width="280" height="56" />
        <path
          class="a"
          d="M265.8,96.4l-.2.4c0,.2.1.4.2.4l2.8,2.7h-6.7l-.4.2a.8.8,0,0,0-.2.4v.7c0,.2.1.4.2.4s.2.2.4.2h6.7l-2.8,2.7a.8.8,0,0,0-.2.4.5.5,0,0,0,.2.4l.5.5.4.2.4-.2,4.6-4.5a.6.6,0,0,0,.1-.4c0-.2,0-.3-.1-.4l-4.6-4.6h-.8Z"
          transform="translate(-0.1 -1)"
        />
        <text class="d" transform="translate(7.6 14)">
          <slot name="date">Jul 13, 2016</slot>
        </text>
        <text class="e" transform="translate(16.5 48.7)">
          <slot name="event">Something here</slot>
        </text>
        <text class="e" transform="translate(16.5 70)">
          <slot name="event2" />
        </text>
        <text class="h" transform="translate(164.5 104.3)">View Milestone</text>
      </g>
    </svg>
  </a>
</template>

<script>
import coords from "@/components/coords.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { mapState } from "vuex";

gsap.registerPlugin(ScrollTrigger);

export default {
  computed: {
    ...mapState([
      "toggleConfig",
      "startConfig",
      "isAnimationDisabled",
      "viewportSize",
    ]),
  },
  mixins: [coords],
  props: {
    urlSlug: {
      type: String,
    },
    x: {
      type: [Number, String],
      default: 1200,
    },
    y: {
      type: [Number, String],
      default: 500,
    },
    xSmall: {
      type: [Number, String],
      default: 1200,
    },
    ySmall: {
      type: [Number, String],
      default: 500,
    },
    num: {
      type: [Number, String],
      default: 1,
    },
  },
  methods: {
    textEntrance() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.text${this.num}`,
            toggleActions: this.toggleConfig,
            start: this.startConfig,
          },
        })
        .fromTo(
          `.text${this.num}`,
          {
            duration: 1,
            y: 40,
            scale: 0.9,
            opacity: 0,
            transformOrigin: "50% 50%",
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "sine",
          }
        );
    },
  },
  mounted() {
    if (!this.isAnimationDisabled) {
      this.textEntrance();
    }
  },
};
</script>

<style lang="scss" scoped>
.a {
  fill: #0e1e25;
}

.b,
.d {
  fill: #fff;
}

.c {
  fill: #00dc9f;
}

.d {
  font-size: 10px;
}

.d,
.e,
.h {
  font-family: Roboto-Medium, Roboto;
  font-weight: 500;
}

.e {
  font-size: 15px;
}

.f {
  letter-spacing: -0.01em;
}

.g {
  letter-spacing: -0.01em;
}

.h {
  font-size: 13px;
}

.i {
  letter-spacing: -0.01em;
}
</style>
