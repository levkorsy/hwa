<template>
  <div class="fav-container">
     <div class="columns is-multiline is-mobile" v-if="favoritesData.length">
       <favorites-item-component v-for="(item, index) in favoritesData" :key="index" :item="item" />
     </div>
    <div v-if="!favoritesData.length">
      <i class="fas fa-heart-broken"></i>
      <p class="tile">
        No favorites yet
      </p>
    </div>
  </div>
</template>

<script>
import FavoritesItemComponent from "./FavoritesItemComponent";
import {mapActions, mapState} from "vuex";
export default {
  name: "Favorites",
  components: {FavoritesItemComponent},
  computed: {
    ...mapActions([
      'main/getMainLocationData',
    ]),

      ...mapState("main", ["favoritesData"])

  },
  mounted() {
    this.$store.dispatch('main/getFavoritesData')
  }
}
</script>

<style scoped>
.fav-container{
  margin-bottom: auto;
}
</style>