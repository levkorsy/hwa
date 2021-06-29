<template>
  <div class="container">
      <search-component></search-component>
      <current-location-container/>
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
methods:{
    async fetchData(){
     // await this.$store.dispatch('main/getGeoLocation')//TODO check opportunity to put this dispatch in another place
      this.$store.dispatch('main/getMainLocationData')
      this.$store.dispatch('main/getMainLocationDataFiveDays')
      this.$store.dispatch('main/getFavoritesFromLocalStorage')
    }
},
  mounted() {
    this.fetchData()
    // this.$store.dispatch('main/getGeoLocation')//TODO check opportunity to put this dispatch in another place
    // this.$store.dispatch('main/getMainLocationData')
    // this.$store.dispatch('main/getMainLocationDataFiveDays')
    // this.$store.dispatch('main/getFavoritesFromLocalStorage')
  }
}
</script>

<style scoped>

</style>