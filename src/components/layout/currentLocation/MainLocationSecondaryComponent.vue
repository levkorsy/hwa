<template>
  <div class="column is-2">
    <div class="card">
      <div class="card-content">
        <p class="title is-4">
          {{ dayOfWeek }}
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

        <p class="subtitle">
          {{  checkIfTodayOrTomorrow  }}
        </p>
      </div>
    </div>
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
    },
    checkIfTodayOrTomorrow(){
      if(moment(this.item.Date).isSame(moment(), 'day')) return 'today'
      if(moment(this.item.Date).isSame(moment().add(1, 'day'), 'day')) return 'tomorrow'
      return ''
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
</style>