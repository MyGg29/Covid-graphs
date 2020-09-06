<template>
  <b-container id="app" >
    <ListVehicule/>
  </b-container>
</template>
<script>
//import HelloWorld from './components/HelloWorld.vue'
import ListVehicule from './components/ListVehicule.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
    ListVehicule
  }
}
</script>

<style>

</style>
