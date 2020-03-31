<template>
  <div id="my-list">
    <section class="section">
      <div class="container">
        <!-- top -->
        <div class="top">
          <!-- title -->
          <h2>My List</h2>

          <!-- collapse btn -->
          <b-collapse :open="false" style="margin-bottom:8px">
            <button slot="trigger" class="button is-light">
              Data
            </button>

            <div class="content">
              <p>{{ popularData }}</p>
            </div>
          </b-collapse>
        </div>

        <!-- middle -->
        <div class="middle">
          <b-table :data="popularData" :hoverable="true">
            <template slot-scope="props">
              <b-table-column label="Poster" width="300">
                {{ props.row.poster_path }}
              </b-table-column>
              <b-table-column label="Title" width="200">
                {{ props.row.title }}
              </b-table-column>
              <b-table-column label="Rate" width="80">
                {{ props.row.vote_average }}
              </b-table-column>
              <b-table-column label="Release" width="200">
                {{ props.row.release_date }}
              </b-table-column>
              <b-table-column label="Overview" width="500">
                {{ props.row.overview | truncate(80) }}
              </b-table-column>
            </template>
          </b-table>
        </div>

        <!-- bottom -->
        <div class="bottom">
          pagination
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  filters: {
    truncate(value, length) {
      return value.length > length ? value.substr(0, length) + '...' : value
    }
  },
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
