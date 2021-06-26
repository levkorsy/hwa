<template>
<div>
  <div class="day-title">{{ dayOfWeek }}</div>
  <div class="date">{{ dateFormatted }}</div>
  <div class="temperature">{{temperature}}</div>
  <div class="condition">{{ condition }}</div>
  <icon-component />
</div>
</template>

<script>
import moment from "moment"
import IconComponent from "../UI/IconComponent";
export default {
  name: "MainLocationSecondaryComponent",
  components: {IconComponent},
  props:{
    item:{
      type:Object,
      required: true
    }
  },
  computed:{
    dayOfWeek(){
      return moment(this.item.Date).format('dddd');
    },
    dateFormatted(){
      return moment(this.item.Date).format('DD/MM/YYYY');
    },
    temperature(){
      return `${this.item.Temperature.Minimum.Value}°${this.item.Temperature.Minimum.Unit} - ${this.item.Temperature.Maximum.Value}°${this.item.Temperature.Maximum.Unit}`;
    },
    condition(){
      return this.item.Night.IconPhrase
    }
  }
}
</script>

<style scoped>

</style>