<template>
  <div id="app" class="container is-fluid">
    <Header/>
    <router-view />
    <Footer />
  </div>
</template>

<script>

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
export default {
  name: 'App',
  components: {
    Footer,
    Header
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
