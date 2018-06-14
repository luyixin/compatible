<template>
  <div class="test-app">
    hahaah
    <p>{{ testData.id }}</p>
    <i class="iconfont icon-duorenyonghu"></i>
    <img :src="img"/>
  </div>
</template>
<script>
// import api from '@/config/api'
import img from '@/assets/images/test.png'

export default {
  data () {
    return {
      img,
      testData: ''
    }
  },
  mounted () {
    // api.postTest().then(res => {
    //   this.testData = res.result
    // })
  }
}
</script>
<style lang="scss" scoped>
  .test-app {
    background-color: red;
  }
</style>
