<template>
  <div class="view-home">
    <div>
      <el-image class="view-home-recommend-img" v-for="url in recommend_array" :src="url" :key="url" fit="cover"
      ></el-image>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      recommend_array: []
    }
  },
  mounted() {
    let params = {
      filter: 'for_android',
      include_ranking_illusts: false,
      include_privacy_policy: true,
    }
    this.$http.get(this.pixiv.URL_APP_API + '/v1/illust/recommended', {params: params}).then(response => {
      let illusts = this._.get(response, 'data.illusts')
      if (illusts.length !== 0) {
        illusts.map((item) => {
          if (this._.get(item, 'image_urls.medium') && this._.get(item, 'sanity_level') <= 2) {

            this.recommend_array.push(this._.get(item, 'image_urls.medium'))
          }
        })
      }
    })
  },
}
</script>

<style scoped>
.view-home-recommend-img {
  width: 200px;
}
</style>