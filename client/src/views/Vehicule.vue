<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs" large>
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          <h1>{{ item.text }}</h1>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <v-row dense>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Calendrier</v-card-title>
          <Calendar />
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Actions preventive</v-card-title>
          <Table
            show-edit-buttons
            focus-incoming-actions
            :headers="headers"
            :content="actions"
            :responsables="responsables"
            :items-per-page="5"
          />
          <v-card-actions>
            <v-btn color="blue" block :to="'/vehicule/' + id + '/actionsprev'">
              Accéder les actions préventives
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Actions curative</v-card-title>
          <Table :items-per-page="5" />
          <v-card-actions>
            <v-btn block color="blue">
              Créer une action curative
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Calendar from "../components/Calendar";
import Table from "../components/Table";
import CalendarAdapter from "../helpers/CalendarHelper.ts";
import { mapState } from "vuex";

export default {
  components: {
    Calendar,
    Table
  },
  props: ["id"],
  data: function() {
    return {
      breadcrumbs: [
        {
          text: "Mes vehicules",
          href: "/vehicule"
        },
        {
          text: "Vehicule " + this.id
        }
      ],
      headers: [
        { text: "Action", value: "nomAction" },
        { text: "Date programmé", value: "dateProgramme" },
        { text: "Date réalisation", value: "dateRealisation" },
        { text: "Lieu réalisation", value: "lieuRealisation" },
        { text: "Résponsable", value: "responsable" },
        { text: "Commentaire", value: "commentaire" }
      ]
    };
  },
  created() {
    this.$store.dispatch("actions/loadActions");
  },
  computed: {
    ...mapState({
      actions: state => state.actions.all,
      responsables: state => state.actions.responsables
    }),
    eventsActions: function() {
      let adapted = [];
      this.actions.forEach(action => {
        const adaptedAction = new CalendarAdapter(action).getEvent();
        adapted.push(adaptedAction);
      });
      return adapted;
    }
  }
};
</script>

<style scoped></style>
