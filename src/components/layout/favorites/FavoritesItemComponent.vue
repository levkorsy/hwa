<template>
<div class="column is-4 mt-1">
  <div class="card">
    <div class="card-content">
      <p class="title">
        {{ item.name }}, {{ item.country }}
      </p>
      <p class="subtitle">
        {{ temperature }}°
      </p>
      <p class="subtitle">
        {{ item.WeatherText }}
      </p>
    </div>
  </div>
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
.mt-1{
  margin-top: 1rem;
}
</style>