<template>
  <div>
    <!--b-modal ref="loginModal" id="loginModal" :visible="!this.tokenValid" @hidden="toggleModal()" ok-only no-close-on-backdrop no-close-on-esc hide-header >Token scaduto, clicca ok per creare un altro token e continuare su EvaMusic</b-modal>
    
    
    <div v-if="!this.closeLoading" class="box">
      <div class="fulfilling-bouncing-circle-spinner">
        <div class="circle"></div>
        <div class="orbit"></div>
      </div>
    </div-->
    
    <nuxt />

  </div>
</template>

<script>
/*
export default {
  computed:{
    tokenValid(){
      return this.$store.getters['login/getTokenValid']
    }
  },
  async created(){
    await this.$axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/todos/1'
    })
    .then(res => console.log('res ', res))
    .catch(e => console.log('Error', e))
  ///*
  let tokenCookie = this.$cookies.get('token')
  let tokenStore = this.$store.getters['login/getToken']
    if(tokenStore == ''){
      if(!!!tokenCookie || tokenCookie == ''){
        console.log('chiamata axios per ricevere il token...')
      } else {
        this.$store.commit('login/setState', tokenCookie)
      }
    } else {
      console.log('chiamata axios per vedere se il token è ancora valido')
      //.then(res => {
          this.$store.commit('login/changeTokenValidation', true)
          this.$router.go('/')
          setTimeout( () => this.closeLoading = true, 1000)
      //})
      //.catch(e => {
      //  if(e == 401){
      //    console.log('chiamata axios per ricevere il token nuovo...)
      //  } else {
      //    alert('Server Error: ', e,'. Redirect on home')
      //    this.$router.go('/')
      //  } 
      //})
    }
    ///
  },
  data(){
    return {
      closeLoading: false
    }
  },
  methods:{
    //Request token

    async toggleModal(){
      //this.$store.commit('login/changeTokenValidation', !this.tokenValid)
      this.$router.push('/login')
      setTimeout( () => this.closeLoading = true, 1000)
    } 
  }
}*/
</script>

<style>
/*
.box{
  margin-top: 225px;
}
.fulfilling-bouncing-circle-spinner, .fulfilling-bouncing-circle-spinner * {
      box-sizing: border-box;
      margin: 0 auto;
    }

    .fulfilling-bouncing-circle-spinner {
      height: 60px;
      width: 60px;
      position: relative;
      animation: fulfilling-bouncing-circle-spinner-animation infinite 4000ms ease;
    }

    .fulfilling-bouncing-circle-spinner .orbit {
      height: 60px;
      width: 60px;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 50%;
      border: calc(60px * 0.03) solid #ff1d5e;
      animation: fulfilling-bouncing-circle-spinner-orbit-animation infinite 4000ms ease;
    }

    .fulfilling-bouncing-circle-spinner .circle {
      height: 60px;
      width: 60px;
      color: #ff1d5e;
      display: block;
      border-radius: 50%;
      position: relative;
      border: calc(60px * 0.1) solid #ff1d5e;
      animation: fulfilling-bouncing-circle-spinner-circle-animation infinite 4000ms ease;
      transform: rotate(0deg) scale(1);
    }

    @keyframes fulfilling-bouncing-circle-spinner-animation {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes fulfilling-bouncing-circle-spinner-orbit-animation {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1);
      }
      62.5% {
        transform: scale(0.8);
      }
      75% {
        transform: scale(1);
      }
      87.5% {
        transform: scale(0.8);
      }
      100% {
        transform: scale(1);
      }
    }

    @keyframes fulfilling-bouncing-circle-spinner-circle-animation {
      0% {
        transform: scale(1);
        border-color: transparent;
        border-top-color: inherit;
      }
      16.7% {
        border-color: transparent;
        border-top-color: initial;
        border-right-color: initial;
      }
      33.4% {
        border-color: transparent;
        border-top-color: inherit;
        border-right-color: inherit;
        border-bottom-color: inherit;
      }
      50% {
        border-color: inherit;
        transform: scale(1);
      }
      62.5% {
        border-color: inherit;
        transform: scale(1.4);
      }
      75% {
        border-color: inherit;
        transform: scale(1);
        opacity: 1;
      }
      87.5% {
        border-color: inherit;
        transform: scale(1.4);
      }
      100% {
        border-color: transparent;
        border-top-color: inherit;
        transform: scale(1);
      }
    }
*/
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
