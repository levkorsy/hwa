<template>
<div class="wrapper">
  <div>
    <div>{{ dayOfWeek }}</div>
    <div>{{ dateFormatted }}</div>
    <div>City name</div>
    <div>Country</div>
  </div>
  <div>
    <div>{{ condition }}</div>
    <div>{{ temperature }}</div></div>

</div>
</template>

<script>
import moment from "moment";

export default {
  name: "SelectedWeatherDisplayInfo",
  props:{
    item:{
      type: Array,
      required: true
    }
  },
  computed:{
    dayOfWeek(){
      return moment(this.item[0]?.LocalObservationDateTime).format('dddd');
    },
    dateFormatted(){
      return moment(this.item[0]?.LocalObservationDateTime).format('DD/MM/YYYY');
    },
    temperature(){
      return `${this.item[0]?.Temperature.Metric.Value}°${this.item[0]?.Temperature.Metric.Unit}`;
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
</style>