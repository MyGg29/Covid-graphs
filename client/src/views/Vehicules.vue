<template>
  <div>
    <v-row>
      <v-col cols="10">
        <h1>Mes véhicules</h1>
      </v-col>
      <v-col cols="2">
        <v-btn class="d-block m-auto" color="blue">Ajouter un véhicule</v-btn>
      </v-col>
    </v-row>
    <ListVehicule />
  </div>
</template>
<script>
import ListVehicule from "../components/ListVehicule";
export default {
  name: "Vehicules",
  components: {
    ListVehicule
  }
};
</script>
