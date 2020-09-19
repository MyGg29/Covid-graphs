<template>
  <v-row >
    <v-col v-for="vehicule in vehicules" :key="vehicule.id" cols="12" md="4" lg="3">
      <CardVehicule
        :cardTitle="vehicule.nomVehicule"
        :cardText="vehicule.nomVehicule"
        :cardImgSrc="vehicule.img"
        :cardImgAlt="vehicule.nomVehicule"
        :idVehicule="vehicule.id"
      />
    </v-col>
  </v-row>
</template>

<script>
import CardVehicule from "./CardVehicule";
export default {
  name: "ListVehicule",
  data: function () {
    return {
      vehicules: [
        {
          id: 1,
          nomVehicule: "véhicule 1",
          listeEvenements: "",
          img: "https://picsum.photos/600/400/?image=25",
        },
        {
          id: 2,
          nomVehicule: "véhicule 2",
          listeEvenements: "",
          img: "https://picsum.photos/600/400/?image=25",
        },
        {
          id: 3,
          nomVehicule: "véhicule 3",
          listeEvenements: "",
          img: "https://picsum.photos/600/400/?image=25",
        },
        {
          id: 4,
          nomVehicule: "véhicule 4",
          listeEvenements: "",
          img: "https://picsum.photos/600/400/?image=25",
        },
        {
          id: 5,
          nomVehicule: "véhicule 4",
          listeEvenements: "",
          img: "https://picsum.photos/600/400/?image=25",
        },
        {
          id: 6,
          nomVehicule: "véhicule 4",
          listeEvenements: "",
          img: "https://picsum.photos/600/400/?image=25",
        },
      ],
    };
  },
  components: {
    CardVehicule,
  },
};
</script>

