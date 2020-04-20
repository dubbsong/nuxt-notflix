<template>
  <div id="tv">
    <!-- Popular -->
    <section class="section">
      <div class="container">
        <!-- title -->
        <p class="subtitle">
          {{ $t('TV.POPULAR') }}
        </p>

        <!-- collapse btn -->
        <b-collapse :open="false">
          <button slot="trigger" class="button is-light">
            Data
          </button>

          <div class="content">
            <p>{{ popularData }}</p>
          </div>
        </b-collapse>
      </div>
    </section>

    <!-- On The Air -->
    <section class="section">
      <div class="container">
        <!-- title -->
        <p class="subtitle">
          {{ $t('TV.ON_THE_AIR') }}
        </p>

        <!-- collapse btn -->
        <b-collapse :open="false">
          <button slot="trigger" class="button is-light">
            Data
          </button>

          <div class="content">
            <p>{{ onTheAirData }}</p>
          </div>
        </b-collapse>
      </div>
    </section>

    <!-- Top Rated -->
    <section class="section">
      <div class="container">
        <!-- title -->
        <p class="subtitle">
          {{ $t('TV.TOP_RATED') }}
        </p>

        <!-- collapse btn -->
        <b-collapse :open="false">
          <button slot="trigger" class="button is-light">
            Data
          </button>

          <div class="content">
            <p>{{ topRatedData }}</p>
          </div>
        </b-collapse>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    popularData: [],
    onTheAirData: [],
    topRatedData: []
  }),
  mounted() {
    this.getPopularData()
    this.getOnTheAirData()
    this.getTopRatedData()
  },
  methods: {
    // Popular Data
    getPopularData() {
      const params = [
        'api_key=b1aff257ceb0cbcdd236cef217694a61',
        'language=en-US'
      ].join('&')

      axios
        .get(`https://api.themoviedb.org/3/tv/popular?${params}`)
        .then(({ data }) => {
          this.popularData = data.results
        })
        .catch((error) => {
          this.popularData = []
          throw error
        })
    },
    // On The Air Data
    getOnTheAirData() {
      const params = [
        'api_key=b1aff257ceb0cbcdd236cef217694a61',
        'language=en-US'
      ].join('&')

      axios
        .get(`https://api.themoviedb.org/3/tv/on_the_air?${params}`)
        .then(({ data }) => {
          this.onTheAirData = data.results
        })
        .catch((error) => {
          this.onTheAirData = []
          throw error
        })
    },
    // Top Rated Data
    getTopRatedData() {
      const params = [
        'api_key=b1aff257ceb0cbcdd236cef217694a61',
        'language=en-US'
      ].join('&')

      axios
        .get(`https://api.themoviedb.org/3/tv/top_rated?${params}`)
        .then(({ data }) => {
          this.topRatedData = data.results
        })
        .catch((error) => {
          this.topRatedData = []
          throw error
        })
    }
  }
}
</script>

<style lang="scss" scoped>
#tv {
  height: calc(100vh - 108px);
}
</style>
