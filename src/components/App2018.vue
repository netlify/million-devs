<template>
  <g>
    <app-functions x="200" y="3350" xSmall="75" ySmall="7900" id="milestone-functions" />

    <app-bush x="0" y="3750" />
    <app-text x="620" y="3480" xSmall="75" ySmall="8250" num="11" url-slug="launched-netlify-functions">
      <template v-slot:date>Mar 20, 2018</template>
      <template v-slot:event>Launched Netlify Functions!</template>
    </app-text>

    <app-streetlamp2 x="100" y="3280" />

    <app-drop x="200" y="3700" xSmall="75" ySmall="8600" />
    <app-text x="0" y="3950" xSmall="75" ySmall="8950" num="12" url-slug="launched-netlify-drop-https-app-netlify-com-drop-a-simple-drag-n-drop-way-to-launch-sites">
      <template v-slot:date>Aug 14, 2018</template>
      <template v-slot:event>Launched Netlify Drop</template>
      <template v-slot:event2>a simple drag-n-drop way to launch sites</template>
    </app-text>

    <app-jamstack1 x="700" y="3900" xSmall="75" ySmall="9300" />
    <app-tree x="600" y="4000" />
    <app-text x="1000" y="4200" xSmall="75" ySmall="9700" num="13" url-slug="world-s-first-jamstack-conf">
      <template v-slot:date>Oct 10, 2018</template>
      <template v-slot:event>World's First Jamstack Conf</template>
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
import AppDrop from "@/components/AppDrop.vue";
import AppJamstack1 from "@/components/AppJamstack1.vue";
import AppFunctions from "@/components/AppFunctions.vue";

export default {
  components: {
    AppText,
    AppTree,
    AppBush,
    AppStreetlamp2,
    AppDrop: () => import("@/components/AppDrop.vue"),
    AppJamstack1: () => import("@/components/AppJamstack1.vue"),
    AppFunctions: () => import("@/components/AppFunctions.vue"),
  },
};
</script>

<style lang="scss" scoped></style>
