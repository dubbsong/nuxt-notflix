<template>
  <div id="movies">
    <!-- Popular -->
    <section class="section">
      <div class="container">
        <!-- title -->
        <h4>{{ $t('MOVIES.POPULAR') }}</h4>

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

    <!-- Now Playing -->
    <section class="section">
      <div class="container">
        <!-- title -->
        <h4>{{ $t('MOVIES.NOW_PLAYING') }}</h4>

        <!-- collapse btn -->
        <b-collapse :open="false">
          <button slot="trigger" class="button is-light">
            Data
          </button>

          <div class="content">
            <p>{{ nowPlayingData }}</p>
          </div>
        </b-collapse>
      </div>
    </section>

    <!-- Top Rated -->
    <section class="section">
      <div class="container">
        <!-- title -->
        <h4>{{ $t('MOVIES.TOP_RATED') }}</h4>

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

<style lang="scss" scoped>
#movies {
  height: calc(100vh - 108px);

  section {
    .container {
      h4 {
        margin-bottom: 8px;
      }
    }
  }
}
</style>
