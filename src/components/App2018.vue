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
    <app-text x="0" y="3950" num="10">
      <template v-slot:date>Mar 20, 2018</template>
      <template v-slot:event>Launched Netlify Drop</template>
      <template v-slot:event2>a simple drag-n-drop way to launch sites</template>
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
import AppFunctions from "@/components/AppFunctions.vue";

export default {
  components: {
    AppText,
    AppTree,
    AppBush,
    AppStreetlamp2,
    AppDrop: () => import("@/components/AppDrop.vue"),
    AppFunctions: () => import("@/components/AppFunctions.vue")
  }
};
</script>

<style lang="scss" scoped></style>
