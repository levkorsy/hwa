<template>
  <div class="wrapper">
<favorites-item-component v-for="(item, index) in favoritesData" :key="index" :item="item"/>
<!--<favorites-item-component v-for="(item, index) in favoritesData" :key="index" :item="item"/>-->
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
.wrapper{
  display: flex;
  justify-content: space-around;
  /*flex-wrap: nowrap;*/
}
</style>