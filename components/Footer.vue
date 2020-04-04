<template>
  <footer>
    <!-- Left -->
    <div class="left">
      <p>
        © 2020 <a href="https://dubbsong.github.io" target="_blank">ㅇㅁㅂ</a>
      </p>
    </div>

    <!-- Center -->
    <div class="center">
      <p>Is Auth: {{ isAuthenticated }}</p>
    </div>

    <!-- Right -->
    <ul class="right">
      <li>
        <a href="https://github.com/dubbsong" target="_blank">
          <b-icon icon="github-box" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/dubbsong" target="_blank">
          <b-icon icon="facebook-box" />
        </a>
      </li>
      <li>
        <a href="https://dubbsong.github.io" target="_blank">
          <img src="~/assets/img/omb.png" alt="omb img" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  background-color: #141414;
  color: #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 4%;

  /* Left */
  .left {
    p {
      font-weight: bold;

      a {
        color: #fff;
      }
    }
  }

  /* Right */
  .right {
    display: flex;

    li {
      margin-left: 8px;

      .icon {
        color: #e5e5e5;
      }

      img {
        width: 23px;
        margin-left: 4px;
      }
    }
  }
}
</style>
