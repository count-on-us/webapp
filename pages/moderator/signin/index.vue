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
            Login de mediador(a)
          </h1>
          <div class="columns is-centered">
            <div class="column is-half">
              <moderator-signin-form
                @submit="onSubmit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from '@/components/NavBar'
import ModeratorSigninForm from '@/components/ModeratorSigninForm'

export default {
  components: {
    NavBar,
    ModeratorSigninForm
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
  },
  methods: {
    onSubmit (form) {
      this.$store.dispatch('authenticateUser', {
        isLogin: true,
        email: form.email,
        password: form.password
      }).then(() => {
        this.$router.push('/moderator/meeting')
      })
    }
  }
}
</script>
