<template>
  <section class="hero is-light is-fullheight is-bold">
    <div class="hero-head">
      <nav-bar />
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container">
        <div class="content">
          <h1 class="title has-text-centered">
            Cadastro de participante
          </h1>
          <div class="columns is-centered">
            <div class="column is-half">
              <form>
                <b-field
                  label="Nome"
                >
                  <b-input
                    v-model="form.name"
                    placeholder="Insira seu nome"
                  />
                </b-field>

                <b-field
                  label="E-mail"
                >
                  <b-input
                    v-model="form.email"
                    type="email"
                    placeholder="Insira seu e-mail"
                  />
                </b-field>

                <div class="level">
                  <div class="level-left">
                    <div class="level-item">
                      Dúvidas? Veja
                      <nuxt-link
                        to="/how-it-works"
                        class=""
                      >
                        &nbsp;como funciona.
                      </nuxt-link>
                    </div>
                  </div>

                  <!-- Right side -->
                  <div class="level-right">
                    <div class="level-item">
                      <b-button
                        type="is-success"
                        native-type="submit"
                      >
                        Enviar
                      </b-button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
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
  },
  data () {
    return {
      form: {},
      jobOptions: [
        {
          text: 'Psicólogo',
          value: '1'
        },
        {
          text: 'Psicanalista',
          value: '2'
        },
        {
          text: 'Psiquiatra',
          value: '3'
        }
      ]
    }
  }
}
</script>
