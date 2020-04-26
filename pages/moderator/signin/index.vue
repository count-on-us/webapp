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
      ],
      showNotification: false
    }
  },
  methods: {
    onSubmit (form) {
      this.$store.dispatch('authenticateUser', {
        email: form.email,
        password: form.password
      }).then(() => {
        this.$router.push('/moderator/meeting')
      }).catch((e) => {
        if (e.response.status === 401) {
          this.$buefy.notification.open({
            duration: 3000,
            message: 'E-mail ou senha incorretos.',
            position: 'is-bottom',
            type: 'is-danger'
          })
          return
        }

        let html = Array.isArray(e.response.data.message)
          ? e.response.data.message.reduce((acc, msg) => acc + `<li class="is-capitalized">${msg}</li>`, '')
          : `<li class="is-capitalized">${e.response.data.message}</li>`

        html = `<div class="content"><ul class="has-text-left">${html}</ul></div>`

        this.$swal({
          icon: 'error',
          title: e.response.data.message > 1
            ? 'Oops... Alguns erros aconteceram'
            : 'Oops... Um erro aconteceu',
          html
        })
      })
    }
  }
}
</script>
