<template>
  <div class="view-test">
    <VueImageWaterfall :array="image_recommend_array" v-infinite-scroll="loadData">
      <template slot-scope="scope">
        <el-image class="view-home-recommend-image" :src="scope.data.image_urls.medium" fit="cover" lazy>
        </el-image>
      </template>
    </VueImageWaterfall>
  </div>
</template>

<script>
import VueImageWaterfall from '@/components/vue-image-waterfall'

export default {
  name: 'Test',
  components: {
    VueImageWaterfall
  },
  data() {
    return {
      image_recommend_array: [],
      image_width: 300,
      next_url: '',
      is_loading: false,
      // windowsHeight: document.documentElement.clientHeight * 5,
    }
  },
  mounted() {
    // this.loadData1()
  },
  methods: {
    loadData() {
      console.log('loadData')
      if (!this.is_loading) {
        this.is_loading = true
        let url = this.next_url ? this.next_url : this.pixiv.URL_APP_API + '/v1/illust/recommended'
        let params = {
          filter: 'for_android',
          include_ranking_illusts: false,
          include_privacy_policy: true,
        }
        this.$http.get(url, {params: params}).then(response => {
          this.is_loading = false
          let illusts = this._.get(response, 'data.illusts')
          this.next_url = this._.get(response, 'data.next_url')
          if (illusts.length !== 0) {
            illusts.map((item) => {
              if (this._.get(item, 'image_urls.medium') && this._.get(item, 'sanity_level') <= 2) {
                const width = this.image_width
                const height = Math.floor((width / item.width) * item.height)
                let data = {
                  data: item,
                  width: width,
                  height: height,
                }
                this.image_recommend_array.push(data)
              }
            })
          }
        }).catch(error => {
          this.is_loading = false
        })
      }
    }
  }
}
</script>

<style scoped>
.view-test {
  overflow: auto;
}

.view-home-recommend-image {
  width: 100%;
  height: 100%;
}
</style>
