<template>
  <div class="wrapper">
    <div class="wr1">
      <main-location-primary-component/>
    </div>
    <div class="columns" v-if="currentLocationData">
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
  },
  mounted() {
    setTimeout(()=>{
      console.log(this.currentLocationData, 'from getter')
    }, 2000)

  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 66vh;
}

.wr {
  height: 40%;
  /*border: 1px solid;*/
  display: flex;
  justify-content: space-around;
}

.wr1 {
  height: 60%;
  /*display: flex;*/
  /*justify-content: space-around;*/
}
</style>