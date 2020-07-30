<template>
  <div v-if="!isLoggedIn" class="dialog">
    <h3>Find out your place in our timeline</h3>
    <span class="warning" v-if="!userFound">Welcome to the Netlify community! It doesn't look like you were in our first million users, but we're glad you're here!</span>
    <button v-on:click="login()" class="netlify-login-btn" aria-label="Login with Netlify">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="173" height="40" viewBox="0 0 173 40" aria-hidden="true" focusable="false"><defs><rect id="a" width="173" height="40" rx="4"/></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><g class="netlify-login-btn-fill" fill="#00AD9F" mask="url(#b)"><path d="M0 0h173v40H0z"/></g><path fill="#FFF" fill-rule="nonzero" d="M39.2 24.4h5.2V26h-7.2V14.6h2v9.8zm6.1-2.7c0-.8.2-1.6.5-2.2.4-.7.8-1.2 1.4-1.6.6-.3 1.3-.5 2-.5 1.2 0 2.1.4 2.8 1 .8.8 1.1 1.8 1.2 3v.5a5 5 0 0 1-.5 2.2c-.3.7-.8 1.2-1.4 1.5a4 4 0 0 1-2 .6c-1.2 0-2.2-.4-2.9-1.2-.7-.8-1-1.9-1-3.2v-.1zm2 .2c0 .8.1 1.5.5 2 .3.5.8.7 1.5.7.6 0 1.1-.2 1.5-.7.3-.5.5-1.2.5-2.2 0-.9-.2-1.5-.5-2-.4-.5-1-.8-1.5-.8-.7 0-1.2.3-1.5.8-.4.4-.6 1.2-.6 2.2zm7.2-.2a5 5 0 0 1 .9-3.1 3 3 0 0 1 2.5-1.2c1 0 1.7.3 2.2 1l.1-.9H62v8.2c0 1.2-.3 2-1 2.7a4 4 0 0 1-2.8 1c-.6 0-1.2-.2-1.8-.5-.6-.2-1-.6-1.4-1l1-1.1c.5.7 1.2 1 2 1 .7 0 1.2-.1 1.6-.5.3-.3.5-.8.5-1.5v-.6c-.5.7-1.2 1-2.2 1a3 3 0 0 1-2.4-1.2c-.6-.8-1-1.9-1-3.3zm1.9.2c0 .8.1 1.5.5 2 .3.5.8.7 1.4.7.8 0 1.4-.3 1.7-1V20c-.3-.6-.9-1-1.7-1-.6 0-1 .3-1.4.8-.4.5-.5 1.2-.5 2.2zm9.5 4.1H64v-8.5h1.9V26zm-2-10.6c0-.3 0-.6.3-.8.1-.2.4-.3.7-.3.4 0 .7.1.8.3.2.2.3.5.3.8 0 .2 0 .5-.3.7-.1.2-.4.3-.8.3-.3 0-.6-.1-.7-.3a1 1 0 0 1-.3-.7zm5.8 2.1v1a3 3 0 0 1 2.5-1.1c1.8 0 2.7 1 2.7 3V26H73v-5.5c0-.5 0-1-.3-1.2-.3-.2-.6-.4-1.2-.4-.7 0-1.3.4-1.7 1V26H68v-8.5h1.8zm18.6 5.9l1.3-5.9h1.9L89.2 26h-1.6l-1.8-5.8L84 26h-1.6l-2.3-8.5H82l1.3 5.8 1.8-5.8h1.4l1.8 5.9zm6.5 2.6h-2v-8.5h2V26zm-2-10.6c0-.3 0-.6.2-.8.2-.2.5-.3.8-.3.4 0 .6.1.8.3.2.2.3.5.3.8 0 .2-.1.5-.3.7-.2.2-.4.3-.8.3-.3 0-.6-.1-.8-.3a1 1 0 0 1-.3-.7zm6.4 0v2.1h1.5V19h-1.5v4.7c0 .3 0 .5.2.7.1.1.3.2.7.2h.6V26l-1.2.2c-1.5 0-2.2-.8-2.2-2.5V19h-1.4v-1.5h1.4v-2h1.9zm4.8 3a3 3 0 0 1 2.4-1c1.8 0 2.7 1 2.7 3V26h-1.9v-5.5c0-.5-.1-1-.4-1.2-.2-.2-.6-.4-1-.4-.8 0-1.4.4-1.8 1V26h-1.9V14h2v4.5zm20.2 7.6h-2l-5-8v8h-2V14.6h2l5 8.1v-8h2V26zm5.9.2a4 4 0 0 1-3-1.2 4.1 4.1 0 0 1-1-3v-.2c0-.9.1-1.6.4-2.3.4-.7.8-1.2 1.4-1.6.6-.3 1.2-.5 2-.5 1.1 0 2 .4 2.6 1 .7.8 1 1.9 1 3.2v.8H128c0 .7.2 1.2.7 1.6.4.4.9.6 1.5.6.9 0 1.6-.3 2.1-1l1 1c-.3.5-.7.9-1.3 1.1-.6.3-1.2.5-2 .5zm-.2-7.3c-.6 0-1 .2-1.3.6-.3.3-.5.8-.6 1.5h3.6v-.2c0-.6-.2-1-.5-1.4-.3-.3-.7-.5-1.2-.5zm7.4-3.4v2h1.5V19h-1.5v4.7l.2.7.7.2h.7V26l-1.3.2c-1.4 0-2.2-.8-2.2-2.5V19H134v-1.5h1.4v-2h2zm5 10.5h-2V14h2v12zm4 0h-1.8v-8.5h1.9V26zm-2-10.6c0-.3.2-.6.3-.8.2-.2.5-.3.8-.3.4 0 .6.1.8.3.2.2.3.5.3.8 0 .2 0 .5-.3.7-.2.2-.4.3-.8.3-.3 0-.6-.1-.8-.3a1 1 0 0 1-.2-.7zm4.8 10.6v-7h-1.3v-1.5h1.3v-.7c0-1 .3-1.7.8-2.2a3 3 0 0 1 2.2-.8c.3 0 .7 0 1 .2v1.5l-.7-.1c-1 0-1.4.5-1.4 1.4v.7h1.7V19H151v7h-1.9zm8-2.7l1.7-5.8h2l-3.3 9.8c-.6 1.4-1.4 2.1-2.7 2.1l-.9-.1v-1.5h.4c.5 0 .8 0 1-.2.3-.2.5-.5.6-1l.3-.6-3-8.5h2l1.9 5.8zM22.3 17l.3-2.4 1.9 1.9-2 .8-.2-.2zm2.6 0l2 1.9c.4.4.6.6.6.8v.1l-4.6-2 2-.9zm2.6 3.4l-.6.7-2.2 2.2-2.8-.6h-.1l-.3-.6.5-3.3c.3-.1.5-.2.6-.4l4.9 2zm-3.3 3.4l-3.6 3.6.6-3.8c.2 0 .3-.2.4-.3l2.6.5zm-4.4 4.4l-.4.4L15 22V22h.1l5 1c.1.3.3.5.6.6l-.8 4.6zm-.8.8c-.3.3-.5.5-.7.5a1 1 0 0 1-.6 0c-.2 0-.4-.2-.8-.6l-4.5-4.5 1.1-1.9h.1a1.2 1.2 0 0 0 .8 0L19 29zm-7-5l-1.1-1.1 2-.9h.1v.2l-1 1.7zm-1.6-1.6l-1.3-1.3-.5-.5 4 .8v.1l-2.2 1zm-2-2.5v-.2l.7-.8 1.7-1.7a1087.8 1087.8 0 0 0 2.3 3.3 1.4 1.4 0 0 0-.2.4l-4.5-1zm2.9-3.2l2.2-2.2 1.7.7a286 286 0 0 1 1.1.8c0 .2.1.5.3.7l-2.3 3.6h-.6l-2.4-3.6zM14 14l2.9-2.9c.4-.4.6-.6.8-.6h.6c.2 0 .4.2.8.6l.7.7-2.1 3.2h-.4a1 1 0 0 0-.6.2L14 14zm6.2-1.8l2 2-.5 2.8a1 1 0 0 0-.4.2l-3-1.3a1.1 1.1 0 0 0-.1-.5l2-3.2zm-2 4.3l2.8 1.2v.2l-6.1 2.7v-.1L17 17h.2a1 1 0 0 0 .9-.5zm-3 4.6l6-2.6h.2v.1l-.5 3.2v.1c-.3 0-.6.2-.7.4H20l-4.9-1v-.2z"/></g></svg>
    </button>
  </div>
</template>

<script>
import AppLoginResult from "@/components/AppLoginResult.vue";

export default {
  components: {
    AppLoginResult,
  },
  computed: {
    response: function() {
      if(!window.location.hash || window.location.hash === "#") {
        return {};
      }
      return this.parseHash(window.location.hash);
    },
    isLoggedIn: function() {
      return !!this.response.token && this.userFound;
    },
    avatarImg: function() {
      return this.response.avatar;
    },
    fullName: function() {
      return this.response.full_name;
    },
    userFound: function() {
      return !this.response.not_found;
    },
    userNumber: function() {
      let formattedUserNumber = this.response.user_number;
      if(formattedUserNumber && "Intl" in window && Intl.NumberFormat) {
        formattedUserNumber = new Intl.NumberFormat().format(parseInt(formattedUserNumber, 10));
      }
      return formattedUserNumber;
    }
  },
  methods: {
    csrfToken: function() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8) // eslint-disable-line
        return v.toString(16)
      })
    },
    parseHash: function(hash) {
      if (!hash) return {}
      return hash.replace(/^#/, '').split('&').reduce((result, pair) => {
        const keyValue = pair.split('=')
        result[keyValue[0]] = this.decode(keyValue[1])
        return result
      }, {})
    },
    removeHash: function() {
      document.location.hash = '';
      history.replaceState("", document.title, `${window.location.pathname}${window.location.search}`);
    },
    decode: function(s) {
      return decodeURIComponent(s).replace(/\+/g, ' ')
    },
    initResponse: function() {
      this.removeHash();

      /* Protect against csrf (cross site request forgery https://bit.ly/1V1AvZD) */
      if (this.isLoggedIn && !localStorage.getItem(this.response.csrf)) {
        alert('Token invalid. Please try to login again');
        return;
      }

      /* Clean up csrfToken */
      if(this.response.csrf) {
        localStorage.removeItem(this.response.csrf);
      }

      if(this.isLoggedIn) {
        this.$store.commit("login", {
          name: this.fullName,
          found: this.userFound,
          number: this.userNumber
        });
      }
    },
    login: function() {
      let token = this.csrfToken();

      /* Set csrf token */
      localStorage.setItem(token, 'true');

      /* Do redirect */
      window.location.href = `https://million-devs-api.netlify.app/.netlify/functions/auth-start?url=${window.location.origin}${window.location.pathname}&csrf=${token}`;
    }
  },
  mounted() {
    this.initResponse();
  }
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 0 0 .5rem;
}
button {
  margin: 0 auto .5rem;
  display: flex;
  border: none;
  background: transparent;
  appearance: none;
  padding: 0;
}
button:hover .netlify-login-btn-fill {
  fill: #00756c;
}

.warning {
  display: flex;
  margin: 0 -.5rem 1rem;
  line-height: 1.5;
  padding: .5rem;
  background-color: #ffbc65;
}

.dialog {
  padding: 10px 20px;
  margin: 40px 0;
  border-radius: 4px;
  background: white;
}
</style>
