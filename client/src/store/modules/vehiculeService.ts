import Vue from 'vue';
import Vehicule from "../../types/vehicule"

const state = () => ({
  all: []
});
const mutations = {
  LOAD_VEHICULES(state: { all: Vehicule[]; }, vehicules: Vehicule[]) {
    state.all = vehicules;
  },
  ADD_VEHICULE(state: { all: Vehicule[]; }, vehicule: Vehicule) {
    state.all.push(vehicule);
  },
  ADD_IMAGE(state: {all: Vehicule[]}, payload: {id:string, url:string}){
    const vehicule = state.all.find(x => x._id=== payload.id)
    if(vehicule){
      vehicule.img = payload.url
    }
  }
};
const actions = {
  loadVehicules({ commit }: any) {
    //commit("LOAD_VEHICULES", mock.vehicules);
    Vue.axios.get("vehicules").then(result => {
      commit("LOAD_VEHICULES", result.data)
    }).catch(error => {
      throw new Error(`API ${error}`)
    })
  },
  addVehicule({ commit, dispatch }: any, vehicule: Vehicule) {
    //We first want to upload the image so we can add the url of it in the payload
    console.log(vehicule)
    dispatch("uploadImageVehicule", vehicule.img).then((uploadImgResult: { data: { imgUrl: any; }; }) => {
      vehicule.img = uploadImgResult.data.imgUrl 
      Vue.axios.post("vehicules", vehicule).then(result => {
        commit("ADD_VEHICULE", result.data)
      })
    })
    //commit("ADD_VEHICULE", {
    //  id: state().all.length,
    //  ...vehicule
    //});
  },
  uploadImageVehicule({ commit }: any, file: string|Blob) {
    let formData = new FormData()
    formData.append("file", file)
    commit("IMG_UPLOADED")
    return Vue.axios.post("upload/vehicule", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
};
const getters = {
  getVehiculeById: (state: { all: Vehicule[]; }) => (id: string) => {
    return state.all.find(vehicule => vehicule._id === id)
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

