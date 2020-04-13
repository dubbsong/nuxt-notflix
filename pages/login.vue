<template>
  <div id="login">
    <section class="section">
      <div class="container">
        <div class="card">
          <div class="card-content">
            <!-- top -->
            <div class="top">
              <h2>{{ $t('LOGIN.TITLE') }}</h2>
              <hr />
            </div>

            <!-- info -->
            <div class="info">
              <b class="has-text-success">
                {{ $t('LOGIN.NOTICE_TITLE') }}
              </b>
              <p>
                {{ $t('LOGIN.NOTICE_ID') }}
                <b class="has-text-success">user1</b>
              </p>
              <p>
                {{ $t('LOGIN.NOTICE_PW') }}
                <b class="has-text-success">User12#</b>
              </p>
              <hr />
            </div>

            <!-- middle -->
            <div class="middle">
              <!-- ID -->
              <b-field
                :label="$t('LOGIN.LABEL_ID')"
                :label-position="labelPosition"
              >
                <b-input
                  v-model="userId"
                  type="text"
                  :placeholder="$t('LOGIN.PLACEHOLDER_ENTER_ID')"
                ></b-input>
              </b-field>

              <!-- Password -->
              <b-field
                :label="$t('LOGIN.LABEL_PASSWORD')"
                :label-position="labelPosition"
              >
                <b-input
                  v-model="userPassword"
                  type="password"
                  :placeholder="$t('LOGIN.PLACEHOLDER_ENTER_PASSWORD')"
                ></b-input>
              </b-field>
            </div>

            <!-- bottom -->
            <div class="bottom">
              <b-button class="btn-cancel" expanded>
                {{ $t('BUTTON.CANCEL') }}
              </b-button>
              <b-button class="btn-login" expanded>
                {{ $t('LOGIN.BUTTON_LOGIN') }}
              </b-button>
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
  height: calc(100vh - 108px);

  section {
    height: 100%;

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      // min-height: 65vh;

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
              font-weight: bold;
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
