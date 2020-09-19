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
        v-if="typeof selectedAction === 'number'"
        cols="10">
        <v-card>
          <v-row>
            <v-col cols="5">
              <v-card>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-card>
                  </v-card>
                  <v-card class="ma-2" elevation=1 >
                    <v-card-title primary-title>
                      <h3 class="headline mb-0">Récurence</h3>
                    </v-card-title>
                    <v-card-text
                      class="d-flex flex-row mb-6"
                    >
                        <v-text-field
                          v-model="recurrence.chiffre"
                          :rule="recurrence.chiffreRule"
                          prefix="Répéter tout les"
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
                    </v-card-text>
                  </v-card>
                  <v-card class="ma-2" elevation=1 >
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
                          class="px-2"
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
                  <h1>Actions prévues</h1>
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
export default {
  props: ["id"],
  components: {
    ListAction,
    Table,
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
      selectedAction: 0,
      valid: true,
      recurrence: {
        chiffre: null,
        chiffreRules: (v) => !!v || "Fréquence obligatoire",
        periode: "jour",
        items: ["jour","mois", "année"]
      },
      delaiNotification: "",
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