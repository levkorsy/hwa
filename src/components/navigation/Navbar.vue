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
        <div class="tabs is-boxed">
          <ul>
            <li :class="$route.name === 'Main' ? 'is-active' : ''">
              <router-link
                  class="navbar-item"
                  exact
                  to="/"
              >
                <h5 class="title is-5">HOME</h5>
              </router-link>
            </li>
            <li :class="$route.name === 'Favorites' ? 'is-active' : ''">
              <router-link
                class="navbar-item"
                exact
                to="/favorites"
            >
              <h5 class="title is-5">FAVORITES</h5>
            </router-link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
}
</script>

<style scoped>
.navbar{
  margin: 0.5rem;
}
.navbar-item img {
  max-height: 3.75rem;
}

.nav-layout {
  width: 100%;
  justify-content: space-between;
}
</style>