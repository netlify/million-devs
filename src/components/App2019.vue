<template>
  <g>
    <app-book />
  </g>
</template>

<script>
import AppBook from "@/components/AppBook.vue";

export default {
  components: {
    AppBook: () => import("@/components/AppBook.vue")
  }
};
</script>

<style lang="scss" scoped>
</style>