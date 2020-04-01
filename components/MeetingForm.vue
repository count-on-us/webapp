<template>
  <ValidationObserver
    ref="meetingForm"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="onSubmit">
      <ValidationProvider
        v-slot="{ errors, valid }"
        rules="required|url"
        name="link"
      >
        <b-field
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
          label="Link para a sala"
          class="mb-3"
        >
          <b-input
            v-model="form.link"
            type="text"
            placeholder="Insira o link da reunião"
          />
        </b-field>
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors, valid }"
        rules=""
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
            placeholder="Se sua reunião possui senha, insira-a aqui"
            password-reveal
          />
        </b-field>
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors, valid }"
        rules="required|numeric|min_value:1|max_value:15"
        name="participantes"
      >
        <b-field
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
          label="Quantidade de participantes"
          class="mb-3"
        >
          <b-input
            v-model="form.guests"
            placeholder="Insira o numero de convidados"
            type="number"
            min="1"
            max="15"
          />
        </b-field>
      </ValidationProvider>

      <div class="level">
        <div class="level-left">
          <div class="level-item" />
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
export default {
  data () {
    return {
      form: {}
    }
  },
  methods: {
    onSubmit () {
      this.$refs.meetingForm.validate().then((success) => {
        if (!success) {
          return
        }

        this.$emit('submit', this.form)
        this.form = {}

        this.$nextTick(() => {
          this.$refs.meetingForm.reset()
        })
      })
    }
  }
}
</script>

<style>

</style>
