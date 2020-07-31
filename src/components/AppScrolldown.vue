<template>
  <div class="scrolldown">
    <p>Scroll Down</p>
    <svg
      id="downarrow"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="scrolldownicon"
      role="presentation"
    >
      <title id="scrolldownicon">An arrow icon that tells you to scroll down</title>
      <path
        d="M47.25 24.0171C47.25 19.8921 46.125 15.9546 44.0625 12.3921C42 8.82959 39.1875 6.01709 35.625 3.95459C32.0625 1.89209 28.125 0.76709 24 0.76709C19.7812 0.76709 15.9375 1.89209 12.375 3.95459C8.8125 6.01709 5.90625 8.82959 3.84375 12.3921C1.78125 15.9546 0.75 19.8921 0.75 24.0171C0.75 28.2358 1.78125 32.0796 3.84375 35.6421C5.90625 39.2046 8.8125 42.1108 12.375 44.1733C15.9375 46.2358 19.7812 47.2671 24 47.2671C28.125 47.2671 32.0625 46.2358 35.625 44.1733C39.1875 42.1108 42 39.2046 44.0625 35.6421C46.125 32.0796 47.25 28.2358 47.25 24.0171ZM33.75 21.2983C34.125 20.9233 34.6875 20.6421 35.3438 20.6421C36 20.6421 36.5625 20.9233 37.0312 21.2983L38.0625 22.3296C38.4375 22.7983 38.7188 23.3608 38.7188 23.9233C38.7188 24.5796 38.4375 25.1421 38.0625 25.5171L25.5938 37.8921C25.125 38.3608 24.5625 38.5483 24 38.5483C23.3438 38.5483 22.7812 38.3608 22.4062 37.8921L9.9375 25.5171C9.46875 25.1421 9.28125 24.5796 9.28125 23.9233C9.28125 23.3608 9.46875 22.7983 9.9375 22.3296L10.9688 21.2983C11.3438 20.9233 11.9062 20.6421 12.5625 20.6421C13.2188 20.6421 13.7812 20.9233 14.25 21.2983L21 28.4233V11.2671C21 10.7046 21.1875 10.1421 21.6562 9.67334C22.0312 9.29834 22.5938 9.01709 23.25 9.01709H24.75C25.3125 9.01709 25.875 9.29834 26.3438 9.67334C26.7188 10.1421 27 10.7046 27 11.2671V28.4233L33.75 21.2983Z"
        fill="#0E1E25"
      />
    </svg>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  mounted() {
    gsap.from(".scrolldown", {
      duration: 1,
      opacity: 0,
      delay: 2,
    });
    gsap.to("#downarrow", {
      duration: 1,
      y: 20,
      ease: "circ",
      repeat: 3,
      delay: 3,
      yoyo: true,
    });
  },
};
</script>

<style lang="scss" scoped>
.scrolldown {
  position: absolute;
  top: 85vh;
  left: calc(50vw - 30px);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
}

@media only screen and (max-width: 950px) {
  .scrolldown {
    position: relative !important;
    margin: 0 auto !important;
    top: unset !important;
    left: unset !important;
  }
}
</style>