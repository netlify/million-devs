<template>
  <a :href="href">Tweet This</a>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user"]),
    href: function () {
      let videoEmbedLink = this.$store.getters.tweetPreviewLink;
      let text = `I've been using Netlify and in celebration of them welcoming 1 million developers, I found my unique spot! I'm number #${this.user.number}!

You can find yours too! https://million-devs.netlify.com/?utm_source=twitter&utm_medium=tweet&utm_campaign=1mdevs`;

      if(videoEmbedLink) {
        text += `

${videoEmbedLink}`;
      }
      let url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&via=Netlify`;
      return url;
    },
  },
};
</script>