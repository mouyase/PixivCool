<template>
  <div class="view-home">
    <div>
      <!--      <el-image class="view-home-recommend-img" v-for="url in recommend_array" :src="url" :key="url" fit="cover"-->
      <!--      ></el-image>-->
      <VirtualCollection
          :cellSizeAndPositionGetter="cellSizeAndPositionGetter"
          :collection="recommend_array"
          :height="500"
          :width="330"
      >
        <div slot="cell" slot-scope="scope">
          <img :src="scope.src"/>
<!--          <el-image class="view-home-recommend-img" :src="props.src" fit="cover"-->
<!--          ></el-image>-->
        </div>
      </VirtualCollection>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      recommend_array: [],
      items: Array.from({length: 1000}, (_, index) => ({data: '#' + index}))
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
            this.recommend_array.push({src: this._.get(item, 'image_urls.medium')})
          }
        })
      }
      console.log(this.recommend_array)
    })
  },
  methods: {
    cellSizeAndPositionGetter(item, index) {
      // compute size and position
      return {
        width: 300,
        height: 150,
        x: (index % 2) * 110,
        y: parseInt(index / 2) * 160
      }
    }
  }
}
</script>

<style scoped>
.view-home-recommend-img {
  width: 200px;
}
</style>
