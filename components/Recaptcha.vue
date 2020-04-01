<template>
  <vue-recaptcha
    ref="recaptcha"
    @verify="onVerify"
    @expired="onExpired"
    :sitekey="key"
  />
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'

export default {
  components: {
    VueRecaptcha
  },
  props: {
    reference: {
      type: String,
      default: 'recaptcha'
    }
  },
  data () {
    return {
      key: process.env.recaptchaSiteKey
    }
  },
  methods: {
    onVerify (response) {
      console.log('Verify: ' + response)
      this.$emit('verify', response)
    },

    onExpired () {
      console.log('Expired')
      this.$emit('expired')
    },

    resetRecaptcha () {
      this.$refs.recaptcha.reset() // Direct call reset method
    }
  }
}
</script>

<style>

</style>
