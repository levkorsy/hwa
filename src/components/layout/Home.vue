<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <label for="exampleDataList" class="form-label">Search</label>
        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
        <datalist id="datalistOptions">
          <option value="San Francisco"/>
          <option value="New York"/>
          <option value="Seattle"/>
          <option value="Los Angeles"/>
          <option value="Chicago"/>
        </datalist>
      </div>

    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Home",
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