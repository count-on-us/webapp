<template>
  <b-navbar>
    <template slot="brand">
      <!-- <b-navbar-item
        tag="nuxt-link"
        to="/"
      >
        <img
          src="~/assets/images/logo.png"
          alt="Logo"
        >
      </b-navbar-item> -->
    </template>

    <template slot="end">
      <b-navbar-item
        tag="nuxt-link"
        to="/"
        exact
      >
        Início
      </b-navbar-item>
      <b-navbar-item
        tag="nuxt-link"
        to="/how-it-works"
      >
        Como funciona?
      </b-navbar-item>
      <b-navbar-item
        v-if="!isAuthenticated"
        tag="nuxt-link"
        to="/moderator/signin"
      >
        Login
      </b-navbar-item>
      <b-navbar-item
        v-else
        tag="div"
      >
        <b-button
          @click="onLogout"
          type="is-primary"
          outlined
        >
          Logout
        </b-button>
      </b-navbar-item>
      <b-navbar-item
        tag="div"
      >
        <b-button
          href="https://github.com/count-on-us/count-on-us"
          target="_blank"
          icon-left="github-circle"
          tag="a"
        >
          Contribua
        </b-button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'check-auth',

  computed: {
    ...mapGetters(['isAuthenticated'])
  },

  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/moderator')
    }
  }
}
</script>

<style>

</style>
