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
            A Count On Us veio para servir como uma ponte! Um ponte que liga pessoas em isolamento por causa da pandemia do COVID-19 e que precisam de ajuda psicológica para vencer esse desafio, com profissionais de saúde voluntários dispostos a ajudar.
          </p>
          <p>
            Desssa forma, se você é um(a) participante, a partir do seu cadastro você será alertado de quando um(a) de nossos(as) mediadores(as) estiver disponível para uma conversa coletiva (com limite de pessoas) ou individual.
          </p>
          <p>
            Já se você é um(a) mediador(a), poderá iniciar uma reunião online em qualquer serviço (skype, jitsi, hangouts, zoom...) de sua escolha e poderá disparar e-mails para a quantidade de participantes que desejar atender. Os participantes serão convidados automaticamente de acordo com a fila do sistema.
            Após se cadastrar, nossa equipe de voluntários se encarregará de confirmar o seu cadastro após a análise dos dados. Então você poderá iniciar suas reuniões e contribuir com as pessoas que precisam de ajuda nesse momento difícil.
          </p>
          <p>
            Todos(as) os(as) nossos(as) mediadores(as) são psicólogos(as), psiquiatras ou psicanalistas com carteira de registro em seus respectivos conselhos. Tudo para garantir que o trabalho deles de fato proporcione conforto e bem estar para nossos(as) participantes!
          </p>
          <p>
               Todo serviço prestado é gratuito e sem fins lucrativos. Os profissionais participantes são todos voluntários.
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
