<template>
  <div class="view-login">
    <div style="position: absolute;z-index: -999;height: 100%;width: 100%;background: black;opacity: 0.5;"/>
    <div class="view-login-background">
      <div style="display: flex;flex-direction: row;flex-wrap: wrap;">
        <el-image class="view-login-background-img" v-for="url in background_img_array" :src="url" :key="url"
                  fit="cover" lazy
        ></el-image>
      </div>
      <div style="display: flex;flex-direction: row;flex-wrap: wrap;">
        <el-image class="view-login-background-img" v-for="url in background_img_array" :src="url" :key="url"
                  fit="cover"
        ></el-image>
      </div>
    </div>
    <div class="login-content">
      <div style="color: white;font-size: 64px">PixivCool</div>
      <el-form :model="form_data" :rules="rules" ref="login-form">
        <el-card class="login-content-card" body-style="display: flex;flex-direction: column;">
          <el-form-item prop="username">
            <el-input class="login-content-card-item" v-model="form_data.username" placeholder="pixiv ID或邮箱"
                      clearable></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input class="login-content-card-item" v-model="form_data.password" placeholder="密码"
                      show-password></el-input>
          </el-form-item>
          <el-button class="login-content-card-item" type="primary" @click="formPost" native-type="submit">登陆
          </el-button>
          <el-button class="login-content-card-item" type="success">未持有账号的用户请点这里</el-button>
        </el-card>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      background_img_array: [],
      form_data: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {required: true, message: '请输入pixiv ID或邮箱', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      },
      loading: false,
    }
  },
  mounted() {
    this.$http.get(this.pixiv.URL_APP_API + '/v1/walkthrough/illusts').then(response => {
      let illusts = this._.get(response, 'data.illusts')
      if (illusts.length !== 0) {
        illusts.map((item, index) => {
          if (this._.get(item, 'image_urls.square_medium') && this.background_img_array.length < 60) {
            this.background_img_array.push(this._.get(item, 'image_urls.square_medium'))
          }
        })
      }
    })
  },
  methods: {
    formPost() {
      this.$refs['login-form'].validate(valid => {
        if (valid) {
          this.login()
        }
      })
    },
    login() {
      this.$loading({
        lock: true,
        text: '登录中',
      });
      let postData = {
        client_id: 'MOBrBDS8blbauoSck0ZfDbtuzpyT',
        client_secret: 'lsACyCD94FhDUtGTXi3QzcFE2uU1hqtDaKeqrdwj',
        grant_type: 'password',
        username: this.form_data.username,
        password: this.form_data.password,
        device_token: 'pixiv',
        get_secure_url: true,
        include_policy: true
      }
      this.$http.post(this.pixiv.URL_OAUTH + '/auth/token', postData).then(response => {
        this.$loading().close()
        let userData = this._.get(response, 'data.response')
        if (userData) {
          this.app.setUser(userData)
          if (this.app.firstRouter.indexOf('/login') !== 0) {
            this.app.firstRouter = '/'
          }
          this.$router.replace(this.app.firstRouter).catch(err => err)
        }
      }).catch(error => {
        this.$loading().close()
        let message = this._.get(error, 'response.data.errors.system.message')
        if (message) {
          this.$alert(message, '登陆错误', {
            confirmButtonText: '我知道了',
            type: 'error',
            showClose: false,
            closeOnClickModal: false
          });
        }
      })
    }
  }
}
</script>

<style scoped>
.view-login {
  width: 100%;
  height: 100%;
}

.view-login-background-img {
  width: calc(100% / 2);
}

@media screen and (min-width: 480px) {
  .view-login-background-img {
    width: calc(100% / 3);
  }
}

@media screen and (min-width: 980px) {
  .view-login-background-img {
    width: calc(100% / 4);
  }
}

.login-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-content-card {
  min-width: 498px;
  min-height: 308px;
}

.login-content-card-item {
  margin: 16px 0px 0px 0px;
}

.view-login-background {
  position: absolute;
  z-index: -1000;
  left: 0;
  top: 0;
  width: 100%;
  animation: background-scroll 60s linear infinite;
  animation-fill-mode: forwards;
}

@keyframes background-scroll {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, -50%, 0);
  }
}
</style>