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
    return {
      firstRouter: '/'
    }
  },
  beforeMount() {
    this.firstRouter = location.hash.slice(1)
    console.log('初次打开路由', this.firstRouter)
  },
  mounted() {
    this.$router.push(this.firstRouter)
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
