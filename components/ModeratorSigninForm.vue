<template>
  <ValidationObserver
    ref="moderatorSigninForm"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="onSubmit">
      <ValidationProvider
        v-slot="{ errors, valid }"
        rules="required|email"
        name="e-mail"
      >
        <b-field
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
          label="E-mail"
          class="mb-3"
        >
          <b-input
            v-model="form.email"
            type="email"
            placeholder="Insira seu e-mail"
          />
        </b-field>
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors, valid }"
        rules="required"
        name="senha"
      >
        <b-field
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
          label="Senha"
          class="mb-3"
        >
          <b-input
            v-model="form.password"
            type="password"
            placeholder="Insira sua senha"
            password-reveal
          />
        </b-field>
      </ValidationProvider>

      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <nuxt-link
              to="/moderator/signup"
              class=""
            >
              Não possuo login
            </nuxt-link>
          </div>
        </div>

        <!-- Right side -->
        <div class="level-right">
          <div class="level-item">
            <b-button
              :disabled="invalid"
              type="is-success"
              native-type="submit"
            >
              Entrar
            </b-button>
          </div>
        </div>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  data () {
    return {
      form: {}
    }
  },
  methods: {
    onSubmit () {
      this.$refs.moderatorSigninForm.validate().then((success) => {
        if (!success) {
          return
        }

        this.$emit('submit', this.form)
        this.form = {}

        this.$nextTick(() => {
          this.$refs.moderatorSigninForm.reset()
        })
      })
    }
  }
}
</script>

<style>

</style>
