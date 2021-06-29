<template>
<div class="column is-4 mt-1">
  <div class="card" @click="setMainLocation()">
    <div class="card-content">
      <p class="title is-4">
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
      return `${this.item.Temperature[this.measureUnits].Value} ${this.item.Temperature[this.measureUnits].Unit}`;
    },
  },
  methods:{
    setMainLocation(){
      this.$store.dispatch('main/changeMainLocation', {id:this.item.id, name:this.item.city, country:this.item.country})
    }
  }

}
</script>

<style scoped>
.mt-1{
  margin-top: 1rem;
}
.card{
  cursor: pointer;
}
</style>