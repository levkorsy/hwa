<template>
<div style="display: flex; justify-content: space-around">
  <icon-component/>
  <selected-weather-display-info :item="currentLocationData.single"/>
  <add-to-favorites-component/>
</div>
</template>

<script>
import {mapState} from "vuex";
import IconComponent from "../UI/IconComponent";
import SelectedWeatherDisplayInfo from "./SelectedWeatherDisplayInfo";
import AddToFavoritesComponent from "../UI/AddToFavoritesComponent";

export default {
  name: "MainLocationPrimaryComponent",
  components: {AddToFavoritesComponent, SelectedWeatherDisplayInfo, IconComponent},
  computed: {
    ...mapState("main", ["currentLocationData"])
  },
}
</script>

<style scoped>

</style>