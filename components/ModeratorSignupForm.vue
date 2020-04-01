<template>
  <ValidationObserver
    ref="moderatorSignupForm"
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

      <ValidationProvider
        v-slot="{ errors, valid }"
        rules="required"
        name="profissão"
      >
        <b-field
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
          label="Profissão"
          class="mb-3"
        >
          <b-select
            v-model="form.job"
            placeholder="Selecione uma profissão"
          >
            <option
              v-for="option in jobOptions"
              :value="option.value"
              :key="option.value"
            >
              {{ option.text }}
            </option>
          </b-select>
        </b-field>
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors, valid }"
        rules="required"
        name="registro"
      >
        <b-field
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
          label="Registro no conselho"
          class="mb-3"
        >
          <b-input
            v-model="form.register"
            placeholder="Insira seu registro"
          />
        </b-field>
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors, valid }"
        :rules="{ required: true, regex: /\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}/ }"
        name="telefone"
      >
        <b-field
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
          label="Telefone"
          class="mb-3"
        >
          <b-input
            v-model="form.phone"
            placeholder="Insira seu telefone"
            type="tel"
          />
        </b-field>
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors, valid }"
        rules="required"
        name="senha"
        vid="senha"
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

      <ValidationProvider
        v-slot="{ errors, valid }"
        rules="required|confirmed:senha"
        name="confirmação de senha"
      >
        <b-field
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
          label="Confirme a senha"
          class="mb-3"
        >
          <b-input
            v-model="form.passwordConfirm"
            type="password"
            placeholder="Insira a confirmação de senha"
            password-reveal
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
            <nuxt-link
              to="/moderator/signin"
              class=""
            >
              Ir para login
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
      },
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
    onSubmit () {
      this.$refs.moderatorSignupForm.validate().then((success) => {
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
          this.$refs.moderatorSignupForm.reset()
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
