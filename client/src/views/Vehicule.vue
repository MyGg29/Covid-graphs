<template>
  <div>
    <v-breadcrumbs
      :items="breadcrumbs"
      large
    >
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :href="item.href"
          :disabled="item.disabled"
        >
          <h1>{{ item.text }}</h1>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <v-row dense>
      <v-col
        cols="12"
        md="4"
      >
        <v-card>
          <v-card-title>Calendrier</v-card-title>
          <Calendar />
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <v-card>
          <v-card-title>Actions preventive</v-card-title>
          <Table
            headers=""
            :items-per-page="5"
          />
          <v-card-actions>
            <v-btn
              color="blue"
              block
              :to="'/vehicule/'+id+'/actionsprev'"
            >
              Accéder les actions préventives
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <v-card>
          <v-card-title>Actions curative</v-card-title>
          <Table
            :items-per-page="5"
          />
          <v-card-actions>
            <v-btn
              block
              color="blue"
            >
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
import { mapState } from "vuex"

export default {
  components: {
    Calendar,
    Table,
  },
  props: ["id"],
  created() {
    this.$store.dispatch("actions/loadActions")
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
        },
      ],
    };
  },
  computed: {
    ...mapState({ 
      actions: state => state.actions.all
    }),
  },
};
</script>

<style scoped>
</style>