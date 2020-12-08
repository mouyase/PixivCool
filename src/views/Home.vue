<template>
  <div class="hello">
    Home
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    this.$http.get('https://app-api.pixiv.cool/v1/walkthrough/illusts').then(response => {
      console.log(response)
    })
  },
}
</script>

<style scoped>
</style>