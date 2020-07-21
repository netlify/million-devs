<template>
  <div class="animtoggle">
    <p>
      <span v-if="isAnimationDisabled">Enable Animations:</span>
      <span v-else>Disable Animations:</span>
    </p>
    <label class="switch">
      <input @click="animToggleStore" type="checkbox" :checked="isAnimationDisabled" />
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isAnimationDisabled"])
  },
  methods: {
    animToggleStore() {
      this.$store.commit("updateAnimationState");
    }
  }
};
</script>

<style lang="scss" scoped>
.animtoggle {
  position: fixed;
  top: 60px;
  right: 10px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #238b5f;
}

input:focus + .slider {
  box-shadow: 0 0 1px #238b5f;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>