import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vehicules from './modules/vehiculeService'
import actions from './modules/actionsService'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = "https://localhost:3000"
export default new Vuex.Store({
  modules: {
    vehicules,
    actions,
  }
})
/*
const mock = {
  vehicules: [
    {
      id: 1,
      nomVehicule: "véhicule 1",
      listeEvenements: "",
      img: "https://picsum.photos/600/400/?image=25",
    },
    {
      id: 2,
      nomVehicule: "véhicule 2",
      listeEvenements: "",
      img: "https://picsum.photos/600/400/?image=25",
    },
    {
      id: 3,
      nomVehicule: "véhicule 3",
      listeEvenements: "",
      img: "https://picsum.photos/600/400/?image=25",
    },
    {
      id: 4,
      nomVehicule: "véhicule 4",
      listeEvenements: "",
      img: "https://picsum.photos/600/400/?image=25",
    },
    {
      id: 5,
      nomVehicule: "véhicule 4",
      listeEvenements: "",
      img: "https://picsum.photos/600/400/?image=25",
    },
    {
      id: 6,
      nomVehicule: "véhicule 4",
      listeEvenements: "",
      img: "https://picsum.photos/600/400/?image=25",
    },
  ]
}
export default new Vuex.Store({
  state: {
    vehicules: [],
  },
  mutations: {
    LOADED_VEHICULES(state, vehicules){
    state.vehicules = vehicules
    }
  },
  actions: {
    loadVehicules({commit}) {
      commit("LOADED_VEHICULES", mock.vehicules)
      //Vue.axios.get("test").then(result => {
      //  commit("SAVE_VEHICULES", result.data)
      //}).catch(error => {
      //  throw new Error(`API ${error}`)
      //})
    }
  }
})
*/