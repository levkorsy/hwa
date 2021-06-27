<template>
  <div>
<favorites-item-component/>
  </div>
</template>

<script>
import FavoritesItemComponent from "./FavoritesItemComponent";
import {mapActions} from "vuex";
export default {
  name: "Favorites",
  components: {FavoritesItemComponent},
  computed: {
    ...mapActions([
      'main/getMainLocationData',
    ]),
  },
  mounted() {
    this.$store.dispatch('main/getFavoritesData')
  }
}
</script>

<style scoped>

</style>