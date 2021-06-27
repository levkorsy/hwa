<template>
<div>
  <input type="checkbox" @change="changeFavorites($event)">
</div>
</template>

<script>
export default {
  name: "AddToFavoritesComponent",
  // props:{
  //   id:{
  //     type: Number,
  //     required: true
  //   }
  // },
  // ...mapActions([
  //   'main/getMainLocationData', // map `this.increment()` to `this.$store.dispatch('increment')`
  //
  // ]),
  methods:{
    changeFavorites(){

      this.$store.dispatch('main/changeFavorites', event.target.checked)
    }
  }
}
</script>

<style scoped>

</style>