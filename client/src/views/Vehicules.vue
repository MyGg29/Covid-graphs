<template>
  <div>
    <v-row>
      <v-col cols="10">
        <h1>Mes véhicules</h1>
      </v-col>
      <v-col cols="2">
        <DialogCreateVehicule />
      </v-col>
    </v-row>
    <br>
    <ListVehicule :vehicules="vehicules" />
  </div>
</template>
<script>
import {mapState, mapActions} from "vuex"
import ListVehicule from "../components/ListVehicule";
import DialogCreateVehicule from "../components/DialogCreateVehicule"
export default {
  name: "Vehicules",
  components: {
    ListVehicule,
    DialogCreateVehicule
  },
  data (){
    return {
    }
  },
  computed: {
    ...mapState({ 
      vehicules: state => state.vehicules.all
    }),
  },
  created(){
    this.$store.dispatch("vehicules/loadVehicules")
  },
  methods: {
    ...mapActions("vehicules", ["addVehicule"]),
  },
};
</script>
