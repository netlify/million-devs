<template>
  <g>
    <app-bush x="800" y="4300" />
    <app-largemedia />
    <app-text x="0" y="4680" num="14">
      <template v-slot:date>Jul 31, 2019</template>
      <template v-slot:event>First O'Reilly Jamstack Book</template>
    </app-text>

    <app-book />
    <app-text x="1080" y="4600" num="15">
      <template v-slot:date>Jul 31, 2019</template>
      <template v-slot:event>First O'Reilly Jamstack Book</template>
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
import AppLargemedia from "@/components/AppLargemedia.vue";

export default {
  components: {
    AppText,
    AppTree,
    AppBush,
    AppStreetlamp2,
    AppBook: () => import("@/components/AppBook.vue"),
    AppLargemedia: () => import("@/components/AppLargemedia.vue")
  }
};
</script>

<style lang="scss" scoped>
</style>