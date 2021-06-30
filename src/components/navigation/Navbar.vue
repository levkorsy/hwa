<template>
  <nav aria-label="main navigation" class="navbar" role="navigation">
    <div class="navbar-brand nav-layout">
      <router-link
          class="navbar-item"
          exact
          to="/"
      >
        <img alt="4 seasons" src="../../assets/logo.png">
      </router-link>

      <div class="navbar-item">
        <div class="tabs">
          <ul>
            <li :class="$route.name === 'Main' ? 'is-active' : ''">
              <router-link
                  class="navbar-item"
                  exact
                  to="/"
              >
                <img src="../../assets/home.svg" alt="" height="32" width="32">
              </router-link>
            </li>
            <li :class="$route.name === 'Favorites' ? 'is-active' : ''">
              <router-link
                class="navbar-item"
                exact
                to="/favorites"
            >
                <img src="../../assets/heart.svg" alt="" height="32" width="32">
            </router-link>
            </li>
          </ul>
          <div class="navbar-item">
            <measure-units-switch/>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import MeasureUnitsSwitch from "../layout/UI/MeasureUnitsSwitch";
export default {
  name: "Navbar",
  components: {MeasureUnitsSwitch},
}
</script>

<style scoped>
.navbar{
  margin: 0.5rem;
}
.navbar-item img {
  max-height: 2rem;
}

.nav-layout {
  width: 100%;
  justify-content: space-between;
}

.tabs ul{
  border-bottom: none;
}
.tabs ul li{
  margin: 1px;
}
</style>