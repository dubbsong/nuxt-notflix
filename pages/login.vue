<template>
  <div id="login">
    <section class="section">
      <div class="container">
        <div class="card">
          <div class="card-content">
            <!-- top -->
            <div class="top">
              <h2>{{ $t('LOGIN.TITLE') }}</h2>
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
                  @keyup.native.enter="handleLogin"
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
                  @keyup.native.enter="handleLogin"
                ></b-input>
              </b-field>
            </div>

            <!-- bottom -->
            <div class="bottom">
              <!-- <b-button class="btn-cancel" expanded>
                {{ $t('BUTTON.CANCEL') }}
              </b-button> -->
              <b-button class="btn-login" expanded @click="handleLogin">
                {{ $t('LOGIN.BUTTON_LOGIN') }}
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- alertModal -->
    <b-modal :active.sync="alertModal" has-modal-card class="modal-alert">
      <div class="card">
        <div class="card-content">
          <!-- top -->
          <div class="top">
            <img src="~/assets/img/logo.png" alt="logo" width="120" />
          </div>

          <!-- middle  -->
          <div class="middle">
            <h5>
              {{ alertModalTitle }}
            </h5>

            <p>
              {{ alertModalText }}
            </p>
          </div>

          <!-- bottom -->
          <div class="bottom">
            <b-button expanded @click="alertModal = false">
              {{ $t('BUTTON.CLOSE') }}
            </b-button>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data: () => ({
    userId: '',
    userPassword: '',
    labelPosition: 'on-border',
    alertModal: false,
    alertModalTitle: '',
    alertModalText: ''
  }),
  methods: {
    handleLogin() {
      if (this.userId === '') {
        this.alertModal = true
        this.alertModalTitle = this.$t('LOGIN.ALERT_ENTER_ID')
        return
      }

      if (this.userPassword === '') {
        this.alertModal = true
        this.alertModalTitle = this.$t('LOGIN.ALERT_ENTER_PASSWORD')
        return
      }

      if (this.userId !== 'user1' || this.userPassword !== 'User12#') {
        this.alertModal = true
        this.alertModalTitle = this.$t('LOGIN.ALERT_INCORRECT_ID_OR_PASSWORD')
        return
      }

      this.$store.dispatch('login', 'itsadummyjwttoken')
      this.$router.push('/my-list')
      this.$buefy.snackbar.open({
        message: this.$t('LOGIN.ALERT_LOGGED_IN'),
        type: 'is-white',
        queue: false
      })
    }
  }
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
              margin-bottom: 24px;
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

            // .btn-cancel {
            //   background-color: #fff;
            //   color: #141414;
            //   font-weight: bold;
            //   border: solid 1px #141414;
            // }

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

  /* alertModal */
  .modal-alert {
    .card {
      width: 400px;
      border-radius: 4px;
      box-shadow: 0 1px 8px 2px rgba(0, 0, 0, 0.1);

      .card-content {
        text-align: center;

        /* top */
        .top {
          margin: 8px 0 24px;
        }

        /* middle */
        .middle {
          margin-bottom: 40px;

          h5 {
            font-weight: bold;
            color: #141414;
          }
        }

        /* bottom */
        .bottom {
          button {
            background-color: #141414;
            color: #fff;
            font-weight: bold;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  #login {
    // padding-bottom: 72px;

    /* alertModal */
    .modal-alert {
      padding: 0 8px;

      .card {
        width: 100%;
      }
    }
  }
}
</style>
