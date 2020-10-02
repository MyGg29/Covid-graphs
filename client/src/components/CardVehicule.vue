<template>
  <v-card>
    <v-img
      class="white--text align-end"
      height="200px"
      :src="cardImgSrc"
    />

    <v-card-title>{{ cardTitle }}</v-card-title>

    <v-card class="mx-6">
      <v-list
        dense
      >
        <v-subheader>Informations véhicule</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in infosVehicule"
            :key="i"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.label }} - {{ item.valeur }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-card-actions>
      <v-btn
        color="blue"
        :to="'vehicule/' + idVehicule"
        block
      >
        Acceder au dossier du véhicule
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "CardVehicule",
  props: {
    idVehicule: {
      type: Number,
      default: 0
    },
    cardTitle: {
      type: String,
      default: () => "Default title"
    },
    cardText: {
      type: String,
      default: () => "Default card text"
    },
    cardHeader: {
      type: String,
      default: () => "Default header",
    },
    cardImgSrc: {
      type: String,
      default: () => "https://picsum.photos/200/300"
    },
    cardImgAlt: {
      type: String,
      default: () => "Default alt img"
    },
    infosVehicule: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
    };
  },
};
</script>