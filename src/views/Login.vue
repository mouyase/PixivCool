<template>
  <div id="view-login">
    <div>
      <el-image class="view-login-background-img" v-for="url in background_img_array" :src="url" :key="url" fit="cover"
      ></el-image>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      background_img_array: []
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
}
</script>

<style scoped>
.view-login-background-img {
  width: 400px;
  height: 400px;
}
</style>