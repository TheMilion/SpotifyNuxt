
export const state = () => ({
    token: '',
})
  export const mutations = {
    setState(state,string){
           state.token = string 
    }
  }
  export const action = {
      setState(e,string){
        e.commit('setState',string)
      }      
}