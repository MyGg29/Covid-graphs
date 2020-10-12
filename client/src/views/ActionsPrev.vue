<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs" large>
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          <h1>{{ item.text }}</h1>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <v-row>
      <v-col cols="2">
        <ListAction @update:selected="selectedAction = $event" :items="listActionsDispo" />
      </v-col>
      <v-col v-if="actionsSelected" cols="10">
        <v-card>
          <v-row>
            <v-col cols="5">
              <v-card>
                <v-card-title>
                  <h1>{{ actionsSelected.nomAction }}</h1>
                </v-card-title>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-card class="mx-4" elevation="1">
                    <v-card-title primary-title>
                      <h3 class="headline mb-0">
                        Récurence
                      </h3>
                    </v-card-title>
                    <v-card-text class="d-flex flex-column">
                      <div class="d-flex flex-row mb-4">
                        <v-text-field
                          v-model="actionsSelected.parametres.recurenceJour"
                          :rule="recurrence.chiffreRule"
                          prefix="Répéter tout les :"
                          type="number"
                          placeholder="x"
                          required
                          class="centered-input"
                          @change="recurenceUpdated"
                        />
                        <v-select
                          v-model="actionsSelected.parametres.recurenceMois"
                          :items="recurrence.items"
                          label="Période"
                          required
                          @change="recurenceUpdated"
                        />
                      </div>
                      <DatePicker
                        v-model="actionsSelected.parametres.recurenceApartirDe"
                        label="A partir de"
                      />
                    </v-card-text>
                  </v-card>
                  <v-card class="mx-4 my-2" elevation="1">
                    <v-card-title primary-title>
                      <h3 class="headline mb-0">
                        Notifications
                      </h3>
                    </v-card-title>
                    <v-card-text>
                      <div class="d-flex flex-row mb-6">
                        <v-text-field
                          v-model="actionsSelected.parametres.notificationMailNbJourAvant"
                          :rule="delaiRules"
                          type="number"
                          placeholder="x"
                          required
                          suffix="jours avant par"
                          class="px-2 centered-input"
                        />
                        <v-select
                          v-model="actionsSelected.parametres.notificationMethode"
                          :items="notifications.methodes"
                          label="Méthode"
                          required
                        />
                      </div>
                      <v-select
                        v-model="actionsSelected.parametres.destinataire"
                        :items="notifications.destinataires"
                        label="Destinataire"
                        multiple
                        required
                      />
                      <v-textarea
                        disabled
                        label="Contenu du message"
                        value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum eveniet officia minus facere sed animi iste. Repellendus quisquam molestias, labore ullam earum amet consequuntur, optio tempora accusantium incidunt quo!"
                      />
                    </v-card-text>
                  </v-card>
                </v-form>
              </v-card>
            </v-col>
            <v-col cols="7">
              <v-card>
                <v-card-title>
                  <h1>Evènements prévues</h1>
                </v-card-title>
                <v-card-text>
                  <Table 
                    show-edit-buttons
                    focus-incoming-actions
                    :headers="headers"
                    :content="actionsSelected.actions"
                    :responsables="responsables"
                    :items-per-page="5"
                  />
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapState } from "vuex"
import ListAction from "@/components/ListAction";
import Table from "@/components/Table";
import DatePicker from "@/components/utils/DatePicker";
export default {
  name:"Actionprev",
  components: {
    ListAction,
    Table,
    DatePicker
  },
  created(){
    this.$store.dispatch("actions/loadActions");
  },
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      breadcrumbs: [
        {
          text: "Mes véhicules",
          href: "/vehicule"
        },
        {
          text: "Véhicule " + this.id,
          href: "/vehicule/" + this.id
        },
        {
          text: "Action préventive"
        }
      ],
      listActionsDispo: [
        { text: "Nom action 0" },
        { text: "Nom action 1" },
        { text: "Nom action 2" },
        { text: "Nom action 3" },
        { text: "Nom action 4" },
        { text: "Nom action 5" },
        { text: "Nom action 6" },
        { text: "Nom action 7" },
        { text: "Nom action 8" },
        { text: "Nom action 9" },
        { text: "Ajouter une action", editable: true }
      ],
      selectedAction: {
        id: 0,
        text: "Nom action 0",
      },
      headers: [
        { text: "Action", value: "nomAction" },
        { text: "Date programmé", value: "dateProgramme" },
        { text: "Date réalisation", value: "dateRealisation" },
        { text: "Lieu réalisation", value: "lieuRealisation" },
        { text: "Résponsable", value: "responsable" },
        { text: "Commentaire", value: "commentaire" }
      ],
      valid: true,
      recurrence: {
        chiffreRules: v => (v || "") >= 0 || `Valeur doit être plus grand quand 0`,
        items: ["jour", "mois", "année"],
      },
      delaiNotification: 15,
      delaiRules: [v => !!v || "Delai obligatoire"],
      notifications: {
        methodeSelected: "mail",
        methodes: ["sms", "mail"],
        destinataires: [
          "xavier@aeroport.fr",
          "pierre@aeroport.fr",
          "paul@aeroport.fr",
          "jacque@aeroport.fr"
        ],
        selectedDestinataires: ["xavier@aeroport.fr"]
      },
      responsables: ["xavier", "pierre", "paul", "jack"]
    };
  },
  watch: {
    "actionsSelected.parametres.recurenceJour": function(val, oldVal){
      if(oldVal === undefined)
        return
      this.recurenceUpdated()
    },
    "actionsSelected.parametres.recurenceApartirDe": function(val, oldVal){
      if(oldVal === undefined)
        return
      this.recurenceUpdated()
    }
  },
  computed: {
    ...mapState({
      allActions: state => state.actions.all,
    }),
    actionsSelected: function(){
      return this.allActions.find(x => x.nomAction === this.selectedAction.text)
    },
    console: () => console,
  },
  methods: {
    recurenceUpdated: function(){
      console.log(this.selectedAction)
      this.allActions.find(x => x.nomAction === this.selectedAction.text).actions = this.allActions
        .find(x => x.nomAction === this.selectedAction.text)
        .actions.filter(x => x.dateProgramme < new Date().toISOString().substr(0,10))

      const jusqua = new Date("2021-12-12")
      let newDates = this.findNewDates(jusqua, Number(this.actionsSelected.parametres.recurenceJour))
      newDates.forEach(date => {
        this.actionsSelected.actions.push({
          dateProgramme: date.toISOString().substr(0,10),
          dateRealisation: null,
          lieuRealisation: null,
          nomAction: "ne devrais pas etre utile ",
          responsable: "",
          commentaire: "",
        })
      })
      //this.actionsSelected.actions.push(this.findNewDates(new Date("2021-12-12"), this.actionsSelected.parametres.recurenceJour))
    },
    findNewDates: function(upTo, interval){
      if(interval < 1) return []
      let listDate = []
      const aPartirDeDate = new Date(this.actionsSelected.parametres.recurenceApartirDe)
      //const now = this.actionsSelected.actions.sort(x => x.dateProgramme)[this.actionsSelected.actions.length - 1]
      const now = new Date()
      let date = new Date(aPartirDeDate.getTime())
      while(date < upTo) {
        if(date > now) {
          listDate.push(new Date(date.getTime()))
        }
        date = new Date(date.setMonth(date.getMonth() + interval))
      }
      return listDate
    }
  }
};
</script>
<style scoped>
.centered-input >>> input {
  text-align: center;
}
</style>
