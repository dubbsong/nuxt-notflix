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
          {{ $t('COMMON.HOME') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/movies">
          <!-- <b-icon icon="movie" size="is-small" /> -->
          {{ $t('COMMON.MOVIES') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/tv">
          <!-- <b-icon icon="movie-roll" size="is-small" /> -->
          {{ $t('COMMON.TV') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/my-list">
          {{ $t('COMMON.MY_LIST') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/test">
          <!-- <b-icon icon="flask-outline" size="is-small" /> -->
          {{ $t('COMMON.TEST') }}
        </nuxt-link>
      </li>
    </ul>

    <!-- Right -->
    <ul class="right">
      <li>
        <b-dropdown>
          <b-button slot="trigger" type="is-light">
            <b-icon icon="earth"></b-icon>
            <template>
              <span>{{ currentLocale }}</span>
            </template>
            <b-icon icon="menu-down"></b-icon>
          </b-button>

          <b-dropdown-item @click="switchLanguage('en')">
            <p>en</p>
          </b-dropdown-item>
          <b-dropdown-item @click="switchLanguage('ko')">
            <p>ko</p>
          </b-dropdown-item>
        </b-dropdown>
      </li>
      <li>
        <a @click="toggleAsideRight">
          <b-icon icon="bell" />
        </a>
      </li>
      <li>
        <nuxt-link to="/login">
          <b-icon icon="login-variant" />
        </nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  computed: {
    currentLocale() {
      return this.$cookies.get('locale')
    }
  },
  methods: {
    switchLanguage(locale) {
      this.$cookies.set('locale', locale, {
        path: '/'
      })

      window.location.reload(true)
    },
    toggleAsideRight() {
      console.log('Toggle AsideRight')
    }
  }
}
</script>

<style lang="scss">
header {
  background-color: #141414;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 68px;
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
        font-size: 14px;
        font-weight: bold;
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

      .dropdown {
        button {
          span {
            display: flex;
            align-items: center;
          }
        }

        .dropdown-menu {
          min-width: 5rem;
          width: 5rem;

          .dropdown-content {
            a {
              color: #141414;
            }
          }
        }
      }

      a {
        font-size: 14px;
        font-weight: bold;
        color: #e5e5e5;
      }
    }
  }
}
</style>
