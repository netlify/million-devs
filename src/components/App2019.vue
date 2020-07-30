<template>
  <g>
    <app-bush x="800" y="4300" />
    <app-largemedia id="milestone-largemedia" />
    <app-text x="0" y="4680" num="14">
      <template v-slot:date>Feb 26, 2019</template>
      <template v-slot:event>Netlify Large Media is born</template>
    </app-text>

    <app-tree x="550" y="4500" />

    <app-statue-dev id="milestone-statue-dev" />
    <app-text x="950" y="4500" num="15">
      <template v-slot:date>April 09, 2019</template>
      <template v-slot:event>Netlify Dev public beta</template>
      <template v-slot:event2>at Jamstack Conf NYC</template>
    </app-text>

    <app-bush x="1100" y="4750" />

    <app-book id="milestone-book" />
    <app-text x="1400" y="4800" num="16">
      <template v-slot:date>Jul 31, 2019</template>
      <template v-slot:event>First O'Reilly Jamstack Book</template>
    </app-text>

    <app-streetlamp2 x="1100" y="4950" />
    <app-tree x="1000" y="5000" />

    <app-analyticsuk id="milestone-analyticsuk" />
    <app-text x="1000" y="5500" num="17">
      <template v-slot:date>Jul 10, 2019</template>
      <template v-slot:event>Launched Netlify Analytics</template>
      <template v-slot:event2>from Jamstack Conf London</template>
    </app-text>

    <app-tree x="310" y="5150" />
    <app-tree x="300" y="5200" />
    <app-tree x="400" y="5100" />
    <app-bush x="500" y="5150" />

    <app-golden-gate id="milestone-golden-gate" />
    <app-text x="0" y="5800" num="18">
      <template v-slot:date>Oct 15, 2019</template>
      <template v-slot:event>Jamstack SF, Jamstack at Scale</template>
      <template v-slot:event2>Nike, Popeyes, Longos speaking</template>
    </app-text>

    <app-docs id="milestone-docs" />
    <app-text x="400" y="6050" num="19">
      <template v-slot:date>Oct 16, 2019</template>
      <template v-slot:event>New and Improved Docs Site!</template>
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
import AppDocs from "@/components/AppDocs.vue";
import AppStatueDev from "@/components/AppStatueDev.vue";
import AppLargemedia from "@/components/AppLargemedia.vue";
import AppGoldenGate from "@/components/AppGoldenGate.vue";
import AppAnalyticsuk from "@/components/AppAnalyticsuk.vue";

export default {
  components: {
    AppText,
    AppTree,
    AppBush,
    AppStreetlamp2,
    AppBook: () => import("@/components/AppBook.vue"),
    AppDocs: () => import("@/components/AppDocs.vue"),
    AppStatueDev: () => import("@/components/AppStatueDev.vue"),
    AppLargemedia: () => import("@/components/AppLargemedia.vue"),
    AppGoldenGate: () => import("@/components/AppGoldenGate.vue"),
    AppAnalyticsuk: () => import("@/components/AppAnalyticsuk.vue")
  }
};
</script>

<style lang="scss" scoped>
</style>