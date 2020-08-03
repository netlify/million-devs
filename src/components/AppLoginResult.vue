<template>
  <div>
    <div class="dev-info">
      <span class="name" v-html="user.name"></span>
      <h2 class="number">
        <abbr title="Developer">Dev</abbr>
        <abbr title="Number">#</abbr>
        <span v-html="user.number"></span>
      </h2>
    </div>
    <a @click="scrollToHref" v-if="milestoneHref" class="button">Find Your Milestone</a>
    <app-tweet-it class="button" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppTweetIt from "@/components/AppTweetit.vue";

export default {
  computed: {
    ...mapState(["user"]),
    milestoneHref() {
      let id = this.$store.getters.milestone;
      if (id) {
        return `#milestone-${id}`;
      }
      return false;
    },
  },
  props: {},
  components: {
    AppTweetIt,
  },
  methods: {
    scrollToHref() {
      const el = document.querySelector(this.milestoneHref);

      el.scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.dev-info {
  padding: 1rem;
  background-color: #fff;

  @media (min-width: 26.875em) {
    /* 430px */
    border-radius: 0 6px 6px 0;
  }
}
.dev-info .name {
  display: block;
  line-height: 1.5;
}
.dev-info .number {
  font-family: MADE-Dillan;
  text-transform: uppercase;
  font-size: 2.6em;
  margin: 0;
  line-height: 1;
}
.button {
  display: inline-flex;
  background-color: #ff2260;
  color: #fff;
  padding: 8px 20px;
  border-radius: 6px;
  text-decoration: none;
  margin: 0.6em 0.2em 0.5em;
  cursor: pointer;
}
.button + .button {
  margin-left: 0;
}
.button:focus,
.button:hover {
  background-color: #d4194d;
}
abbr {
  text-decoration: none;
}
</style>