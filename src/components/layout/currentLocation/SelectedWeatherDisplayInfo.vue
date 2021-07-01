<template>
<div class="wrapper">

  <div class="card">
    <header class="card-header">
      <p class="card-header-title" style="justify-content: center;">
        {{ selectedSearchResult.name }}, <br/>
        {{selectedSearchResult.country}}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <b>{{ condition }} {{ temperature }}</b>
        <br>
        <b>{{ dayOfWeek }}, {{ dateFormatted }}</b>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import moment from "moment";
import {mapState} from "vuex";

export default {
  name: "SelectedWeatherDisplayInfo",
  props:{
    item:{
      type: Array,
      required: true
    }
  },
  computed:{
    ...mapState('main', ['selectedSearchResult', 'measureUnits']),
    dayOfWeek(){
      return moment(this.item[0]?.LocalObservationDateTime).format('dddd');
    },
    dateFormatted(){
      return moment(this.item[0]?.LocalObservationDateTime).format('DD/MM/YYYY');
    },
    temperature(){
      return `${this.item[0]?.Temperature[this.measureUnits].Value}°${this.item[0]?.Temperature[this.measureUnits].Unit}`;
    },
    condition(){
      return this.item[0]?.WeatherText
    }
  }
}
</script>

<style scoped>
.wrapper{
  display: flex;
  justify-content: space-between;
}
.card{
  border: 2px solid black;
  border-radius: 6px; box-shadow: 0 0.5em 1em -0.125em rgb(0 0 0), -1px -2px 0 1px rgb(10 10 10 / 2%);
}
</style>