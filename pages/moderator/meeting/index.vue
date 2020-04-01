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
            Criar reunião
          </h1>
          <div class="columns is-centered">
            <div class="column is-half">
              <section>
                <meeting-form
                  @submit="handleSubmit"
                />
              </section>
              <section>
                <div class="has-text-centered mb-5">
                  <h1>Reunião iniciada</h1>
                  <div class="is-size-1">
                    {{ difference }}
                  </div>
                </div>
                <ValidationObserver
                  ref="meetingForm"
                  v-slot="{ invalid }"
                >
                  <form @submit.prevent="onSubmit">
                    <ValidationProvider
                      v-slot="{ errors, valid }"
                      rules="required|numeric|min_value:1|max_value:15"
                      name="participantes"
                    >
                      <b-field
                        label="Convidar mais participantes"
                      >
                        <div class="field-body">
                          <b-field
                            :type="{ 'is-danger': errors[0], 'is-success': valid }"
                            :message="errors"
                          >
                            <b-input
                              v-model="form.guests"
                              placeholder="Insira o numero de convidados"
                              type="number"
                              min="1"
                              max="15"
                              expanded
                            />
                            <p class="control mb-0">
                              <b-button
                                :disabled="invalid"
                                type="is-success"
                                native-type="submit"
                                class="border-right m-0"
                              >
                                Enviar
                              </b-button>
                            </p>
                          </b-field>
                        </div>
                      </b-field>
                    </ValidationProvider>
                  </form>
                </ValidationObserver>

                <div class="buttons mt-5">
                  <b-button
                    type="is-danger"
                    outlined
                    expanded
                  >
                    Encerrar reunião
                  </b-button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from '@/components/NavBar'
import MeetingForm from '@/components/MeetingForm'

export default {
  components: {
    NavBar,
    MeetingForm
  },
  data () {
    return {
      form: {},
      start: null,
      interval: null,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      intervals: {
        second: 1000,
        minute: 1000 * 60,
        hour: 1000 * 60 * 60,
        day: 1000 * 60 * 60 * 24
      }
    }
  },

  computed: {
    difference () {
      return `${this.days}d : ${this.hours}h : ${this.minutes}m : ${this.seconds}s`
    }
  },
  mounted () {
    this.start = new Date()
    this.interval = setInterval(() => {
      this.updateDiffs()
    }, 1000)
  },

  destroyed () {
    clearInterval(this.interval)
  },

  methods: {
    handleSubmit (form) {
    },

    updateDiffs () {
      let diff = Math.abs(Date.now() - this.start.getTime())

      this.days = Math.floor(diff / this.intervals.day)
      diff -= this.days * this.intervals.day

      this.hours = Math.floor(diff / this.intervals.hour)
      diff -= this.hours * this.intervals.hour

      this.minutes = Math.floor(diff / this.intervals.minute)
      diff -= this.minutes * this.intervals.minute

      this.seconds = Math.floor(diff / this.intervals.second)
    },

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
