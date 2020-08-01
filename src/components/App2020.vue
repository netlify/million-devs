<template>
  <g>
    <app-tree x="650" y="5500" />
    <app-tree x="700" y="5550" />
    <app-bush x="750" y="5600" />

    <app-virtual x="1200" y="6000" xSmall="50" ySmall="15100" />
    <app-text
      x="1400"
      y="6500"
      xSmall="50"
      ySmall="15600"
      num="20"
      url-slug="jamstack-conf-virtual"
    >
      <template v-slot:date>May 27, 2020</template>
      <template v-slot:event>Jamstack Conf Virtual</template>
    </app-text>

    <app-streetlamp2 x="1300" y="6600" />
    <app-tree x="850" y="6200" />
    <app-tree x="800" y="6250" />

    <app-build-plugins x="600" y="6500" xSmall="-25" ySmall="15900" />
    <app-text
      x="200"
      y="6700"
      xSmall="75"
      ySmall="16450"
      num="21"
      url-slug="launched-build-plugins"
    >
      <template v-slot:date>May 27, 2020</template>
      <template v-slot:event>Launched Build Plugins</template>
    </app-text>

    <app-million x="640" y="7000" width="750" height="750" xSmall="-75" ySmall="16900" :num="2" />
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
import AppMillion from "@/components/AppMillion.vue";
import AppVirtual from "@/components/AppVirtual.vue";

export default {
  components: {
    AppText,
    AppTree,
    AppBush,
    AppStreetlamp2,
    AppBuildPlugins: () => import("@/components/AppBuildPlugins.vue"),
    AppMillion: () => import("@/components/AppMillion.vue"),
    AppVirtual: () => import("@/components/AppVirtual.vue"),
  },
};
</script>

<style lang="scss" scoped>
</style>