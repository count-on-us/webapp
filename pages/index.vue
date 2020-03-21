<template>
  <section class="hero is-dark is-fullheight is-bold">
    <div class="hero-head">
      <nav-bar />
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <figure class="image is-128x128 container">
          <img
            src="~/assets/images/logo.png"
            alt="Logo"
          >
        </figure>
        <h1 class="title">
          Count On Us
        </h1>
        <h2 class="subtitle">
          Ajudando as pessoas a suportar a quarentena do COVID-19
        </h2>
        <div class="buttons is-centered">
          <b-button
            type="is-warning"
            outlined
            tag="nuxt-link"
            to="/guest"
          >
            Sou participante
          </b-button>
          <b-button
            type="is-danger"
            outlined
            tag="nuxt-link"
            to="/moderator"
          >
            Sou mediador
          </b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>
