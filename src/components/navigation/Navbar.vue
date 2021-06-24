<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30"
                                            height="24" class="d-inline-block align-text-top">
        Weather app</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
                class="nav-link active"
                exact
                to="/"
            >
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
                class="nav-link"
                exact
                to="/favorites"
            >
              Favorites
            </router-link>
          </li>

        </ul>

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

</style>