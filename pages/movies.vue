<template>
  <div id="movies">
    <!-- Popular -->
    <section class="section">
      <div class="container">
        <p class="subtitle">Popular</p>
        <p>{{ popularData }}</p>
      </div>
    </section>

    <!-- Now Playing -->
    <section class="section">
      <div class="container">
        <p class="subtitle">Now Playing</p>
        <p>{{ nowPlayingData }}</p>
      </div>
    </section>

    <!-- Top Rated -->
    <section class="section">
      <div class="container">
        <p class="subtitle">Top Rated</p>
        <p>{{ topRatedData }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    popularData: [],
    nowPlayingData: [],
    topRatedData: []
  }),
  mounted() {
    this.getPopularData()
    this.getNowPlayingData()
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
        .get(`https://api.themoviedb.org/3/movie/popular?${params}`)
        .then(({ data }) => {
          this.popularData = data.results
        })
        .catch((error) => {
          this.popularData = []
          throw error
        })
    },
    // Now Playing Data
    getNowPlayingData() {
      const params = [
        'api_key=b1aff257ceb0cbcdd236cef217694a61',
        'language=en-US'
      ].join('&')

      axios
        .get(`https://api.themoviedb.org/3/movie/now_playing?${params}`)
        .then(({ data }) => {
          this.nowPlayingData = data.results
        })
        .catch((error) => {
          this.nowPlayingData = []
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
        .get(`https://api.themoviedb.org/3/movie/top_rated?${params}`)
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
