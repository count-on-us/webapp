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
        href="#"
        tag="nuxt-link"
        to="/"
      >
        Home
      </b-navbar-item>
      <b-navbar-item
        tag="nuxt-link"
        to="/how-it-works"
      >
        Como funciona?
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
export default {

}
</script>

<style>

</style>
