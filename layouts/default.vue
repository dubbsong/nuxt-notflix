<template>
  <div id="app">
    <!-- Header -->
    <Header />

    <!-- Main -->
    <div id="main" role="main">
      <nuxt />
    </div>

    <!-- Footer -->
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
#app {
  #main {
    background-color: #141414;
    margin-top: 68px;
  }
}
</style>
