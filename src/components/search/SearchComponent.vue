<template>
  <div class="col">
    <label for="exampleDataList" class="form-label">Search</label>
    <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Please start entering a city name, e.g: London, New-York, Prague etc..." v-model="search_query">
    <datalist id="datalistOptions">
      <option v-for="(place, index) in searchResults" :value="place.name" :key="index"/>
    </datalist>
  </div>
</template>

<script>
import _ from "lodash";
import axios from "axios";
export default {
  name: "SearchComponent",

  data(){
    return{
      search_query: null,
      endpoint: process.env.VUE_APP_LOCATION_BASE_URL,
      apiKey: process.env.VUE_APP_API_KEY,
      searchResults: []
    }
  },
  watch: {
    search_query: _.debounce(function() {
      axios.get(this.endpoint, {
            params: {
              apikey: this.apiKey,
              q: this.search_query,
            }
          }).then((res) => {
          this.searchResults = res.data.map(place => ({ id: place.Key, name: place.LocalizedName }))
      })
    }, 500),
  }
}
</script>

<style scoped>

</style>