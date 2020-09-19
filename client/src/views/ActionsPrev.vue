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
        <ListAction v-on:update:selected="selectedAction = $event" />
      </v-col>
      <v-col 
        v-if="typeof selectedAction.id === 'number'"
        cols="10">
        <v-card>
          <v-row>
            <v-col cols="5">
              <v-card>
                <v-card-title>
                  <h1>{{selectedAction.text}}</h1>
                </v-card-title>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-card class="mx-4" elevation=1 >
                    <v-card-title primary-title>
                      <h3 class="headline mb-0">Récurence</h3>
                    </v-card-title>
                    <v-card-text
                      class="d-flex flex-column"
                    >
                      <div class="d-flex flex-row mb-4">
                        <v-text-field
                          v-model="recurrence.chiffre"
                          :rule="recurrence.chiffreRule"
                          prefix="Répéter tout les :"
                          type="number"
                          placeholder="x"
                          required
                          class="centered-input"
                        ></v-text-field>
                        <v-select
                          v-model="recurrence.periode"
                          :items="recurrence.items"
                          label="Période"
                          required
                        ></v-select>
                      </div>
                      <v-select
                        v-model="recurrence.aPartirDe"
                        :items="recurrence.aPartirDeItems"
                        label="Période"
                        required
                      ></v-select>
                      <div class="d-none">
                        <DatePicker
                          v-model="recurrence.aPartirDeDate"
                          label="Démarrer le"
                        ></DatePicker>
                      </div>
                    </v-card-text>
                  </v-card>
                  <v-card class="mx-4 my-2" elevation=1 >
                    <v-card-title primary-title>
                      <h3 class="headline mb-0">Notifications</h3>
                    </v-card-title>
                    <v-card-text>
                      <div
                        class="d-flex flex-row mb-6"
                      >
                        <v-text-field
                          v-model="delaiNotification"
                          :rule="delaiRules"
                          type="number"
                          placeholder="x"
                          required
                          suffix="jours avant par"
                          class="px-2 centered-input"
                        ></v-text-field>
                        <v-select
                          v-model="notifications.methodeSelected"
                          :items="notifications.methodes"
                          label="Méthode"
                          required
                        ></v-select>
                      </div>
                      <v-select
                        v-model="notifications.selectedDestinataires"
                        :items="notifications.destinataires"
                        label="Destinataire"
                        multiple
                        required
                      >
                      </v-select>
                      <v-textarea
                        disabled
                        label="Contenu du message"
                        value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum eveniet officia minus facere sed animi iste. Repellendus quisquam molestias, labore ullam earum amet consequuntur, optio tempora accusantium incidunt quo!"
                      >
                      </v-textarea>
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
                  <Table :itemsPerPage="10" :responsables="responsables"/>
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
import ListAction from "@/components/ListAction";
import Table from "@/components/Table"
import DatePicker from "@/components/utils/DatePicker"
export default {
  props: ["id"],
  components: {
    ListAction,
    Table,
    DatePicker
  },
  data: function () {
    return {
      breadcrumbs: [
        {
          text: "Mes vehicules",
          href: "/vehicule",
        },
        {
          text: "Vehicule " + this.id,
          href: "/vehicule/" + this.id,
        },
        {
          text: "Action préventive",
        },
      ],
      selectedAction: {
        id: 0,
        text: ""
      },
      valid: true,
      recurrence: {
        chiffre: 1,
        chiffreRules: (v) => !!v || "Fréquence obligatoire",
        periode: "mois",
        items: ["jour","mois", "année"],
        aPartirDe: "Tout les 15 du mois",
        aPartirDeDate: "2020-04-15",
        aPartirDeItems: ["Tout les 15 du mois", "Tout les mois le troisième mardi"]
      },
      delaiNotification: 15,
      delaiRules: [
        (v) => !!v || "Delai obligatoire",
      ],
      notifications: {
        methodeSelected: "mail",
        methodes: ["sms", "mail"],
        destinataires: ["xavier@aeroport.fr", "pierre@aeroport.fr", "paul@aeroport.fr", "jacque@aeroport.fr"],
        selectedDestinataires: ["xavier@aeroport.fr"],
      },
      responsables: ["xavier", "pierre", "paul", "jack"],
    };
  },
};
</script>
<style scoped>
  .centered-input >>> input {
    text-align: center
  }
</style>