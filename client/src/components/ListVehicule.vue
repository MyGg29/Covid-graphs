<template>
  <div>
    <b-row>
        <b-col>
            <h1>Mes véhicules</h1>
        </b-col>
        <b-col>
            <b-button class="d-block m-auto">Ajouter un véhicule</b-button>
        </b-col>
    </b-row>
    <b-card-group deck>
      <CardVehicule
        v-for="vehicule in vehicules"
        :key="vehicule.nomVehicule"
        :cardTitle="vehicule.nomVehicule"
        :cardText="vehicule.nomVehicule"
        :cardImgSrc="vehicule.img"
        :cardImgAlt="vehicule.nomVehicule"
        :idLink="vehicule.id"
      />
    </b-card-group>
  </div>
</template>

<script>
import CardVehicule from "./CardVehicule";
export default {
  name: "ListVehicule",
  data: function() {
    return {
      vehicules: [
        {
          id: 1,
          nomVehicule: "véhicule 1",
          listeEvenements: "",
          img: "https://picsum.photos/600/400/?image=25"
        },
        {
          id: 2,
          nomVehicule: "véhicule 2",
          listeEvenements: "",
          img: "https://picsum.photos/600/400/?image=25"
        },
        {
          id: 3,
          nomVehicule: "véhicule 3",
          listeEvenements: "",
          img: "https://picsum.photos/600/400/?image=25"
        },
        {
          id: 4,
          nomVehicule: "véhicule 4",
          listeEvenements: "",
          img: "https://picsum.photos/600/400/?image=25"
        }
      ]
    };
  },
  components: {
    CardVehicule
  }
};
</script>

