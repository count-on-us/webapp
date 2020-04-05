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
        <join-buttons />
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from '@/components/NavBar'
import JoinButtons from '@/components/JoinButtons'

export default {
  components: {
    NavBar,
    JoinButtons
  }
}
</script>
