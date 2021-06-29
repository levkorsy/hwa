<template>
  <div class="column is-2">
    <div class="card">
      <div class="card-content">
        <p class="title is-4">
          <a :href="item.Link" class="is-link">{{ dayOfWeek }} <span class="is-today-or-tomorrow">{{  checkIfTodayOrTomorrow  }}</span></a>
        </p>
        <p class="subtitle">
          {{ dateFormatted }}
        </p>
        <p class="subtitle">
          {{temperature}}
        </p>
        <p class="subtitle">
          {{ condition }}
        </p>
        <p class="subtitle">
          <icon-component />
        </p>
      </div>
    </div>
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
      if(moment(this.item.Date).isSame(moment(), 'day')) return '(Today)'
      if(moment(this.item.Date).isSame(moment().add(1, 'day'), 'day')) return '(Tomorrow)'
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
@media screen and (min-width: 769px), print {
  .column.is-2, .column.is-2-tablet {
    flex: none;
    width: 19.6%;
  }
}
@media screen and (max-width: 769px), print {
  .column.is-2, .column.is-2-tablet {
      margin: 3rem;
  }
}
.card-content{
  height: 320px;
}
.card{
  box-shadow: 0 0.5em 1em -0.125em rgb(0 0 0), -1px -2px 0 1px rgb(10 10 10 /2%);
}
.is-today-or-tomorrow{
  font-size: 13px;
}
</style>