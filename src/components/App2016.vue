<template>
  <g>
    <app-tree x="1100" y="50" />
    <app-redirect x="1100" y="150" xSmall="100" ySmall="450" />
    <app-bush />
    <app-streetlamp2 />

    <app-tree x="750" y="300" />
    <app-tree x="800" y="320" />
    <app-tree x="700" y="350" />

    <app-github x="500" y="450" xSmall="50" ySmall="1550" />
    <app-tree x="1050" y="620" />

    <app-text x="200" y="700" xSmall="75" ySmall="2000" num="2">
      <template v-slot:date>Jul 13, 2016</template>
      <template v-slot:event>Added GitLab integration</template>
      <template v-slot:event2>(in addition to GitHub and Bitbucket)</template>
    </app-text>

    <app-letsencrypt x="1020" y="620" xSmall="100" ySmall="900" />

    <app-text x="1450" y="650" xSmall="75" ySmall="1300" num="3">
      <template v-slot:date>Jan 01, 2016</template>
      <template v-slot:event>Netlify first hosting provider to</template>
      <template v-slot:event2>offer free SSL through Let's Encrypt</template>
    </app-text>

    <app-streetlamp1 x="1450" y="950" />
    <app-bush x="1350" y="1150" />

    <app-seed x="800" y="950" xSmall="100" ySmall="2300" />

    <app-text x="1180" y="1050" xSmall="75" ySmall="2750" num="4">
      <template v-slot:date>Aug 16, 2016</template>
      <template v-slot:event>Raised seed funding and joined</template>
      <template v-slot:event2>Heavybit accelerator program</template>
    </app-text>
    <app-tree x="600" y="1050" />
    <app-bush x="800" y="1350" />

    <app-deploypreview x="350" y="1350" xSmall="100" ySmall="3050" />
    <app-text x="50" y="1180" xSmall="75" ySmall="3450" num="5">
      <template v-slot:date>Aug 30, 2016</template>
      <template v-slot:event>Introduced Deploy Previews</template>
    </app-text>

    <app-streetlamp2 x="100" y="1550" />
    <app-bush x="0" y="1700" />
    <app-bush x="50" y="1750" />

    <app-deploybutton x="220" y="1800" xSmall="100" ySmall="3750" />
    <app-text x="150" y="2050" xSmall="75" ySmall="4050" num="5">
      <template v-slot:date>Aug 30, 2016</template>
      <template v-slot:event>Introduced Deploy to Netlify Button</template>
    </app-text>
    <app-tree x="640" y="2100" />
  </g>
</template>

<script>
//repeated elements
import AppTree from "@/components/AppTree.vue";
import AppBush from "@/components/AppBush.vue";
import AppText from "@/components/AppText.vue";
import AppStreetlamp1 from "@/components/AppStreetlamp1.vue";
import AppStreetlamp2 from "@/components/AppStreetlamp2.vue";

//unique units
import AppSeed from "@/components/AppSeed.vue";
import AppGithub from "@/components/AppGithub.vue";
import AppRedirect from "@/components/AppRedirect.vue";
import AppLetsencrypt from "@/components/AppLetsencrypt.vue";
import AppDeploybutton from "@/components/AppDeploybutton.vue";
import AppDeploypreview from "@/components/AppDeploypreview.vue";

export default {
  components: {
    AppText,
    AppTree,
    AppBush,
    AppStreetlamp1,
    AppStreetlamp2,
    AppSeed: () =>
      import(/* webpackPrefetch: true */ "@/components/AppSeed.vue"),
    AppGithub: () =>
      import(/* webpackPrefetch: true */ "@/components/AppGithub.vue"),
    AppRedirect: () =>
      import(/* webpackPrefetch: true */ "@/components/AppRedirect.vue"),
    AppLetsencrypt: () =>
      import(/* webpackPrefetch: true */ "@/components/AppLetsencrypt.vue"),
    AppDeploybutton: () =>
      import(/* webpackPrefetch: true */ "@/components/AppDeploybutton.vue"),
    AppDeploypreview: () =>
      import(/* webpackPrefetch: true */ "@/components/AppDeploypreview.vue"),
  },
};
</script>

<style lang="scss" scoped></style>
