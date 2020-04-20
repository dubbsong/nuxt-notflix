<template>
  <div id="test">
    <section class="section">
      <div class="container">
        <!-- title -->
        <p class="title">
          {{ $t('COMMON.TEST') }}
        </p>

        <!-- slider -->
        <div class="slider">
          <!-- slider box -->
          <div
            v-for="(i, index) in popularData"
            :key="index"
            class="slider-box"
          >
            <!-- bg img -->
            <img
              :src="'https://image.tmdb.org/t/p/w200' + i.poster_path"
              alt="poster"
            />

            <!-- slider content -->
            <div class="slider-content">
              <!-- left -->
              <div class="left">
                <p>left</p>
              </div>

              <!-- right -->
              <div class="right">
                <p>right</p>
              </div>
            </div>
          </div>
        </div>

        <!-- btn -->
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

<style lang="scss" scoped>
#test {
  height: calc(100vh - 108px);

  section {
    .container {
      /* slider */
      .slider {
        display: flex;
        overflow-x: auto;
        padding: 16px 0;

        &::-webkit-scrollbar {
          display: none;
        }

        .slider-box {
          position: relative;
          min-width: 160px;
          height: 240px;
          transition: all 0.2s ease-in-out;
          cursor: pointer;

          &:hover {
            transform: scale(1.1);
            margin: 0 16px;
            opacity: 0.4;
          }

          /* bg img */
          img {
            position: absolute;
            width: 100%;
          }

          /* slider content */
          .slider-content {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            height: 100%;
            // height: 135px;

            /* left */

            /* right */
          }
        }
      }
    }
  }
}
</style>
