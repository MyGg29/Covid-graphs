<template>
  <div>
    <b-card
      :title="cardTitle"
      :header="cardHeader"
      :img-src="cardImgSrc"
      :img-alt="cardImgAlt"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>Evènements prévus</b-card-text>
      <b-list-group>
        <b-list-group-item
          v-for="action in actionsPrevue"
          :key="action.id"
          href="#"
        >{{action.date.toLocaleDateString()}} - {{action.type}}</b-list-group-item>
      </b-list-group>
      <b-button
        block
        :to="'/vehicule/' + idLink"
        variant="primary"
        class="mt-3"
      >Accéder au dossier du véhicule</b-button>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "CardVehicule",
  props: {
    idLink: Number,
    cardTitle: String,
    cardText: String,
    cardHeader: String,
    cardImgSrc: String,
    cardImgAlt: String
  },
  data() {
    return {
      actionsPrevue: [
        { id: 1, date: new Date(2020, 0, 1), type: "révision" },
        { id: 2, date: new Date(2020, 0, 1), type: "vidange" },
        { id: 3, date: new Date(2020, 2, 10), type: "vidange" },
        { id: 4, date: new Date(2020, 2, 10), type: "révision" }
      ]
    };
  }
};
</script>