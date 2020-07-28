<template>
  <div v-if="user && user.number">
    <div class="dev-info">
      <span class="name" v-html="user.name"></span>
      <h2 class="number"><abbr title="Developer">Dev</abbr><abbr title="Number">#</abbr> <span v-html="user.number"></span></h2>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.dev-info {
  padding: 1rem;
}
.dev-info .name {
  display: block;
  line-height: 1.5;
}
.dev-info .number {
  font-family: MADE-Dillan;
  text-transform: uppercase;
  font-size: 3em;
  margin: 0;
  line-height: 1;
}
abbr {
  text-decoration: none;
}
</style>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user"])
  },
  props: {},
  components: {}
}
</script>