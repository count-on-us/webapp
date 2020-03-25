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
            Como funciona?
          </h1>
          <p>
            A Count On Us veio para servir como uma ponte!
          </p>
          <p>
            Desssa forma, se você é um(a) participante, a partir do seu cadastro você será alertado de quando um(a) de nossos(as) mediadores(as) estiver disponível para uma conversa coletiva (com limite de pessoas) ou individual.
          </p>
          <p>
            Já se você é um(a) mediador(a), você terá acesso ao contato de nossos participantes, poderá marcar os horários em que estará disponível para prestar auxílio e conduzir chats via WhatsApp, Hangouts ou Skype.
          </p>
          <p>
            Todos(as) os(as) nossos(as) mediadores(as) são psicólogos(as), psiquiatras ou psicanalistas com carteira de registro em seus respectivos conselhos. Tudo para garantir que o trabalho deles de fato proporcione conforto e bem estar para nossos(as) participantes!
          </p>
        </div>
        <h2 class="subtitle has-text-centered">
          Junte-se a nós!
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
