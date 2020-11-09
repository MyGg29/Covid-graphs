<template>
  <v-row>
    <v-col
      v-for="vehicule in vehicules"
      :key="vehicule.id"
      cols="12"
      md="4"
      lg="3"
    >
      <CardVehicule
        :card-title="vehicule.nomVehicule"
        :card-text="vehicule.nomVehicule"
        :card-img-src="vehicule.img"
        :card-img-alt="vehicule.nomVehicule"
        :id-vehicule="vehicule._id"
        :infos-vehicule="vehicule.infosVehicule"
      />
    </v-col>
  </v-row>
</template>

<script>
import CardVehicule from "./CardVehicule";
export default {
  name: "ListVehicule",
  components: {
    CardVehicule
  },
  props: {
    vehicules: {
      type: Array,
      default: () => []
    }
  },
  data: function() {
    return {};
  }
};
</script>
