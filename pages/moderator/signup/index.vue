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
            Cadastro de mediador(a)
          </h1>
          <div class="columns is-centered">
            <div class="column is-half">
              <moderator-signup-form
                @submit="handleSubmit"
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
import ModeratorSignupForm from '@/components/ModeratorSignupForm'

export default {
  components: {
    NavBar,
    ModeratorSignupForm
  },
  data () {
    return {
    }
  },
  methods: {
    handleSubmit (form) {
      this.$store.dispatch('registerUser', {
        ...form
      }).then((response) => {
        if (response.success) {
          this.$swal({
            icon: 'success',
            title: 'Sucesso!',
            text: 'Seu cadastro foi realizado. Nosso time irá analisá-lo e você receberá um e-mail quando for aprovado(a).'
          }).then((result) => {
            if (result.value) {
              this.$router.push('/moderator')
            }
          })
        }
      }).catch((e) => {
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
