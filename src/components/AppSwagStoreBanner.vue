<template>
  <div class="container">
    <div class="content">
      <p class="badge-container">
        <span class="badge">Limited Edition</span>
      </p>
      <p class="heading">
        1M Developers
        <br />
        Collection
      </p>
      <a href="https://swag.netlify.com/#promo" class="button">
        Shop now <span aria-hidden="true">↗</span>
      </a>
    </div>
    <div class="image">
      <picture class="lazy-image-loaded">
        <source type="image/webp" srcset="@/assets/1ms-dev-promo-image.webp">
        <source type="image/png" srcset="@/assets/1ms-dev-promo-image.png">
        <img alt="1 Million Devs Stickers and Baseball Tee" class="conference-card__image" src="@/assets/1ms-dev-promo-image.png">
      </picture>
    </div>
  </div>
</template>

<script>

export default {
  
};
</script>

<style lang="scss" scoped>

  .container {
    --color-black: #0E1E25;
    --color-white: #fff;
    --color-green: #00DC9E;

    margin: 4em auto 12em auto;
    max-width: 90vw;
    width: 1100px;
    border: 5px solid var(--color-white);
    border-radius: 12px;
    box-shadow: 0 0 0 1px #0e1e2511, 0 4px 4px #0e1e2511;;
    background-color: var(--color-black);
    color: var(--color-white);
    display: flex;
    flex-wrap: wrap;
  }

  .heading {
    font-family: MADE-Dillan;
    font-size: clamp(2em, 4vw, 3.1em);
    font-weight: 400;
    line-height: 1;
    margin-top: 0.1em;
  }

  .content {
    padding: 1.5em 3em;
  }

  .image {
    flex: 1 1 50%;
    align-self: flex-end;

    img {
      max-width: 100%;
      display: block;
    }
  }

  .badge-container {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .badge {
    clip-path: polygon(0 0, 100% 0, 92% 50%, 100% 100%, 0 100%);
    margin-left: -3rem;
    display: inline-block;
    background-color: var(--color-green);
    font-size: 1.75em;
    font-size: clamp(1.4em,4vw,1.75em);
    font-weight: 700;
    color: var(--color-black);
    padding: 0.35em 3rem;
  }

  .button {
    background: #fff;
    border-radius: 6px;
    color: var(--color-black);
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    font-size: clamp(1em, 4vw, 1.2em);
    font-weight: 700;
    position: relative;
    padding: 0.5em;
    transition: background 200ms, transform 150ms;
    z-index: 3;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;

    &:hover {
      background-color: var(--color-green);
      transform: scale(1.2);
    }
  }

  @media (max-width: 750px) {
    
    .badge {
      clip-path: polygon(0 0, 8% 50%, 0% 100%, 100% 100%, 92% 50%, 100% 0%);
      margin: 0 0 0.5em 0;
    }

    .container {
      flex-direction: column;
      text-align: center;
    }

    .image {
      align-self: center;
    }

    .image img {
      max-width: 29em;
      width: 100%;
    }

    .content {
      padding: 1.5em 0;
    }
  }

</style>