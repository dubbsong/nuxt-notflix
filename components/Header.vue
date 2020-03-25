<template>
  <header>
    <!-- Left -->
    <ul class="left">
      <li>
        <nuxt-link to="/">
          <img src="~/assets/img/logo.png" alt="logo" width="100" />
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">
          <b-icon icon="movie" size="is-small" />
          Movies
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/tv">
          <b-icon icon="movie-roll" size="is-small" />
          TV Shows
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/test">
          <b-icon icon="flask-outline" size="is-small" />
          Test
        </nuxt-link>
      </li>
    </ul>

    <!-- Right -->
    <ul class="right">
      <li>
        <img src="~/assets/img/omb.png" alt="omb" width="16" />
      </li>
      <li>
        <nuxt-link to="/login">
          <b-icon icon="login" size="is-small" />
        </nuxt-link>
      </li>
      <li>
        <a>
          <b-icon icon="bell" size="is-small" />
        </a>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: rgb(20, 20, 20);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4%;
  box-shadow: 4px 2px 16px rgba(0, 0, 0, 0.04);
  z-index: 10;

  /* Left */
  .left {
    display: flex;

    li {
      display: flex;
      align-items: center;
      margin-right: 24px;

      a {
        // font-size: 14px;
        color: #e5e5e5;
        display: flex;
        align-items: center;

        &.nuxt-link-exact-active {
          color: #fff;
        }

        img {
          margin-right: 8px;
        }

        .icon {
          margin-right: 4px;
        }
      }
    }
  }

  /* Right */
  .right {
    display: flex;

    li {
      display: flex;
      align-items: center;
      margin-left: 16px;

      a {
        color: #e5e5e5;
      }
    }
  }
}
</style>
