<template>
  <div class="container">
    <div class="row">
      <search-component></search-component>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SearchComponent from "../search/SearchComponent";
export default {
  name: "Home",
  components:{
    SearchComponent
  },
  computed: {
    ...mapGetters([
      'doneTodosCount',
    ]),
    ...mapActions([
      'main/getMainLocationData', // map `this.increment()` to `this.$store.dispatch('increment')`

    ]),

  },
  mounted() {
    this.$store.dispatch('main/getMainLocationData')
    this.$store.dispatch('main/getMainLocationDataFiveDays')
  }
}
</script>

<style scoped>

</style>