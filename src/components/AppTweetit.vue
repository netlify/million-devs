<template>
  <a :href="href">Tweet This</a>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user"]),
    href: function () {
      let link = this.$store.getters.tweetPreviewLink;
      let text = `Netlify has onboarded 1 Million Developers and I was #${this.user.number}!

Find out your number at https://million-devs.netlify.com/

${link}`;
      let url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&via=Netlify`;
      return url;
    },
  },
};
</script>