<template>
<div>
  <i class="far fa-heart fa-2x not-favorite" v-if="!isFavorite" @click="isFavorite = true"></i>
  <i class="fas fa-heart fa-2x is-favorite" v-if="isFavorite" @click="isFavorite = false"></i>
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

  watch:{
    checkIfFavorite(){
      this.isFavorite = this.checkIfFavorite
    },
    isFavorite(){
      this.$store.dispatch('main/changeFavorites', this.isFavorite)
    }
  },

}
</script>

<style scoped>
.is-favorite{
  cursor: pointer;
  color: red;
}
.not-favorite{
  cursor: pointer;
}
</style>