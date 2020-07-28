<template>
  <a :href="href">Tweet This</a>
</template>

<script>
export default {
  computed: {
    href: function() {
      return `https://twitter.com/intent/tweet?text=thing+here&via=Netlify`
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  // position: fixed;
  // top: 0;
  // right: 0;
  // padding: 10px;
}
</style>