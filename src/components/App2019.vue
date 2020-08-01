<template>
  <g>
    <app-bush x="800" y="4300" />
    <app-largemedia x="0" y="4300" xSmall="100" ySmall="10050" />
    <app-text x="0" y="4680" num="14" xSmall="75" ySmall="10500" url-slug="netlify-large-media-is-born">
      <template v-slot:date>Feb 26, 2019</template>
      <template v-slot:event>Netlify Large Media is born</template>
    </app-text>

    <app-tree x="550" y="4500" />

    <app-statue-dev x="700" y="4550" xSmall="150" ySmall="10900" />
    <app-text x="950" y="4500" xSmall="75" ySmall="11400" num="15" url-slug="netlify-dev-public-beta-at-jamstack-conf-nyc">
      <template v-slot:date>April 09, 2019</template>
      <template v-slot:event>Netlify Dev public beta</template>
      <template v-slot:event2>at Jamstack Conf NYC</template>
    </app-text>

    <app-bush x="1100" y="4750" />

    <app-book x="1200" y="5000" xSmall="100" ySmall="11800" />
    <app-text x="1400" y="4800" xSmall="75" ySmall="12250" num="16" url-slug="first-o-reilly-jamstack-book">
      <template v-slot:date>Jul 31, 2019</template>
      <template v-slot:event>First O'Reilly Jamstack Book</template>
    </app-text>

    <app-streetlamp2 x="1100" y="4950" />
    <app-tree x="1000" y="5000" />

    <app-analyticsuk x="700" y="5100" xSmall="125" ySmall="12600" />
    <app-text x="1000" y="5500" xSmall="75" ySmall="13100" num="17" url-slug="launched-netlify-analytics-from-jamstack-conf-london">
      <template v-slot:date>Jul 10, 2019</template>
      <template v-slot:event>Launched Netlify Analytics</template>
      <template v-slot:event2>from Jamstack Conf London</template>
    </app-text>

    <app-tree x="310" y="5150" />
    <app-tree x="300" y="5200" />
    <app-tree x="400" y="5100" />
    <app-bush x="500" y="5150" />

    <app-golden-gate x="50" y="5400" xSmall="25" ySmall="13500" />
    <app-text x="0" y="5800" xSmall="75" ySmall="14000" num="18" url-slug="jamstack-sf-jamstack-at-scale-nike-popeyes-longos-speaking">
      <template v-slot:date>Oct 15, 2019</template>
      <template v-slot:event>Jamstack SF, Jamstack at Scale</template>
      <template v-slot:event2>Nike, Popeyes, Longos speaking</template>
    </app-text>

    <app-docs x="700" y="5800" xSmall="125" ySmall="14350" />
    <app-text x="400" y="6050" xSmall="75" ySmall="14675" num="19" url-slug="new-and-improved-docs-site">
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
    AppAnalyticsuk: () => import("@/components/AppAnalyticsuk.vue"),
  },
};
</script>

<style lang="scss" scoped>
</style>