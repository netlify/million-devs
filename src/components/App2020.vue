<template>
  <g>
    <app-build-plugins />
  </g>
</template>

<script>
import AppBuildPlugins from "@/components/AppBuildPlugins.vue";

export default {
  components: {
    AppBuildPlugins: () => import("@/components/AppBuildPlugins.vue")
  }
};
</script>

<style lang="scss" scoped>
</style>