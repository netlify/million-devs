<template>
  <div :class="animtoggle">
    <span v-if="isAnimationDisabled">Animations off:</span>
    <span v-else>Animations On:</span>
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
    ...mapState(["isAnimationDisabled", "user"]),
    animtoggle() {
      return {
        toggleloggedin: this.user.number,
        toggleloggedout: !this.user.number,
      };
    },
  },
  methods: {
    animToggleStore() {
      this.$store.commit("updateAnimationState");
    },
  },
};
</script>

<style lang="scss" scoped>
.toggleloggedin {
  position: fixed;
  top: 175px;
  left: 20px;
  background: #00dc9e;
}

.toggleloggedout {
  position: fixed;
  top: 10px;
  left: 10px;
  padding: 10px;
  background: #00dc9e;
}

span {
  font-weight: normal;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-left: 8px;
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
  background-color: #a3a3a3;
  transition: 0.4s all ease;
}

.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s all ease;
}

input:checked + .slider {
  background-color: #238b5f;
}

input:focus + .slider {
  box-shadow: 0 0 1px #238b5f;
}

input:checked + .slider:before {
  transform: translateX(20px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>