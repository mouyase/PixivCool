<template>
  <div class="view-home">
    <div>
      <VirtualCollection
          v-infinite-scroll="loadData"
          :cellSizeAndPositionGetter="cellSizeAndPositionGetter"
          :collection="items"
          :height="947"
          :width="image_row * image_width"
      >
        <template slot="cell" slot-scope="scope">
          <el-image class="view-home-recommend-img" :src="scope.data.image_urls.medium" fit="cover">
            <div slot="placeholder" style="width: 100%;height: 100%">
            </div>
          </el-image>
        </template>
      </VirtualCollection>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      image_recommend_array: [],
      image_width: 300,
      image_row: 4,
      next_url: '',
      is_loading: false,
    }
  },
  mounted() {
  },
  computed: {
    items() {
      const amount = +this.image_recommend_array.length
      const row = +this.image_row
      const columnHeight = new Array(row).fill(0)
      return new Array(amount).fill(1).map((_, index) => {
        const column = index % row
        const box_width = this.image_width
        const box_height = parseInt((box_width / this.image_recommend_array[index].width) * this.image_recommend_array[index].height)
        const result = {
          data: this.image_recommend_array[index],
          width: box_width,
          height: box_height,
          x: column * box_width,
          y: columnHeight[column],
        }
        columnHeight[column] += box_height
        return result
      })
    }
  },
  methods: {
    cellSizeAndPositionGetter(item, index) {
      const {data, ...sizeAndPosition} = item
      return sizeAndPosition
    },
    loadData() {
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
                this.image_recommend_array.push(item)
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
.view-home-recommend-img {
  width: 100%;
}

.vue-virtual-collection {
  margin: 0 auto;
}

.vue-virtual-collection::-webkit-scrollbar {
  width: 0 !important;
}
</style>
