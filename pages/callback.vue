<template>
<b-container fluid>
<label>Display Name: </label><p>{{objResponse.display_name}}</p>
 <label>Id: </label> <p>{{objResponse.id}}</p>
 <label>Email: </label><p>{{objResponse.email}}</p>
 <label>Country: </label><p>{{objResponse.country}}</p>
   </b-container>
</template>

<script>



export default {
  components: {
  },
  data(){
    return{
      params: '',
      objResponse: {}
      }
  },
  computed: {
  },
  methods: {
      getInfo(){
          this.$axios({
          method:'get',
          url:'https://api.spotify.com/v1/me',
          headers: {
                'Authorization': 'Bearer ' + this.$store.state.login.token
                }}).then(response =>{this.objResponse = response.data})
            },

        getHashParams() {
          var hashParams = {};
          var e, r = /([^&;=]+)=?([^&;]*)/g,
              q = window.location.hash.substring(1);
          while ( e = r.exec(q)) {
             hashParams[e[1]] = decodeURIComponent(e[2]);
          }
          return hashParams;
        }
},
mounted(){
    this.params = this.getHashParams()
    this.access_token = this.params.access_token
    this.$store.commit('login/setState', this.params.access_token);
    console.log('token:', this.$store.state.login.token)
    this.getInfo()
    //this.$store.dispatch('login/setState',this.params.access_token)
    //console.log(this.$store.state.login.token)
    
}
}
</script>

<style> 
#login, #loggedin {
     display: show;
      }
      .text-overflow {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 500px;
      }
</style>
