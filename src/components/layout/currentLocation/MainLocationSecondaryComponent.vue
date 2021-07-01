<template>
  <div class="column">
    <div class="card">
      <div class="card-content">
        <div class="day-and-date">
          <p>
            <a :href="item.Link" class="is-link">{{ dayOfWeek }} <span
                class="is-today-or-tomorrow">{{ checkIfTodayOrTomorrow }}</span></a>
          </p>
          <p>
            {{ dateFormatted }}
          </p>
        </div>
        <div class="temperature">
          <p>{{minTemperature}}</p>

          <p> {{maxTemperature}}</p>
        </div>
        <div class="condition">
          <p>
            {{ condition }}
          </p>
          <p>
            <icon-component/>
          </p>
        </div>
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
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState('main', ['measureUnits']),

    dayOfWeek() {
      return moment(this.item.Date).format('dddd');
    },
    dateFormatted() {
      return moment(this.item.Date).format('DD/MM/YYYY');
    },
    maxTemperature() {
      return this.measureUnits === 'Metric' ? `${this.item.Temperature.Maximum.Value}°${this.item.Temperature.Maximum.Unit}`
          : `${this.cToF(this.item.Temperature.Maximum.Value)}°F`;
    },
    minTemperature() {
      return this.measureUnits === 'Metric' ? `${this.item.Temperature.Minimum.Value}°${this.item.Temperature.Minimum.Unit}`
          : `${this.cToF(this.item.Temperature.Minimum.Value)}°F`;
    },
    condition() {
      return this.item.Night.IconPhrase
    },
    checkIfTodayOrTomorrow() {
      if (moment(this.item.Date).isSame(moment(), 'day')) return '(Today)'
      if (moment(this.item.Date).isSame(moment().add(1, 'day'), 'day')) return '(Tomorrow)'
      return ''
    }
  },
  methods: {
    cToF(celsius) {
      const cTemp = celsius;
      const cToFahr = cTemp * 9 / 5 + 32;
      return cToFahr.toFixed(1)
    },

    fToC(fahrenheit) {
      const fTemp = fahrenheit;
      const fToCel = (fTemp - 32) * 5 / 9;
      const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
      console.log(message);
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .card-content {
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

@media screen and (max-width: 1023px) {
  .card-content {
    display: flex;
    padding: 0.3rem;
    justify-content: space-between;
  }

  .card-content p {
    font-size: 15px;
  }

}
.card {
  box-shadow: 0 0.5em 1em -0.125em rgb(0 0 0), -1px -2px 0 1px rgb(10 10 10 /2%);
}

.is-today-or-tomorrow {
  font-size: 13px;
}
.temperature{
  display: flex;
  flex-direction: column;
}
.day-and-date{
  display: flex;
  flex-direction: column;
}
.condition{
  display: flex;
  flex-direction: column;
}
</style>