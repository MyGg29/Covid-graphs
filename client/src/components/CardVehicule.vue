<template>
  <v-card>
    <v-img class="white--text align-end" height="200px" :src="cardImgSrc"/>

    <v-card-title >{{cardTitle}}</v-card-title>

    <v-card-text class="text--primary">
      <div>Lorem ipsum</div>

      <div> dolor sit amet, consectetur </div>
    </v-card-text>
    <v-card class="mx-6">
      <v-list
        dense
      >
        <v-subheader>Informations véhicule</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in infosVehicule" :key="i" >
            <v-list-item-content>
              <v-list-item-title >{{item.label}} - {{item.valeur}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-card-actions>
      <v-btn color="blue" :to="'vehicule/' + idVehicule" block>Acceder au dossier du véhicule</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "CardVehicule",
  props: {
    idVehicule: Number,
    cardTitle: String,
    cardText: String,
    cardHeader: String,
    cardImgSrc: String,
    cardImgAlt: String,
  },
  data() {
    return {
      infosVehicule: [
        { label: "Marque", valeur: "Mercedes" },
        { label: "Année de mise en circulation", valeur: "2019" },
        { label: "Préssion pneus", valeur: "3 bars" },
        { label: "Infomation", valeur: "valeur" },
      ],
    };
  },
};
</script>