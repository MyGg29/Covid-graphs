<template>
  <div>
    <v-btn class="d-block m-auto" color="blue" @click.stop="dialog = true">
      Ajouter un véhicule
    </v-btn>
    <v-dialog v-model="dialog" max-width="300">
      <v-card>
        <v-card-title class="headline">
          Ajouter un véhicule
        </v-card-title>
        <v-card-text>
          <v-form ref="addVehicule" v-model="valid" :lazy-validation="false">
            <v-text-field
              v-model="newVehiculeName"
              label="Nom du nouveau véhicule"
              :rules="nameRules"
            />
            <v-file-input v-model="file" label="Photo affichée" />
            <v-text-field
              v-for="(label, index) in infosVehicule"
              :key="index"
              :label="label"
              @input="newValue => vehiculeInfoUpdated(newValue, label)"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="green darken-1" text @click="cancel()">
            Annuler
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            :disabled="!valid"
            @click="validate()"
          >
            Valider
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Vehicules",
  props: {},
  data() {
    return {
      dialog: false,
      valid: false,
      nameRules: [v => !!v || "Nom obligatoire"],
      newVehiculeName: "",
      file: undefined,
      newVehiculeInfos: [],
      infosVehicule: [
        "Marque",
        "Année de mise en circulation",
        "Préssion pneus"
      ]
    };
  },
  computed: {},
  methods: {
    ...mapActions("vehicules", ["addVehicule"]),
    validate() {
      this.$refs.addVehicule.validate();
      if (this.valid) {
        this.addVehicule({
          nomVehicule: this.newVehiculeName,
          img: this.file,
          infosVehicule: this.newVehiculeInfos
        });
        this.dialog = false;
        this.$ref.addVehicule.reset();
      }
    },
    cancel() {
      this.dialog = false;
      this.$refs.addVehicule.reset();
    },
    vehiculeInfoUpdated(value, label) {
      this.newVehiculeInfos = this.newVehiculeInfos.filter(
        x => x.label !== label
      );
      this.newVehiculeInfos.push({
        label: label,
        valeur: value
      });
    }
  }
};
</script>
