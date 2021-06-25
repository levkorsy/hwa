<template>
  <div id="app" class="container">
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
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
