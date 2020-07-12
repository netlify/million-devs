<template>
  <g>
    <app-tree x="1100" y="50" />
    <app-redirect x="1100" y="150" />
    <app-bush />
    <app-streetlamp2 />

    <app-tree x="750" y="300" />
    <app-tree x="800" y="320" />
    <app-tree x="700" y="350" />

    <app-github x="500" y="450" />
    <app-tree x="1050" y="620" />

    <app-text x="200" y="700" num="2">
      <template v-slot:date>Jul 13, 2016</template>
      <template v-slot:event>Added GitLab integration</template>
      <template v-slot:event2>(in addition to GitHub and Bitbucket)</template>
    </app-text>

    <app-letsencrypt />

    <app-text x="1450" y="650" num="3">
      <template v-slot:date>Jan 01, 2016</template>
      <template v-slot:event>Netlify first hosting provider to</template>
      <template v-slot:event2>offer free SSL through Let's Encrypt</template>
    </app-text>

    <app-streetlamp1 x="1450" y="950" />
    <app-bush x="1350" y="1150" />

    <app-seed />

    <app-text x="1180" y="1050" num="4">
      <template v-slot:date>Aug 16, 2016</template>
      <template v-slot:event>Raised seed funding and joined</template>
      <template v-slot:event2>Heavybit accelerator program</template>
    </app-text>
    <app-tree x="600" y="1050" />
    <app-bush x="800" y="1350" />

    <app-deploypreview />
    <app-text x="50" y="1180" num="5">
      <template v-slot:date>Aug 30, 2016</template>
      <template v-slot:event>Introduced Deploy Previews</template>
    </app-text>

    <app-streetlamp2 x="100" y="1550" />
    <app-bush x="0" y="1700" />
    <app-bush x="50" y="1750" />

    <app-deploybutton />
    <app-text x="150" y="2050" num="5">
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
      import(/* webpackPrefetch: true */ "@/components/AppDeploypreview.vue")
  }
};
</script>

<style lang="scss" scoped></style>
