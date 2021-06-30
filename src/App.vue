<template>
  <section id="app" class="hero is-fullheight" >
    <Header/>
    <router-view />
<!--    <Footer />-->
  </section>
</template>

<script>

import Header from "./components/layout/Header";
// import Footer from "./components/layout/Footer";
export default {
  name: 'App',
  components: {
    // Footer,
    Header
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

.hero.is-primary .subtitle {
   color: black;
}
</style>
