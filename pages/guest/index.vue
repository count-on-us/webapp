<template>
  <section class="hero is-dark is-fullheight is-bold">
    <div class="hero-head">
      <nav-bar />
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container">
        <div class="content">
          <h1 class="title">
            Olá, participante.
          </h1>
          <p>
            Antes de mais nada, seja bem-vindo(a)! Estamos aqui para te ajudar nesse período conturbado.
          </p>
          <p>
            A <b>Count On Us </b> é uma plataforma que busca aproximar pessoas em isolamento que estejam precisando de auxílio e profissionais voluntários que estejam disponíveis para auxiliá-las.
            Este é um serviço 100% gratuito e voluntário, formulado excepcionalmente devido à crise da pandemia do COVID-19.
          </p>
          <p>
            Quer saber mais? Visite a página
            <nuxt-link
              to="/how-it-works"
              class=""
            >
              como funciona.
            </nuxt-link>
          </p>
        </div>
        <div class="buttons is-centered">
          <b-button
            type="is-success"
            outlined
            tag="nuxt-link"
            to="/guest/signup"
          >
            Cadastro
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
