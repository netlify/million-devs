<template>
  <g>
    <app-virtual />
    <app-build-plugins />
  </g>
</template>

<script>
import AppBuildPlugins from "@/components/AppBuildPlugins.vue";
import AppVirtual from "@/components/AppVirtual.vue";

export default {
  components: {
    AppBuildPlugins: () => import("@/components/AppBuildPlugins.vue"),
    AppVirtual: () => import("@/components/AppVirtual.vue")
  }
};
</script>

<style lang="scss" scoped>
</style>