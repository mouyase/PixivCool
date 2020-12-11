<template>
  <div class="vue-image-waterfall">
    <div class="vue-image-waterfall-column" v-for="column in tableDataArrays">
      <div v-for="(item, i) in column" :key="i" :style="{width: item.width + 'px', height: item.height + 'px'}">
        <slot :data="item.data"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueImageWaterfall',
  props: {
    array: {
      type: Array,
      default: []
    },
    columnCount: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      tableHeights: [],
      tableDataArrays: [],
      uniqueMap: {}
    }
  },
  watch: {
    row: {
      handler(newVal, oldVal) {
        for (let i = 0; i < this.columnCount; i++) {
          this.tableHeights[i] = 0
          this.tableDataArrays[i] = []
        }
      },
      immediate: true
    },
    array: {
      handler(newVal, oldVal) {
        // console.log('array数据变了', newVal)
        let newArray = this._.cloneDeep(this.tableDataArrays)
        this.array.map(item => {
          if (!this.uniqueMap.hasOwnProperty(item.key)) {
            this.uniqueMap[item.key] = true
            newArray[this.getMinHeightIndex()].push(item)
            this.tableHeights[this.getMinHeightIndex()] += item.height;
          }
        })
        this.tableDataArrays = this._.cloneDeep(newArray)
      },
      immediate: true
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    createData() {
    },
    getMinHeightIndex() {
      var contrast = Number.MAX_VALUE;
      var index = -1;
      for (var i = 0; i < this.tableHeights.length; i++) {
        if (this.tableHeights[i] < contrast) {
          contrast = this.tableHeights[i];
          index = i;
        }
      }
      return index
    },
    getMaxHeight() {
      var contrast = 0;
      var index = -1;
      for (var i = 0; i < this.tableHeights.length; i++) {
        if (this.tableHeights[i] > contrast) {
          contrast = this.tableHeights[i];
          index = i;
        }
      }
      return contrast
    }
  }
}
</script>

<style scoped>
.vue-image-waterfall {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
  position: absolute;
  width: 100%;
  height: 100%;
}

.vue-image-waterfall-column {
  display: flex;
  flex-direction: column;
}
</style>