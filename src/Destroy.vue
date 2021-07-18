<template>
  <div class="red">
    我是Destroy组件
  </div>

</template>

<script>
  export default {
    name: "Demo",
    data(){
      return {

      }
    },
    destroyed() {
      console.log('我要消失了')
    }
  }
</script>

<style scoped>

</style>