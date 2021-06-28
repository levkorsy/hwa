<template>
<!--  <nav class="navbar navbar-expand-lg navbar-light bg-light">-->
<!--    <div class="container-fluid">-->
<!--      <a class="navbar-brand" href="#">-->
<!--        <img src="../../assets/logo.png" alt="4 seasons"  class="d-inline-block align-text-top"></a>-->
<!--      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"-->
<!--              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
<!--        <span class="navbar-toggler-icon"></span>-->
<!--      </button>-->
<!--      <div class="collapse navbar-collapse" id="navbarSupportedContent">-->
<!--        <ul class="navbar-nav me-auto mb-2 mb-lg-0">-->
<!--          <li class="nav-item">-->
<!--            <router-link-->
<!--                class="nav-link active"-->
<!--                exact-->
<!--                to="/"-->
<!--            >-->
<!--              Home-->
<!--            </router-link>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <router-link-->
<!--                class="nav-link"-->
<!--                exact-->
<!--                to="/favorites"-->
<!--            >-->
<!--              Favorites-->
<!--            </router-link>-->
<!--          </li>-->

<!--        </ul>-->

<!--      </div>-->
<!--    </div>-->
<!--  </nav>-->
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand nav-layout">
                  <router-link
                      class="navbar-item"
                      exact
                      to="/"
                  >
                    <img src="../../assets/logo.png" alt="4 seasons">
                  </router-link>

          <div class="navbar-item">
            <router-link
                class="navbar-item"
                exact
                to="/"
            >
              HOME
            </router-link>
            <router-link
                class="navbar-item"
                exact
                to="/favorites"
            >
              FAVORITES
            </router-link>
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
.navbar-item img {
  max-height: 3.75rem;
}
.nav-layout{
  width: 100%;
  justify-content: space-between;
}
</style>