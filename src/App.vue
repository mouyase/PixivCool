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
    console.log('初次打开路由', this.firstRouter)
    console.log('app初次打开路由', this.app.appFirstRouter)
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
</style>
