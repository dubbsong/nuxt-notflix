<template>
  <header>
    <div class="container">
      <!-- Left -->
      <ul class="left">
        <li>
          <nuxt-link to="/">
            <img src="~/assets/img/logo.png" alt="logo" width="120" />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            <b-icon icon="movie" />
            Movies
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/tv">
            <b-icon icon="movie-roll" />
            TV Shows
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/test">
            <b-icon icon="flask-outline" />
            Test
          </nuxt-link>
        </li>
      </ul>

      <!-- Right -->
      <ul class="right">
        <li>
          <a>
            <b-icon icon="bell" />
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #20a19c;
  color: #111;
  position: fixed;

  .container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
