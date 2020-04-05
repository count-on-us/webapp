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
            Olá, mediador(a).
          </h1>
          <p>
            Antes de mais nada, muito obrigado! Sua ajuda será fundamental nesse período conturbado.
          </p>
          <p>
            A <b>Count On Us </b> é uma plataforma que busca aproximar pessoas em isolamento que estejam precisando de auxílio e profissionais voluntários que estejam disponíveis a auxiliá-las.
            Este é um serviço 100% gratuito e voluntário, formulado excepcionalmente devido à crise da pandemia do COVID-19.
            Se você compreende essas premissas e deseja se juntar a nós, seja bem-vindo(a).
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
            to="/moderator/signup"
          >
            Cadastro
          </b-button>
          <b-button
            type="is-info"
            outlined
            tag="nuxt-link"
            to="/moderator/signin"
          >
            Login
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
