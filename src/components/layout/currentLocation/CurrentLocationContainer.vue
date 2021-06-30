<template>
  <div class="wrapper">
    <div class="wr1">
      <main-location-primary-component/>
    </div>
    <div class="columns is-desktop" v-if="currentLocationData" style="margin: 0.1rem">
      <main-location-secondary-component v-for="(item, index ) in currentLocationData.fiveDays.DailyForecasts" :item="item" :key="index"/>
    </div>
  </div>
</template>

<script>
import MainLocationPrimaryComponent from "./MainLocationPrimaryComponent";
import MainLocationSecondaryComponent from "./MainLocationSecondaryComponent";
import {mapState} from "vuex";

export default {
  name: "CurrentLocationContainer",
  components: {MainLocationSecondaryComponent, MainLocationPrimaryComponent},
  computed: {
    ...mapState("main", ["currentLocationData"])
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 70vh;
  border: 2px solid black;
  border-radius: 6px;
}

.wr1 {
  height: 40%;
}
</style>