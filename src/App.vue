<template>
  <div id="app">
    <app-login-result-sticky v-if="user.number" />
    <app-animation-switch />
    <app-github-corner />

    <section class="intro-section">
      <app-header />
    </section>
    <svg id="timeline" xmlns="http://www.w3.org/2000/svg" :viewBox="timelineAttributes.viewBox">
      <!-- 0 -500 2000 8300 -->
      <path
        class="cls-1 timeline-path"
        transform="translate(16.1 -440.3)"
        d="M951.5,7107.4c160.6-147.7,423.3,36.5,589.4-119.7,159-137.3,31.7-387.3-198.9-351.6-121.2,14-304.7,112.2-387.5,26.4-37.6-31.4-33.8-63.1-23.3-120.3,80.6-322-329.1-253.5-489.1-362.7C374.6,6114,473.6,6004.1,514,5964c184.5-62.8,390.3,26.2,575.8-6,210.3-14.5,469.1-261.3,293.9-457.9-105.2-115.8-331.2-77.3-441.2-157.9-32.2-30.2-28.3-60.8-18.3-116.1,56.4-140.1-104.5-307.2-270.5-284.5-100.8,3.1-198.7,48.9-289.8,63-114.2,23.5-171-130.9-55.9-180.8,92.8-39.7,228.7,5.1,341.8-7.3,442-63,337.5-516.2-90.9-458.8-112.1,11.9-183.3-51.5-266.8-115.2-172.4-135.2-75.7-260.4,155.7-243.5,135.2,6.7,347.9-16.8,371.9-178.2,32.7-156.4-132.3-274.2-280.8-281-113.1-12.2-249,32.3-341.8-7.3-43.6-13-73.6-75.3-62.1-98.6,17.8-112.9,134.4-86.1,220.7-57.3,200,89.8,528.7,15.9,457.6-246-10-55.4-13.9-85.6,18.3-116.1,110.1-81,335.9-41.4,441.2-157.9,98.5-97.2,59.1-263.4-45.1-343.6-228.5-198-578.2,48.9-817.4-114-84.3-46.8-143.2-157.2-79-221.8,104.4-87.7,331.4-46.1,438-154.6C900,1912.1,758,1786,843.2,1694.5c83-85.5,266.4,11.1,388,26.1,230.9,34.7,357.6-213.6,198.9-351.6-153.5-169.1-604.7,76.1-616.8-208.1,54-203.7,608.2,66.5,619.1-329.7-12.2-135-226.8-273.2-344.8-330.7l-96.7,82.1c84.3,48.7,441.1,212.7,256.4,349.4-42,40.6-232.8,26.1-336.1,35.7-211.2,1.7-316,244.7-149.5,375.8,139.8,139.1,387.7,35.1,543.3,85.3,43.6,13.8,73.5,74.7,62.1,98.6-17.8,113.4-134.4,85.7-220.7,57.3-199.8-89-528.7-16.8-457.6,246,10,55.4,13.9,85.6-18.4,116.1-109.9,81.9-336.1,40.7-441.1,157.9-117.6,125.4-40.1,291.4,88.7,374.5,234.6,204.9,588.7-27.4,816.2,113,250.7,296.4-277.7,211.7-401.4,346.5C563,3084,879.2,3395.8,398.6,3270.6c-321.5-140.1-562.1,196.6-266,360.6,162.8,84.6,365.4-44.2,514.1,67.1,63.9,53.5,71.5,166.5-64.5,183.6C-28.2,3843-62.3,4283.3,414.7,4458.4c99,36.4,180.7,8.1,278.4,17,206.8,36.6,80.1,234.9-54,229.4-133.7,9.2-266.6-38.7-395.6,21.4C13,4823.7,110.1,5158.6,381.6,5116.3c121.2-14.6,304.7-111.6,387.5-26.4,86.6,91.1-56.8,217.5,74.3,328.4,113.4,132.6,428.8,33.4,464.7,220.2-35.1,102-114.8,188.6-210,174.4-214.6-4.3-489.4-82.6-668.6,64.2-76.7,44.9-142.6,129.4-146.8,219.6-15.3,273.9,347.9,218.8,498.4,313.4,32.2,30.3,28.3,60.8,18.3,116.2C743,6664.8,903.9,6834.6,1070,6810.8c132,14.5,355.6-165.7,407.8,19.1,1.7,231.3-454.8,7.5-605.4,183.6-166.7,130.3-61.7,374.6,149.4,375.8,144.8,13.6,388.6-26.6,389.1,124.5-11.5,101.5-236.5,228-309.4,260.6l96.8,82.1c181.2-93.3,516.2-312.5,246.1-517.4C1359.9,7223.9,786.5,7379.4,951.5,7107.4Z"
      />
      <app-mobilepath v-if="viewportSize === 'small'" />

      <app2016 />
      <app2017 />
      <app2018 />
      <app2019 />
      <app2020 />

      <app-youarehere v-if="user.number && viewportSize === 'large'" />
    </svg>
  </div>
</template>

<script>
import AppText from "@/components/AppText.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppYouarehere from "@/components/AppYouarehere.vue";
import AppMobilepath from "@/components/AppMobilepath.vue";
import AppGithubCorner from "@/components/AppGithubCorner.vue";
import AppLoginResultSticky from "@/components/AppLoginResultSticky.vue";
import AppAnimationSwitch from "@/components/AppAnimationSwitch.vue";
import { mapState } from "vuex";

//sections by year
import App2016 from "@/components/App2016.vue";
import App2017 from "@/components/App2017.vue";
import App2018 from "@/components/App2018.vue";
import App2019 from "@/components/App2019.vue";
import App2020 from "@/components/App2020.vue";

//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    AppLoginResultSticky,
    AppGithubCorner,
    AppMobilepath,
    AppHeader,
    AppText,
    App2016,
    App2017,
    App2018,
    App2019,
    App2020,
    AppAnimationSwitch,
    AppYouarehere: () =>
      import(/* webpackPrefetch: true */ "@/components/AppYouarehere.vue"),
  },
  computed: {
    ...mapState(["viewportSize", "user", "isAnimationDisabled"]),
    timelineAttributes() {
      return {
        viewBox:
          this.viewportSize == "large"
            ? "0 -500 2000 8300"
            : "0 -500 600 18500",
      };
    },
  },
  mounted() {
    var mql = window.matchMedia("(max-width: 1000px)");

    const setViewportSize = (e) => {
      const viewportSize = e.matches ? "small" : "large";
      this.$store.commit("updateViewportState", viewportSize);
    };

    setViewportSize(mql);
    mql.addListener(setViewportSize);
  },
  watch: {
    isAnimationDisabled(newVal, oldVal) {
      ScrollTrigger.getAll().forEach((trigger) => {
        let animation = trigger.animation;
        if (newVal === true) {
          animation && animation.progress(1);
        } else {
          animation && animation.progress(0);
        }
      });
    },
  },
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
  scroll-padding: 10vh;
}

body {
  background: #00dc9e;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: -0.4px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  margin: 8px;
}

.intro-section {
  height: 100vh;
  width: 99%;
}

@media only screen and (max-width: 1000px) {
  #timeline {
    max-width: 600px;
    display: block;
    margin-top: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .svg-tree,
  .svg-bush,
  .svg-streetlamp,
  .timeline-path {
    display: none;
  }
}
</style>

<style lang="scss" scoped>
.cls-1 {
  fill: #15847d;
}
</style>
