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
          <Calendar 
            :content="eventsActions"
            @editClicked="calendarEditClicked"
          >
            <template v-slot:modal="{dialog}">
              <EditDialog :open="dialog"/>
            </template>
          </Calendar>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Actions preventive</v-card-title>
          <Table
            show-edit-buttons
            focus-incoming-actions
            :headers="headers"
            :content="actionsPrev[0].actions"
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
import EditDialog from "../components/EditDialog";
import { CalendarAdapter } from "../helpers/CalendarHelper";
import { mapState } from "vuex";

export default {
  components: {
    Calendar,
    Table,
    EditDialog,
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
      ],
      editDialogOpen: false,
    };
  },
  created() {
    this.$store.dispatch("actions/loadActions");
  },
  computed: {
    ...mapState({
      actionsPrev: state => state.actions.all,
      responsables: state => state.actions.responsables
    }),
    eventsActions: function() {
      let adapted = [];
      this.actionsPrev.forEach(actionPrev => {
        actionPrev.actions.forEach(action => {
          const adaptedAction = new CalendarAdapter(action)
          adapted.push(adaptedAction.getEvent())
        })
      });
      return adapted;
    },
  },
  methods: {
    calendarEditClicked() {
      this.editDialogOpen = true
    },
  }
};
</script>

<style scoped></style>
