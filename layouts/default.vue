<template>
  <div id="app">
    <!-- Header -->
    <Header />

    <!-- Main -->
    <div id="main" role="main">
      <nuxt />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  #main {
    background-color: #141414;
    color: #fff;
    margin-top: 68px;
  }
}
</style>
