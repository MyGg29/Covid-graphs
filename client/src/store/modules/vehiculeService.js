const state = () => ({
  all: [],
})
const mutations = {
  LOAD_VEHICULES(state, vehicules) {
    state.all = vehicules
  },
  ADD_VEHICULE(state, vehicule) {
    state.all.push(vehicule)
  }
}
const actions = {
  loadVehicules({ commit }) {
    commit("LOAD_VEHICULES", mock.vehicules)
    //Vue.axios.get("test").then(result => {
    //  commit("SAVE_VEHICULES", result.data)
    //}).catch(error => {
    //  throw new Error(`API ${error}`)
    //})
  },
  addVehicule({ commit }, vehicule) {
    console.log(state)
    commit("ADD_VEHICULE", {
      id: state().all.length,
      ...vehicule
    })
  }
}
const getters = {
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

const mock = {
  vehicules: [
    {
      id: 1,
      nomVehicule: "véhicule 1",
      infosVehicule: [{ label: "Marque", valeur: "Mercedes" },
      { label: "Année de mise en circulation", valeur: "2019" },
      { label: "Préssion pneus", valeur: "3 bars" },
      { label: "Infomation", valeur: "valeur" },],
      img: "https://picsum.photos/600/400/?image=25",
    },
    {
      id: 2,
      nomVehicule: "véhicule 2",
      infosVehicule: [{ label: "Marque", valeur: "Mercedes" },
      { label: "Année de mise en circulation", valeur: "2019" },
      { label: "Préssion pneus", valeur: "3 bars" },
      { label: "Infomation", valeur: "valeur" },],
      img: "https://picsum.photos/600/400/?image=25",
    },
    {
      id: 3,
      nomVehicule: "véhicule 3",
      infosVehicule: [{ label: "Marque", valeur: "Mercedes" },
      { label: "Année de mise en circulation", valeur: "2019" },
      { label: "Préssion pneus", valeur: "3 bars" },
      { label: "Infomation", valeur: "valeur" },],
      img: "https://picsum.photos/600/400/?image=25",
    },
    {
      id: 4,
      nomVehicule: "véhicule 4",
      infosVehicule: [{ label: "Marque", valeur: "Mercedes" },
      { label: "Année de mise en circulation", valeur: "2019" },
      { label: "Préssion pneus", valeur: "3 bars" },
      { label: "Infomation", valeur: "valeur" },],
      img: "https://picsum.photos/600/400/?image=25",
    },
    {
      id: 5,
      nomVehicule: "véhicule 4",
      infosVehicule: [{ label: "Marque", valeur: "Mercedes" },
      { label: "Année de mise en circulation", valeur: "2019" },
      { label: "Préssion pneus", valeur: "3 bars" },
      { label: "Infomation", valeur: "valeur" },],
      img: "https://picsum.photos/600/400/?image=25",
    },
    {
      id: 6,
      nomVehicule: "véhicule 4",
      infosVehicule: [{ label: "Marque", valeur: "Mercedes" },
      { label: "Année de mise en circulation", valeur: "2019" },
      { label: "Préssion pneus", valeur: "3 bars" },
      { label: "Infomation", valeur: "valeur" },],
      img: "https://picsum.photos/600/400/?image=25",
    },
  ],
}