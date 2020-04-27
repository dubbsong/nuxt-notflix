<template>
  <div id="home">
    <!-- My List -->
    <section class="section">
      <div class="container">
        <!-- title -->
        <h4>{{ $t('COMMON.MY_LIST') }}</h4>

        <!-- collapse btn -->
        <b-collapse :open="false">
          <button slot="trigger" class="button is-light">
            Data
          </button>

          <div class="content">
            <p>{{}}</p>
          </div>
        </b-collapse>
      </div>
    </section>

    <!-- Trending Now (Movies) -->
    <section class="section">
      <div class="container">
        <!-- title -->
        <h4>{{ $t('HOME.TRENDING_NOW_MOVIES') }}</h4>

        <!-- collapse btn -->
        <b-collapse :open="false">
          <button slot="trigger" class="button is-light">
            Data
          </button>

          <div class="content">
            <p>{{}}</p>
          </div>
        </b-collapse>
      </div>
    </section>

    <!-- Trending Now (TV) -->
    <section class="section">
      <div class="container">
        <!-- title -->
        <h4>{{ $t('HOME.TRENDING_NOW_TV') }}</h4>

        <!-- collapse btn -->
        <b-collapse :open="false">
          <button slot="trigger" class="button is-light">
            Data
          </button>

          <div class="content">
            <p>{{}}</p>
          </div>
        </b-collapse>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
#home {
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
