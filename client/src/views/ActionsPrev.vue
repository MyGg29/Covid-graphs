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
      <v-col cols="10">
        <v-card>
          <v-row>
            <v-col cols="5">
              <v-card>
                {{selectedAction}}
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-card
                  <v-text-field
                    v-model="recurrence.chiffre"
                    :rule="recurrence.chiffreRule"
                    type="number"
                    label="chiffre"
                    required
                  ></v-text-field>

                  <v-text-field 
                    v-model="delaiNotification" 
                    :rules="delaiRules" 
                    label="Delai" required>
                  </v-text-field>

                  <v-select
                    v-model="recurrence.periode"
                    :items="recurrence.items"
                    label="periode"
                    required
                  ></v-select>
                </v-form>
              </v-card>
            </v-col>
            <v-col cols="7">
              <v-card>{{selectedAction}}</v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import ListAction from "../components/ListAction";
export default {
  props: ["id"],
  components: {
    ListAction,
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
        chiffre: 1,
        chiffreRules: (v) => !!v || "Fréquence obligatoire",
        periode: "jour",
        items: ["jour","mois", "année"]
      },
      delaiNotification: "",
      delaiRules: [
        (v) => !!v || "Delai obligatoire",
      ],
    };
  },
};
</script>
