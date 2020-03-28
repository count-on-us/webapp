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
              <guest-signup-form />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from '@/components/NavBar'
import GuestSignupForm from '@/components/GuestSignupForm'

export default {
  components: {
    NavBar,
    GuestSignupForm
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
