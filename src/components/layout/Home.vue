<template>
  <div>home</div>

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