<script src="app.js"></script>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {}
  },
  created() {
    this.app.firstRouter = location.hash.slice(1)
    console.log('初次打开路由', this.app.firstRouter)
    if (!this.app.isLogin()) {
      this.app.firstRouter = 'login'
    }
    this.$router.replace(this.app.firstRouter).catch(err => err)
  },
  beforeMount() {
  },
  mounted() {
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

#app {
  padding: 0px;
  margin: 0px;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border: hidden;
}

::-webkit-scrollbar {
  display: none;
}
</style>
