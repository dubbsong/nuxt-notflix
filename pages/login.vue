<template>
  <div id="login">
    <section class="section">
      <div class="container">
        <div class="card">
          <div class="card-content">
            <!-- top -->
            <div class="top">
              <h2>LOGIN</h2>
              <hr />
            </div>

            <!-- info -->
            <div class="info">
              <p>Please enter ID and PW</p>
              <p>ID: <b>user1</b></p>
              <p>PW: <b>User12#</b></p>
              <p>Auth: <b></b></p>
              <hr />
            </div>

            <!-- middle -->
            <div class="middle">
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
            </div>

            <!-- bottom -->
            <div class="bottom">
              <b-button class="btn-cancel" expanded>Cancel</b-button>
              <b-button class="btn-login" expanded>Login</b-button>
            </div>
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
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 65vh;

      .card {
        // background-color: rgba(0, 0, 0, 0.75);
        background-color: #fff;
        width: 440px;
        border-radius: 4px;
        box-shadow: 4px 2px 16px rgba(0, 0, 0, 0.04);

        .card-content {
          text-align: center;

          /* top */
          .top {
            h2 {
              color: #141414;
              margin-bottom: 8px;
            }

            p {
              color: #e5e5e5;
            }

            hr {
              height: 1px;
            }
          }

          /* info */
          .info {
            text-align: left;
          }

          /* middle */
          .middle {
            margin-bottom: 40px;

            .field {
              margin-bottom: 24px;
            }
          }

          /* bottom */
          .bottom {
            display: flex;

            .btn-cancel {
              background-color: #fff;
              color: #141414;
              border: solid 1px #141414;
            }

            .btn-login {
              background-color: #141414;
              color: #fff;
              font-weight: bold;
              margin-left: 8px;
              border: solid 1px #141414;
            }
          }
        }
      }
    }
  }
}
</style>
