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
            Cadastro de moderador(a)
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
    handleSubmit () {
    }
  }
}
</script>
