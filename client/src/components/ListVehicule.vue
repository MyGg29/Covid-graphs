<template>
    <div>
        <h1>Mes véhicules</h1>
        <b-card-group deck>
            <CardVehicule v-for="vehicule in vehicules" v-bind:key="vehicule.nomVehicule" 
                v-bind:cardTitle="vehicule.nomVehicule" 
                v-bind:cardText="vehicule.nomVehicule" 
                v-bind:cardImgSrc="vehicule.img"
                v-bind:cardImgAlt="vehicule.nomVehicule"
            />
         </b-card-group>
    </div>
</template>

<script>
import CardVehicule from './CardVehicule'
export default {
    name: 'ListVehicule',
    data: function(){
        return{
            vehicules: [{
                nomVehicule: "véhicule 1",
                listeEvenements: "",
                img: "https://picsum.photos/600/400/?image=25"
            },{
                nomVehicule: "véhicule 2",
                listeEvenements: "",
                img: "https://picsum.photos/600/400/?image=25"
            },{
                nomVehicule: "véhicule 3",
                listeEvenements: "",
                img: "https://picsum.photos/600/400/?image=25"
            }

            ]
        }
    },
    components: {
        CardVehicule
    }
}
</script>

