<template>
<div>
  <div>{{ item.name }},{{ item.country }} </div>
  <div>{{ temperature }}°</div>
  <div>{{ item.WeatherText }}</div>
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "FavoritesItemComponent",
  props:{
    item:{
      type: Object,
      required: true
    }
  },
  computed:{
    ...mapState('main', ['measureUnits']),

    temperature(){
      return `${this.item.Temperature[this.measureUnits].Value}°${this.item.Temperature[this.measureUnits].Unit}`;
    },
  }

}
</script>

<style scoped>

</style>