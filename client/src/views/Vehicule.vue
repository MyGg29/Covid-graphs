<template>
  <div>
    <h1>Vehicule {{id}}</h1>
    <div id="vehicule-grid">
      <section id="calendrier">
      </section>
      <section id="actions-preventive"></section>
      <section id="actions-curative"></section>
      <section id="info-vehicule"></section>
    </div>
  </div>
</template>
<script>

export default {
  props: ["id"],
};
</script>

<style scoped>
#vehicule-grid {
  display: grid;
  grid-template-areas:
    "cal prv cur"
    "cal inf inf";
  grid-auto-rows: minmax(100px, 50%);
  grid-template-columns: minmax(100px, 50%);
}
#calendrier {
  display: block;
  grid-area: cal;
  background-color: red;
}
#actions-preventive {
  display: block;
  grid-area: prv;
  background-color: blue;
}
#actions-curative {
  display: block;
  grid-area: cur;
  background-color: yellow;
}
#info-vehicule {
  display: block;
  grid-area: inf;
  background-color: green;
}
</style>