<template>
  <div class="view-login">
    <!--    <div>-->
    <!--      <el-image class="view-login-background-img" v-for="url in background_img_array" :src="url" :key="url" fit="cover"-->
    <!--      ></el-image>-->
    <!--    </div>-->
    <div class="login-content">
      <h1>pixivcool</h1>
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
          <el-button class="login-content-card-item" type="primary" @click="formPost">登陆</el-button>
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
          if (this._.get(item, 'image_urls.square_medium')) {
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
      let postData = {}
      postData = {
        client_id: 'MOBrBDS8blbauoSck0ZfDbtuzpyT',
        client_secret: 'lsACyCD94FhDUtGTXi3QzcFE2uU1hqtDaKeqrdwj',
        grant_type: 'password',
        username: this.form_data.username,
        password: this.form_data.password,
        device_token: '',
        get_secure_url: true,
        include_policy: true
      }
      this.$http.post(this.pixiv.URL_OAUTH + '/auth/token', postData).then(response => {
        this.$loading().close()
      }).catch(error => {
        this.$loading().close()
        let message = this._.get(error, 'data.errors.system.message')
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
  width: 400px;
  height: 400px;
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
</style>