<template>
  <div id="my-list">
    <section class="section">
      <div class="container">
        <p class="title">My List</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="title">Data</p>
        <p>{{ popularData }}</p>
        <!-- <p v-if="!popularData[0].id === null">id: {{ popularData[0].id }}</p>
        <p>title: {{ popularData[0].title }}</p>
        <p>poster_path: {{ popularData[0].poster_path }}</p>
        <p>backdrop_path: {{ popularData[0].backdrop_path }}</p>
        <p>vote_average: {{ popularData[0].vote_average }}</p>
        <p>overview: {{ popularData[0].overview }}</p>
        <p>release_date: {{ popularData[0].release_date }}</p> -->
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    popularData: []
  }),
  mounted() {
    this.getPopularData()
  },
  methods: {
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
    }
  }
}
</script>
