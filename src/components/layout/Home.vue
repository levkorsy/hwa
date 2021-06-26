<template>
  <div class="container">
    <div class="row">
      <search-component></search-component>
      <current-location-container/>
    </div>
  </div>

</template>

<script>
import { mapActions } from 'vuex'
import SearchComponent from "../search/SearchComponent";
import CurrentLocationContainer from "./currentLocation/CurrentLocationContainer";
export default {
  name: "Home",
  components:{
    CurrentLocationContainer,
    SearchComponent
  },
  computed: {
    // ...mapGetters([
    //   'doneTodosCount',
    // ]),
    ...mapActions([
      'main/getMainLocationData',

    ]),

  },
  mounted() {
    this.$store.dispatch('main/getMainLocationData')
    this.$store.dispatch('main/getMainLocationDataFiveDays')
  }
}
</script>

<style scoped>

</style>