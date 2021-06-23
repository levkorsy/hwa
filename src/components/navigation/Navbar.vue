<template>
  <div>
    <router-link
        class=""
        exact
        to="/"
    >
      Home
    </router-link>
    <router-link
        class=""
        exact
        to="/favorites"
    >
     Favorites
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
}
</script>

<style scoped>

</style>