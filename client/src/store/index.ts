import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import vehicules from "./modules/vehiculeService";
import actions from "./modules/actionsService";

Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = "https://localhost:3000";
export default new Vuex.Store({
  modules: {
    vehicules,
    actions
  }
});
