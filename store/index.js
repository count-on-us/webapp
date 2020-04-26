import Vuex from 'vuex'
import Cookie from 'js-cookie'
import ms from 'ms'

const createStore = () => {
  return new Vuex.Store({
    state: {
      token: null
    },
    mutations: {
      setToken (state, token) {
        state.token = token
      },

      clearToken (state) {
        state.token = null
      }
    },
    actions: {
      authenticateUser (vuexContext, authData) {
        const authUrl = '/auth/login'

        return this.$axios.$post(
          authUrl,
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }
        ).then((result) => {
          const expiration = new Date().getTime() +
            typeof result.expiresIn === 'number'
            ? result.expiresIn
            : ms(result.expiresIn)

          vuexContext.commit('setToken', result.accessToken)
          localStorage.setItem('token', result.accessToken)
          localStorage.setItem('tokenExpiration', expiration)
          Cookie.set('jwt', result.accessToken)
          Cookie.set('expirationDate', expiration)
        }).catch(e => console.log(e))
      },

      registerUser (vuexContext, authData) {
        const authUrl = '/auth/register'

        return this.$axios.$post(
          authUrl,
          {
            ...authData,
            returnSecureToken: true
          }
        )
      },

      initAuth (vuexContext, req) {
        let token
        let expirationDate

        if (req) {
          if (!req.headers.cookie) {
            return
          }

          const jwtCookie = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('jwt='))

          if (!jwtCookie) {
            return
          }

          token = jwtCookie.split('=')[1]
          expirationDate = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('expirationDate='))
            .split('=')[1]
        } else if (process.client) {
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('tokenExpiration')
        }

        if (new Date().getTime() > expirationDate || !token) {
          vuexContext.dispatch('logout')
          return
        }
        vuexContext.commit('setToken', token)
      },

      logout (vuexContext) {
        vuexContext.commit('clearToken')
        Cookie.remove('jwt')
        Cookie.remove('expirationDate')
        if (process.client) {
          localStorage.removeItem('token')
          localStorage.removeItem('tokenExpiration')
        }
      }
    },
    getters: {
      isAuthenticated (state) {
        return state.token !== null
      }
    }
  })
}

export default createStore
