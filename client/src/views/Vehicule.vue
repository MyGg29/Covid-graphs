<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs" large>
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :href="item.href"
          :disabled="item.disabled"
        >
          <h1>{{ item.text }}</h1>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <div id="vehicule-grid">
      <section id="calendrier">
        <v-card>
          <v-card-title>Calendrier</v-card-title>
          <Calendar />
        </v-card>
      </section>
      <section id="actions-preventive">
        <v-card>
          <v-card-title>Actions preventive</v-card-title>
          <Table />
          <v-card-actions>
            <v-btn color="blue" block :to="'/vehicule/'+id+'/actionsprev'">Accéder les actions préventives</v-btn>
          </v-card-actions>
        </v-card>
      </section>
      <section id="actions-curative">
        <v-card>
          <v-card-title>Actions curative</v-card-title>
          <Table />
          <v-card-actions>
            <v-btn block color="blue">Créer une action curative</v-btn>
          </v-card-actions>
        </v-card>
      </section>
    </div>
  </div>
</template>
<script>
import Calendar from "../components/Calendar";
import Table from "../components/Table";

export default {
  props: ["id"],
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
  components: {
    Calendar,
    Table,
  },
};
</script>

<style scoped>
#vehicule-grid {
  display: grid;
  grid-template-areas:
    "cal prv cur"
    "cal inf inf";
  grid-template-columns: minmax(200px, 50%) minmax(100px, 25%) minmax(
      100px,
      25%
    );
  gap: 10px;
}
#calendrier {
  display: block;
  grid-area: cal;
}
#actions-preventive {
  display: block;
  grid-area: prv;
}
#actions-curative {
  display: block;
  grid-area: cur;
}
#info-vehicule {
  display: block;
  grid-area: inf;
}
</style>