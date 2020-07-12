<template>
  <g>
    <app-tree x="1100" y="50" />
    <app-redirect x="1100" y="150" />
    <app-bush />
    <app-tree x="850" y="100" />
    <app-tree x="900" y="120" />
    <app-tree x="800" y="150" />
    <app-github />
    <app-tree x="1050" y="320" />

    <app-text x="200" y="410" num="2">
      <template v-slot:date>Jul 13, 2016</template>
      <template v-slot:event>Added GitLab integration</template>
      <template v-slot:event2>(in addition to GitHub and Bitbucket)</template>
    </app-text>

    <app-letsencrypt />

    <app-text x="1520" y="450" num="3">
      <template v-slot:date>Jan 01, 2016</template>
      <template v-slot:event>Netlify first hosting provider to</template>
      <template v-slot:event2>offer free SSL through Let's Encrypt</template>
    </app-text>

    <app-streetlamp1 x="1550" y="650" />
    <app-bush x="1450" y="700" />

    <app-seed />

    <app-text x="1000" y="800" num="4">
      <template v-slot:date>Aug 16, 2016</template>
      <template v-slot:event>Raised seed funding and joined</template>
      <template v-slot:event2>Heavybit accelerator program</template>
    </app-text>

    <app-deploypreview />
    <app-text x="50" y="650" num="5">
      <template v-slot:date>Aug 30, 2016</template>
      <template v-slot:event>Introduced Deploy Previews</template>
    </app-text>

    <app-bush x="50" y="850" />
    <app-bush x="100" y="900" />

    <app-deploybutton />
    <app-text x="50" y="1500" num="5">
      <template v-slot:date>Aug 30, 2016</template>
      <template v-slot:event>Introduced Deploy to Netlify Button</template>
    </app-text>
    <app-tree x="500" y="1420" />
  </g>
</template>

<script>
//repeated elements
import AppTree from "@/components/AppTree.vue";
import AppBush from "@/components/AppBush.vue";
import AppText from "@/components/AppText.vue";
import AppStreetlamp1 from "@/components/AppStreetlamp1.vue";

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
