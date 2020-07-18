<template>
  <g>
    <app-bush x="800" y="4300" />
    <app-largemedia />
    <app-text x="0" y="4680" num="14">
      <template v-slot:date>Feb 26, 2019</template>
      <template v-slot:event>Netlify Large Media is born</template>
    </app-text>

    <app-tree x="550" y="4500" />

    <app-statue-dev />
    <app-text x="950" y="4500" num="15">
      <template v-slot:date>April 09, 2019</template>
      <template v-slot:event>Netlify Dev public beta</template>
      <template v-slot:event2>at Jamstack Conf NYC</template>
    </app-text>

    <app-bush x="1100" y="4750" />

    <app-book />
    <app-text x="1400" y="4800" num="16">
      <template v-slot:date>Jul 31, 2019</template>
      <template v-slot:event>First O'Reilly Jamstack Book</template>
    </app-text>

    <app-streetlamp2 x="1100" y="4950" />
    <app-tree x="1000" y="5000" />

    <app-analyticsuk />
    <app-text x="1000" y="5500" num="17">
      <template v-slot:date>Jul 31, 2019</template>
      <template v-slot:event>Launched Netlify Analytics</template>
      <template v-slot:event2>from Jamstack Conf London</template>
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
import AppBook from "@/components/AppBook.vue";
import AppStatueDev from "@/components/AppStatueDev.vue";
import AppLargemedia from "@/components/AppLargemedia.vue";
import AppAnalyticsuk from "@/components/AppAnalyticsuk.vue";

export default {
  components: {
    AppText,
    AppTree,
    AppBush,
    AppStreetlamp2,
    AppBook: () => import("@/components/AppBook.vue"),
    AppStatueDev: () => import("@/components/AppStatueDev.vue"),
    AppLargemedia: () => import("@/components/AppLargemedia.vue"),
    AppAnalyticsuk: () => import("@/components/AppAnalyticsuk.vue")
  }
};
</script>

<style lang="scss" scoped>
</style>