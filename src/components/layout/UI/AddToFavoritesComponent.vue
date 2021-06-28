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

  mounted(){
    console.log(this.$store.getters.checkIfFavorite)
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
  }
}
</script>

<style scoped>

</style>