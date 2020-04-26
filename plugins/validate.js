import Vue from 'vue'
import { ValidationProvider, ValidationObserver, Validator } from 'vee-validate'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Validator.extend('password', {
  getMessage: 'A senha precisa ter pelo menos uma letra minúscula, uma letra maiúscula, um número, um caractere especial (!@#$%^&*) e não pode ter espaços.',
  validate: (value) => {
    if (value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)) {
      return true
    }
    return false
  }
})

Validator.extend('register', {
  getMessage: 'O registro precisa ter o formato 000...0/UF.',
  validate: (value) => {
    if (value.match(/([\w]+|[\d]+)\/[A-Z][A-Z]/)) {
      return true
    }
    return false
  }
})
