<template>
  <g>
    <app-tree x="700" y="1770" />
    <app-tree x="750" y="1700" />
    <app-tree x="800" y="1720" />
    <app-bush x="500" y="2300" />

    <app-text
      x="1200"
      y="1700"
      xSmall="75"
      ySmall="4750"
      num="6"
      url-slug="introduced-a-new-design-system-for-the-app"
    >
      <template v-slot:date>Mar 14, 2017</template>
      <template v-slot:event>Introduced a new design system</template>
      <template v-slot:event2>to the Netlify app</template>
    </app-text>
    <app-twodoto x="800" y="1800" xSmall="75" ySmall="4350" />

    <app-splittesting x="1100" y="2120" xSmall="75" ySmall="5050" />

    <app-text
      x="1400"
      y="2000"
      xSmall="75"
      ySmall="5350"
      num="7"
      url-slug="introduced-split-branch-testing"
    >
      <template v-slot:date>June 28, 2017</template>
      <template v-slot:event>Introduced split-branch testing</template>
    </app-text>

    <app-bush x="600" y="2600" />
    <app-auditlogs x="730" y="2300" xSmall="140" ySmall="5700" />

    <app-text
      x="1050"
      y="2550"
      xSmall="75"
      ySmall="6100"
      num="8"
      url-slug="launched-audit-logs-for-teams"
    >
      <template v-slot:date>July 27, 2017</template>
      <template v-slot:event>Introduced audit logs</template>
      <template v-slot:event2>for teams</template>
    </app-text>

    <app-tree x="0" y="2550" />
    <app-tree x="50" y="2600" />
    <app-tree x="0" y="2650" />
    <app-streetlamp1 x="450" y="2600" />

    <app-smashing x="150" y="2550" xSmall="150" ySmall="6400" />
    <app-text
      x="100"
      y="2900"
      xSmall="75"
      ySmall="6800"
      num="9"
      url-slug="smashing-magazine-migrates-from-wordpress-to-jamstack-netlify"
    >
      <template v-slot:date>Nov 21, 2017</template>
      <template v-slot:event>Smashing Magazine migrates from</template>
      <template v-slot:event2>WordPress to Jamstack & Netlify</template>
    </app-text>

    <app-netlifycms x="500" y="3000" xSmall="50" ySmall="7150" />
    <app-text
      x="1020"
      y="3080"
      xSmall="75"
      ySmall="7550"
      num="10"
      url-slug="netlify-cms-is-released"
    >
      <template v-slot:date>Dec 07, 2017</template>
      <template v-slot:event>Netlify CMS is released, bringing</template>
      <template v-slot:event2>git-based content authoring to Jamstack</template>
    </app-text>

    <app-tree x="880" y="3320" />
    <app-streetlamp1 x="900" y="3280" />
  </g>
</template>

<script>
//repeated elements
import AppText from "@/components/AppText.vue";
import AppTree from "@/components/AppTree.vue";
import AppBush from "@/components/AppBush.vue";
import AppStreetlamp1 from "@/components/AppStreetlamp1.vue";

//unique units
import AppTwodoto from "@/components/AppTwodoto.vue";
import AppSmashing from "@/components/AppSmashing.vue";
import AppAuditlogs from "@/components/AppAuditlogs.vue";
import AppNetlifycms from "@/components/AppNetlifycms.vue";
import AppSplittesting from "@/components/AppSplittesting.vue";

export default {
  components: {
    AppText,
    AppTree,
    AppBush,
    AppStreetlamp1,
    AppTwodoto: () =>
      import(/* webpackPrefetch: true */ "@/components/AppTwodoto.vue"),
    AppSmashing: () =>
      import(/* webpackPrefetch: true */ "@/components/AppSmashing.vue"),
    AppAuditlogs: () =>
      import(/* webpackPrefetch: true */ "@/components/AppAuditlogs.vue"),
    AppNetlifycms: () =>
      import(/* webpackPrefetch: true */ "@/components/AppNetlifycms.vue"),
    AppSplittesting: () =>
      import(/* webpackPrefetch: true */ "@/components/AppSplittesting.vue"),
  },
};
</script>

<style lang="scss" scoped></style>
