import Vue from 'vue';

const state = () => ({
  all: [],
  responsables: ["xavier", "pierre", "paul", "jack"]
});
const mutations = {
  LOAD_ACTIONS(state, actions) {
    state.all = actions;
  }
};
const actions = {
  loadActions({ commit }) {
    //commit("LOAD_ACTIONS", mock);
    Vue.axios.get("actions").then(result => {
      commit("LOAD_ACTIONS", result.data)
    }).catch(error => {
      throw new Error(`API ${error}`)
    })
  },
  addAction({ commit }, action) {
    console.log(state);
    commit("ADD_ACTION", {
      id: state().all.length,
      ...action
    });
  }
};
const getters = {};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

import { IAction, IParametresActions, IActionPreventive } from "../../types/actions"
const mock: IActionPreventive[] = [{
  nomAction: "Nom action 0",
  actions: [
    {
      nomAction: "Nom action 0",
      dateProgramme: new Date("2020-04-15").toISOString().substr(0, 10),
      responsable: "xavier",
      lieuRealisation: "Brest",
      dateRealisation: new Date("2020-04-21").toISOString().substr(0, 10),
      commentaire: "4.0"
    },
    {
      nomAction: "Nom action 0",
      dateProgramme: new Date("2020-05-15").toISOString().substr(0, 10),
      responsable: "xavier",
      lieuRealisation: "Brest",
      dateRealisation: new Date("2020-05-15").toISOString().substr(0, 10),
      commentaire: "4.3"
    },
    {
      nomAction: "Nom action 0",
      dateProgramme: new Date("2020-06-15").toISOString().substr(0, 10),
      responsable: "xavier",
      lieuRealisation: "Brest",
      dateRealisation: new Date("2020-06-15").toISOString().substr(0, 10),
      commentaire: "6.0"
    },
    {
      nomAction: "Nom action 0",
      dateProgramme: new Date("2020-07-15").toISOString().substr(0, 10),
      responsable: "pierre",
      lieuRealisation: "Brest",
      dateRealisation: new Date("2020-07-20").toISOString().substr(0, 10),
      commentaire: "4.3"
    },
    {
      nomAction: "Nom action 0",
      dateProgramme: new Date("2020-08-15").toISOString().substr(0, 10),
      responsable: "pierre",
      lieuRealisation: "Brest",
      dateRealisation: new Date("2020-08-16").toISOString().substr(0, 10),
      commentaire: "3.9"
    },
    {
      nomAction: "Nom action 0",
      dateProgramme: new Date("2020-09-15").toISOString().substr(0, 10),
      responsable: "paul",
      lieuRealisation: "Brest",
      dateRealisation: new Date("2020-09-15").toISOString().substr(0, 10),
      commentaire: "0.0"
    },
    {
      nomAction: "Nom action 0",
      dateProgramme: new Date("2020-10-15").toISOString().substr(0, 10),
      responsable: "paul",
      lieuRealisation: "Brest",
      dateRealisation: null,
      commentaire: "0"
    },
    {
      nomAction: "Nom action 0",
      dateProgramme: new Date("2020-11-15").toISOString().substr(0, 10),
      responsable: "paul",
      lieuRealisation: "Brest",
      dateRealisation: null,
      commentaire: 6.5
    },
    {
      nomAction: "Nom action 0",
      dateProgramme: new Date("2020-12-15").toISOString().substr(0, 10),
      responsable: "jack",
      lieuRealisation: "Brest",
      dateRealisation: null,
      commentaire: 4.9
    },
    {
      nomAction: "Nom action 0",
      dateProgramme: new Date("2021-01-15").toISOString().substr(0, 10),
      responsable: "jack",
      lieuRealisation: "Brest",
      dateRealisation: null,
      commentaire: 7
    },
    {
      nomAction: "Nom action 0",
      dateProgramme: new Date("2021-01-15").toISOString().substr(0, 10),
      responsable: "jack",
      lieuRealisation: "Brest",
      dateRealisation: null,
      commentaire: 7
    },
    {
      nomAction: "Nom action 0",
      dateProgramme: new Date("2021-01-15").toISOString().substr(0, 10),
      responsable: "jack",
      lieuRealisation: "Brest",
      dateRealisation: null,
      commentaire: 7
    },
    {
      nomAction: "Nom action 0",
      dateProgramme: new Date("2021-01-15").toISOString().substr(0, 10),
      responsable: "jack",
      lieuRealisation: "Brest",
      dateRealisation: null,
      commentaire: 7
    },
    {
      nomAction: "Nom action 0",
      dateProgramme: new Date("2021-01-15").toISOString().substr(0, 10),
      responsable: "jack",
      lieuRealisation: "Brest",
      dateRealisation: null,
      commentaire: 7
    }
  ],
  parametres: {
    destinataire: "xavier@aeroport.fr",
    notificationMailNbJourAvant: 14,
    notificationMethode: "mail",
    recurenceApartirDe: new Date("2020-04-15").toISOString().substr(0,10),
    recurenceJour: 2,
    recurenceMois: "mois"
  }
},
{
  nomAction: "Nom action 1",
  actions: [
    {
      nomAction: "Nom action 1",
      dateProgramme: new Date("2020-04-15").toISOString().substr(0, 10),
      responsable: "xavier",
      lieuRealisation: "Brest",
      dateRealisation: new Date("2020-04-21").toISOString().substr(0, 10),
      commentaire: "4.0"
    },
    {
      nomAction: "Nom action 1",
      dateProgramme: new Date("2020-05-15").toISOString().substr(0, 10),
      responsable: "xavier",
      lieuRealisation: "Brest",
      dateRealisation: new Date("2020-05-15").toISOString().substr(0, 10),
      commentaire: "4.3"
    },
    {
      nomAction: "Nom action 1",
      dateProgramme: new Date("2020-06-15").toISOString().substr(0, 10),
      responsable: "xavier",
      lieuRealisation: "Brest",
      dateRealisation: new Date("2020-06-15").toISOString().substr(0, 10),
      commentaire: "6.0"
    },
    {
      nomAction: "Nom action 1",
      dateProgramme: new Date("2020-07-15").toISOString().substr(0, 10),
      responsable: "pierre",
      lieuRealisation: "Brest",
      dateRealisation: new Date("2020-07-20").toISOString().substr(0, 10),
      commentaire: "4.3"
    },
    {
      nomAction: "Nom action 1",
      dateProgramme: new Date("2020-08-15").toISOString().substr(0, 10),
      responsable: "pierre",
      lieuRealisation: "Brest",
      dateRealisation: new Date("2020-08-16").toISOString().substr(0, 10),
      commentaire: "3.9"
    },
    {
      nomAction: "Nom action 1",
      dateProgramme: new Date("2020-09-15").toISOString().substr(0, 10),
      responsable: "paul",
      lieuRealisation: "Brest",
      dateRealisation: new Date("2020-09-15").toISOString().substr(0, 10),
      commentaire: "0.0"
    },
    {
      nomAction: "Nom action 1",
      dateProgramme: new Date("2020-10-15").toISOString().substr(0, 10),
      responsable: "paul",
      lieuRealisation: "Brest",
      dateRealisation: null,
      commentaire: "0"
    },
    {
      nomAction: "Nom action 1",
      dateProgramme: new Date("2020-11-15").toISOString().substr(0, 10),
      responsable: "paul",
      lieuRealisation: "Brest",
      dateRealisation: null,
      commentaire: 6.5
    },
    {
      nomAction: "Nom action 1",
      dateProgramme: new Date("2020-12-15").toISOString().substr(0, 10),
      responsable: "jack",
      lieuRealisation: "Brest",
      dateRealisation: null,
      commentaire: 4.9
    },
    {
      nomAction: "Nom action 1",
      dateProgramme: new Date("2021-01-15").toISOString().substr(0, 10),
      responsable: "jack",
      lieuRealisation: "Brest",
      dateRealisation: null,
      commentaire: 7
    },
    {
      nomAction: "Nom action 1",
      dateProgramme: new Date("2021-01-15").toISOString().substr(0, 10),
      responsable: "jack",
      lieuRealisation: "Brest",
      dateRealisation: null,
      commentaire: 7
    },
    {
      nomAction: "Nom action 1",
      dateProgramme: new Date("2021-01-15").toISOString().substr(0, 10),
      responsable: "jack",
      lieuRealisation: "Brest",
      dateRealisation: null,
      commentaire: 7
    },
    {
      nomAction: "Nom action 1",
      dateProgramme: new Date("2021-01-15").toISOString().substr(0, 10),
      responsable: "jack",
      lieuRealisation: "Brest",
      dateRealisation: null,
      commentaire: 7
    },
    {
      nomAction: "Nom action 1",
      dateProgramme: new Date("2021-01-15").toISOString().substr(0, 10),
      responsable: "jack",
      lieuRealisation: "Brest",
      dateRealisation: null,
      commentaire: 7
    }
  ],
  parametres: {
    destinataire: "xavier@aeroport.fr",
    notificationMailNbJourAvant: 15,
    notificationMethode: "mail",
    recurenceApartirDe: new Date("2020-04-15").toISOString().substr(0, 10),
    recurenceJour: 1,
    recurenceMois: "mois"
  }
}

];

