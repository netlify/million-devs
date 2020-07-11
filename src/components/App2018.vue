<template>
  <g>
    <app-functions />
    <app-drop />
  </g>
</template>

<script>
//repeated elements
import AppTree from "@/components/AppTree.vue"
import AppBush from "@/components/AppBush.vue"
import AppText from "@/components/AppText.vue"
import AppStreetlamp1 from "@/components/AppStreetlamp1.vue"

//unique units
import AppDrop from "@/components/AppDrop.vue"
import AppFunctions from "@/components/AppFunctions.vue"

export default {
  components: {
    AppText,
    AppTree,
    AppBush,
    AppStreetlamp1,
    AppDrop: () => import("@/components/AppDrop.vue"),
    AppFunctions: () => import("@/components/AppFunctions.vue"),
  },
}
</script>

<style lang="scss" scoped></style>
