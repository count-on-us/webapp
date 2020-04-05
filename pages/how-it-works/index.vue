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
            A <span class="has-text-weight-bold">Count On Us</span> veio para servir como uma ponte!
            <br>
            Uma ponte que liga pessoas (em isolamento por causa da pandemia do COVID-19 e que precisam de ajuda psicológica para vencer esse desafio) à profissionais de saúde voluntários.
          </p>

          <h3 class="has-text-warning">
            Participante
          </h3>
          <p>
            Desssa forma, se você é um(a) participante, ao cadastrar-se você será alertado via e-mail quando um(a) de nossos(as) mediadores(as) estiver disponível para uma conversa coletiva ou individual.
            <br>
            Os convites são enviados de acordo com a fila de espera.
          </p>

          <h3 class="has-text-danger">
            Mediador(a)
          </h3>
          <p>
            Já se você é um(a) mediador(a), após se cadastrar, nossa equipe de voluntários se encarregará de confirmar o seu cadastro mediante análise dos dados.
            <br>
            A análise do cadastro é importante, pois queremos garantir a qualidade do serviço e que nenhuma pessoa sofra algum dano durante os encontros.
            <br>
            Após a confirmação, você então poderá iniciar uma reunião online em qualquer serviço (skype, jitsi, hangouts, zoom...) de sua escolha e poderá disparar e-mails para a quantidade de participantes que desejar atender.
            <br>
            Os participantes serão convidados automaticamente de acordo com a fila do sistema.
          </p>

          <h3 class="has-text-white">
            Observações
          </h3>
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
