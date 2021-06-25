<template>
  <div class="wrapper">
    <div class="wr1">
      <main-location-primary-component/>
    </div>
    <div class="wr">
      <main-location-secondary-component/>
    </div>
  </div>
</template>

<script>
import MainLocationPrimaryComponent from "./MainLocationPrimaryComponent";
import MainLocationSecondaryComponent from "./MainLocationSecondaryComponent";
import {mapGetters} from "vuex";

export default {
  name: "CurrentLocationContainer",
  components: {MainLocationSecondaryComponent, MainLocationPrimaryComponent},
  computed: {
    ...mapGetters({
      fiveDays: 'main/getFiveDays',
    }),
  },
  mounted() {
    // console.log(this.fiveDays, 'from getter')
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  border: 1px solid;
  height: 66vh;
}

.wr {
  height: 40%;
  border: 1px solid;
}

.wr1 {
  height: 60%;
  border: 1px solid;
}
</style>