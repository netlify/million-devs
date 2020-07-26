<template>
  <div @click="tweetit">Tweet!</div>
</template>

<script>
export default {
  methods: {
    tweetit() {
      console.log("working");
      window.location = `https://twitter.com/intent/tweet?text=thing+here&via=Netlify`;
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