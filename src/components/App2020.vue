<template>
  <g>
    <app-tree x="650" y="5500" />
    <app-tree x="700" y="5550" />
    <app-bush x="750" y="5600" />
    <app-streetlamp2 x="700" y="6000" />

    <app-virtual />
    <app-text x="1400" y="6500" num="20">
      <template v-slot:date>May 27, 2020</template>
      <template v-slot:event>Jamstack Conf Virtual</template>
    </app-text>

    <app-streetlamp2 x="1300" y="6600" />
    <app-tree x="800" y="6250" />
    <app-tree x="850" y="6200" />

    <app-build-plugins />
    <app-text x="200" y="6700" num="21">
      <template v-slot:date>May 27, 2020</template>
      <template v-slot:event>Launched Build Plugins</template>
    </app-text>
  </g>
</template>

<script>
//repeated elements
import AppTree from "@/components/AppTree.vue";
import AppBush from "@/components/AppBush.vue";
import AppText from "@/components/AppText.vue";
import AppStreetlamp2 from "@/components/AppStreetlamp2.vue";

//unique units
import AppBuildPlugins from "@/components/AppBuildPlugins.vue";
import AppVirtual from "@/components/AppVirtual.vue";

export default {
  components: {
    AppText,
    AppTree,
    AppBush,
    AppStreetlamp2,
    AppBuildPlugins: () => import("@/components/AppBuildPlugins.vue"),
    AppVirtual: () => import("@/components/AppVirtual.vue")
  }
};
</script>

<style lang="scss" scoped>
</style>