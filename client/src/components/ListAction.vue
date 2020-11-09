<template>
  <v-card class="mx-auto" tile>
    <v-list shaped>
      <v-subheader>Liste actions préventive</v-subheader>
      <v-list-item-group 
        v-model="selected" 
        color="primary" 
        mandatory
        @change="click"
      >
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-content>
            <v-text-field
              v-if="i === items.length - 1"
              v-model="nomNouvelleAction"
              label="Ajouter une action"
              append-icon="add"
              @keydown.enter="createAction"
            />
            <v-list-item-title v-else v-text="item.text" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script lang="ts">
import { mapState} from "vuex"
export default {
  props: {
    items: {
      type: Array,
    },
  },
  data: () => ({
    selected: 0,
    nomNouvelleAction: ""
  }),
  computed: {
    ...mapState({
      actions: state => state.actions.all
    })
  },
  methods: {
    click() {
      console.log("click")
      console.log(this.selected, this.items[this.selected].text)
      if (typeof this.selected === "number") {
        this.$emit("update:selected", {
          id: this.selected,
          text: this.items[this.selected].text
        });
      } else {
        this.$emit("update:selected", { id: this.selected, text: undefined });
      }
    },
    createAction(e) {
      const indexNewItem = this.items.length - 1
      this.items.splice(indexNewItem, 0, {
        text: this.nomNouvelleAction
      });
      this.$emit("update:selected", { 
        id: this.selected, text: this.items[this.selected].text 
      });
      this.actions.push({
        nomAction: this.nomNouvelleAction,
        parametres: {
          recurenceJour: 1,
          recurenceMois:"mois",
          recurenceApartirDe: new Date().toISOString().substr(0,10),
          notificationMailNbJourAvant: 10,
          notificationMethode: "mail",
          destinataire: "xavier@aeroport.fr"
        },
        actions: [{

        }]
      })
      this.nomNouvelleAction = "";
    }
  }
};
</script>
