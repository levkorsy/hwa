<template>
  <div class="container">
    <div>
      <search-component></search-component>
      <current-location-container/>
    </div>
  </div>

</template>

<script>
import SearchComponent from "../search/SearchComponent";
import CurrentLocationContainer from "./currentLocation/CurrentLocationContainer";
export default {
  name: "Home",
  components:{
    CurrentLocationContainer,
    SearchComponent
  },

  mounted() {
    this.$store.dispatch('main/getMainLocationData')
    this.$store.dispatch('main/getMainLocationDataFiveDays')
    this.$store.dispatch('main/getFavoritesFromLocalStorage')
  }
}
</script>

<style scoped>

</style>