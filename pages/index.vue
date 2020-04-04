<template>
  <div id="home">
    <!-- My List -->
    <section class="section">
      <div class="container">
        <!-- title -->
        <p class="subtitle">
          {{ $t('COMMON.MY_LIST') }}
        </p>

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

    <!-- Trending Now -->
    <section class="section">
      <div class="container">
        <!-- title -->
        <p class="subtitle">
          {{ $t('HOME.TRENDING_NOW') }}
        </p>

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
