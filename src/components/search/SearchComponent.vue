<template>
  <div class="main-search-container">
    <input class="search-input" id="locationsInput" oninput="this.value=this.value.replace(/[^A-Za-z\s]/g,'');"
           placeholder="Please enter a city name, e.g: London, New-York, Prague etc..." v-model.trim="location" type="search">
      <div class="search-results-container" v-if="locations.length">
        <ul class="search-results-list">
          <li class="search-results-item" v-for="(location, index) in locations" :key="index" @click="selectLocation(location)">{{ location.name }}</li>
        </ul>
      </div>
  </div>
</template>

<script>
import _ from "lodash";
import axios from "axios";
import {mapActions, mapState} from "vuex";

export default {
  name: "SearchComponent",

  data() {
    return {
      location: null,
      endpoint: process.env.VUE_APP_MAIN_URL,
      apiKey: process.env.VUE_APP_API_KEY,
      locations: []
    }
  },
  computed: {
    ...mapActions("main", ['getMainLocationData', 'getCurrentLocationId']),
    ...mapState('main', ['searchUrl'])
  },
  watch: {
    location: _.debounce(function () {
      axios.get(this.endpoint + this.searchUrl, {
        params: {
          apikey: this.apiKey,
          q: this.location,
        }
      }).then((res) => {
        if (res.data.length) {
          this.locations = res.data.map(place => ({id: place.Key, name: place.LocalizedName, country: place.Country.LocalizedName}))
        }
      })
    }, 500),
  },

  methods: {
    selectLocation(place) {
      this.$store.commit("main/setCurrentLocationId", parseInt(place.id));
      this.$store.dispatch('main/getMainLocationData')
      this.$store.commit("main/setSelectedSearchResult", place);
      this.$store.dispatch('main/getMainLocationDataFiveDays')
      this.locations = []

    }
  }
}
</script>

<style scoped>
.main-search-container {
  margin: 1rem;
}
.search-input{
  margin-bottom: 0.5rem;
  width: 100%;
  height: 40px;
  border: 2px solid black;
  text-indent: 10px;
}
.search-input:focus{
  margin-bottom: 0.5rem;
  outline: none
}
.search-results-container{
  width: 100%;
  border: medium solid rgba(193, 181, 181, 0.43);
  border-radius: 3px;
}
.search-results-list{
  list-style-type: none;
  border-radius: 6px;
  padding: 10px;
  margin: 0;
}
.search-results-item{
  font-size: 25px;
  cursor: pointer;
  margin-bottom: 3px;
  border-radius: 3px;
}
.search-results-item:hover{
  background-color: #242a32;
  color: white;
}
</style>