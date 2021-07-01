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
      await this.$store.dispatch('main/getMainLocationData')
      await this.$store.dispatch('main/getMainLocationDataFiveDays')
      await this.$store.dispatch('main/getFavoritesFromLocalStorage')
    }
},
  mounted() {
    this.fetchData()
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-self: center;
  width: -webkit-fill-available;
  margin-bottom: auto;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
</style>