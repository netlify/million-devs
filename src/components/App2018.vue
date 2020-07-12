<template>
  <g>
    <app-functions />

    <app-bush x="0" y="3750" />
    <app-text x="620" y="3480" num="11">
      <template v-slot:date>Mar 20, 2018</template>
      <template v-slot:event>Launched Netlify Functions!</template>
    </app-text>

    <app-streetlamp2 x="100" y="3280" />

    <app-drop />
    <app-text x="0" y="3950" num="12">
      <template v-slot:date>Mar 20, 2018</template>
      <template v-slot:event>Launched Netlify Drop</template>
      <template v-slot:event2>a simple drag-n-drop way to launch sites</template>
    </app-text>

    <app-jamstack1 />
    <app-tree x="600" y="4000" />
    <app-text x="1000" y="4200" num="12">
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
    AppFunctions: () => import("@/components/AppFunctions.vue")
  }
};
</script>

<style lang="scss" scoped></style>
