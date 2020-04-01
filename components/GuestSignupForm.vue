<template>
  <ValidationObserver
    ref="guestSignupForm"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="onSubmit">
      <ValidationProvider
        v-slot="{ errors, valid }"
        rules="required"
        name="nome"
      >
        <b-field
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
          label="Nome"
          class="mb-3"
        >
          <b-input
            v-model="form.name"
            placeholder="Insira seu nome"
          />
        </b-field>
      </ValidationProvider>

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

      <recaptcha
        @verify="handleRecaptchaVerify"
        class="mb-3"
      />

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
              :disabled="invalid"
              type="is-success"
              native-type="submit"
            >
              Enviar
            </b-button>
          </div>
        </div>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import Recaptcha from '@/components/Recaptcha'

export default {
  components: {
    Recaptcha
  },
  data () {
    return {
      form: {
        recaptcha: false
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.guestSignupForm.validate().then((success) => {
        if (!success) {
          return
        }

        if (!this.form.recaptcha) {
          this.$buefy.toast.open({
            duration: 3000,
            message: 'Por favor, clique em não sou um robô.',
            position: 'is-top-right',
            type: 'is-warning'
          })
          return
        }

        this.$emit('submit', this.form)
        this.form = {}

        this.$nextTick(() => {
          this.$refs.guestSignupForm.reset()
        })
      })
    },

    handleRecaptchaVerify (value) {
      this.form.recaptcha = value
    }
  }
}
</script>

<style>

</style>
