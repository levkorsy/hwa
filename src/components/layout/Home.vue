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
      'increment', // map `this.increment()` to `this.$store.dispatch('increment')`

      // `mapActions` also supports payloads:
      'incrementBy' // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
    ]),

  },
  mounted() {
    this.$http.get('https://jsonplaceholder.typicode.com/todos/1').then(data=>{
      console.log(data)
    })
  }
}
</script>

<style scoped>

</style>