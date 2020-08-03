<template>
  <div class="dev-info-sticky">
    <app-login-result />
  </div>
</template>

<script>
import AppLoginResult from "@/components/AppLoginResult.vue";

export default {
  components: {
    AppLoginResult,
  },
};
</script>

<style lang="scss" scoped>
.dev-info-sticky {
  margin-left: -8px; /* Careful this is tied to the <body> margin in App.vue */
  margin-right: -8px; /* Careful this is tied to the <body> margin in App.vue */

  @media (min-width: 26.875em) {
    /* 430px */
    display: inline-flex;
    margin-right: auto;
  }
  @media (min-width: 62.5em) and (min-height: 37.5em) {
    /* 1000px 600px */
    position: fixed;
    left: 0;
    top: 10px;
  }
}
</style>
