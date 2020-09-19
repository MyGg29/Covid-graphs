<template>
  <v-card class="mx-auto" tile>
    <v-list shaped>
      <v-subheader>Liste actions préventive</v-subheader>
      <v-list-item-group v-model="selected" v-on:change="click" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" >
          <v-list-item-content>
            <v-list-item-title v-text="item.text" ></v-list-item-title>
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
      { text: "Nom action", icon: "mdi-clock" },
      { text: "Nom action 2", icon: "mdi-account" },
      { text: "Nom action 3", icon: "mdi-flag" },
      { text: "Nom action 4", icon: "mdi-clock" },
      { text: "Nom action 5", icon: "mdi-account" },
      { text: "Nom action 6", icon: "mdi-flag" },
      { text: "Nom action 7", icon: "mdi-clock" },
      { text: "Nom action 8", icon: "mdi-account" },
      { text: "Nom action 9", icon: "mdi-flag" },
      { text: "Nom action 10", icon: "mdi-clock" },
    ],
  }),
  methods: {
    click: function(){
      this.$emit("update:selected", this.selected)
    }
  }
};
</script>