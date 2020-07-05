<template>
  <div id="app">
    <app-jet />
  </div>
</template>

<script>
import AppJet from "@/components/AppJet.vue";

export default {
  components: {
    AppJet
  }
};
</script>

<style lang="scss">
body {
  background: #00dc9e;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
