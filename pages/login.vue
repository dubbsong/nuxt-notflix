<template>
  <div id="login">
    <section class="section">
      <div class="container">
        <div class="card">
          <div class="card-content">
            <!-- Title -->
            <p class="title">LOGIN</p>

            <!-- ID -->
            <b-field label="ID" :label-position="labelPosition">
              <b-input
                v-model="userId"
                type="text"
                placeholder="Please enter your ID"
              ></b-input>
            </b-field>

            <!-- Password -->
            <b-field label="Password" :label-position="labelPosition">
              <b-input
                v-model="userPassword"
                type="password"
                placeholder="Please enter your Password"
              ></b-input>
            </b-field>

            <!-- Btn -->
            <b-button type="is-light" expanded>LOGIN</b-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    userId: '',
    userPassword: '',
    labelPosition: 'on-border'
  })
}
</script>

<style lang="scss" scoped>
#login {
  section {
    .container {
      .card {
        // background-color: rgba(0, 0, 0, 0.75);
        background-color: #20a19c;
        width: 440px;
        margin: 0 auto;
        border-radius: 4px;
        box-shadow: 4px 2px 16px rgba(0, 0, 0, 0.04);
      }
    }
  }
}
</style>
