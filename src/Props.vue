<template>
  <div>
    我的内容是
    {{message}}
    <hr>
    数字n:{{n}}
    <button @click="fn" >+1</button>
  </div>
</template>

<script>
  export default {
    name: "Props",
    props:['message','fn','n'],
    data(){
      return{

      }
    }
  }
</script>

<style scoped>

</style>