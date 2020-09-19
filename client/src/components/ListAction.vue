<template>
  <v-card class="mx-auto" tile>
    <v-list shaped>
      <v-subheader>Liste actions préventive</v-subheader>
      <v-list-item-group v-model="selected" v-on:change="click" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" >
          <v-list-item-content>
            <v-text-field
              v-if="item.editable"
              v-model="nomNouvelleAction"
              label="Ajouter une action"
              append-icon="add"
              @keydown="createAction"
            >
            </v-text-field>
            <v-list-item-title
              v-else
              v-text="item.text" 
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    selected: 0,
    items: [
      { text: "Nom action 0" },
      { text: "Nom action 1" },
      { text: "Nom action 2" },
      { text: "Nom action 3" },
      { text: "Nom action 4" },
      { text: "Nom action 5" },
      { text: "Nom action 6" },
      { text: "Nom action 7" },
      { text: "Nom action 8" },
      { text: "Nom action 9" },
      { text: "Ajouter une action", editable: true}
    ],
    nomNouvelleAction: ""
  }),
  methods: {
    click: function(){
      this.$emit("update:selected", {id:this.selected, text: this.items[this.selected].text})
    },
    createAction: function(e){
      if(e.key==="Enter"){
        this.items.splice(this.items.length - 1, 0, {
          text: this.nomNouvelleAction
        })
        this.nomNouvelleAction=""
      }
    }
  }
};
</script>