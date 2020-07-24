<template>
  <div v-if="user && user.number">
    <h2 class="dev-number"><abbr title="Developer">Dev</abbr><abbr title="Number">#</abbr> <span v-html="user.number"></span></h2>
  </div>
</template>
<style lang="scss" scoped>
.dev-number {
  text-transform: uppercase;
  font-size: 3em;
  margin: 0;
  line-height: 1.5;
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