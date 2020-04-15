import Vuex from 'vuex'
import Cookie from 'js-cookie'

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
        let authUrl = ``

        if (!authData.isLogin) {
          authUrl = ``
        }
        return this.$axios.$post(
          authUrl,
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }
        ).then((result) => {
          vuexContext.commit('setToken', result.idToken)
          localStorage.setItem('token', result.idToken)
          localStorage.setItem('tokenExpiration', new Date().getTime() + +result.expiresIn * 1000)
          Cookie.set('jwt', result.idToken)
          Cookie.set('expirationDate', new Date().getTime() + +result.expiresIn * 1000)

          return this.$axios.$post('http://localhost:3000/api/track-data', { data: 'Authenticated' })
        }).catch(e => console.log(e))
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

        if (new Date().getTime() > +expirationDate || !token) {
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
