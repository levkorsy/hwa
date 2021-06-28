<template>
<div style="border: 1px solid">
  <div class="day-title">{{ dayOfWeek }}</div>
  <div class="date">{{ dateFormatted }}</div>
  <div class="temperature">{{temperature}}</div>
  <div class="condition">{{ condition }}</div>
  <icon-component />
  <div>{{ checkIfTodayOrTomorrow }}</div>
</div>
</template>

<script>
import moment from "moment"
import IconComponent from "../UI/IconComponent";
import {mapState} from "vuex";
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
    ...mapState('main', ['measureUnits']),

    dayOfWeek(){
      return moment(this.item.Date).format('dddd');
    },
    dateFormatted(){
      return moment(this.item.Date).format('DD/MM/YYYY');
    },
    temperature(){
     return this.measureUnits === 'Metric' ? `${this.item.Temperature.Minimum.Value}°${this.item.Temperature.Minimum.Unit} - ${this.item.Temperature.Maximum.Value}°${this.item.Temperature.Maximum.Unit}`
          : `${this.cToF(this.item.Temperature.Minimum.Value)}°F - ${this.cToF(this.item.Temperature.Maximum.Value)}°F`;
    },
    condition(){
      return this.item.Night.IconPhrase
    },
    checkIfTodayOrTomorrow(){
      if(moment(this.item.Date).isSame(moment(), 'day')) return 'today'
      if(moment(this.item.Date).isSame(moment().add(1, 'day'), 'day')) return 'tomorrow'
      return ''
    }
  },
  methods:{
    //TODO make mixin
     cToF(celsius)
{
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  // const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
  return cToFahr.toFixed(1)
  // console.log(message);
},

 fToC(fahrenheit)
{
  const fTemp = fahrenheit;
  const fToCel = (fTemp - 32) * 5 / 9;
  const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
  console.log(message);
}
}
}
</script>

<style scoped>

</style>