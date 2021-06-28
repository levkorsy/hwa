<template>
<div>
  <input type="checkbox" @change="changeFavorites()" v-model="isFavorite">
</div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "AddToFavoritesComponent",

  computed:{
    ...mapGetters("main", ["checkIfFavorite"])
  },
  data(){
    return{
      isFavorite: false
    }
  },
  methods:{
    changeFavorites(){
      this.$store.dispatch('main/changeFavorites', this.isFavorite)
    }
  },
  watch:{
    checkIfFavorite(){
      this.isFavorite = this.checkIfFavorite
    }
  }
}
</script>

<style scoped>

</style>