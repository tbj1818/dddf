<template>
  <!-- return top -->
  <view type="default" class="backTop" @click="backTop" v-show="btnFlag">
    <i  class="van-icon van-icon-arrow-up" style="font-size: 26px;"><!----></i>
  </view>
</template>

<script>
export default {
  name: 'ReturnTop',
  // props: ["title","isleftarrow"],
  data() {
    return {
      btnFlag: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    backTop() {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 60) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* return top */
.backTop {width:45px; height:45px;border:0;box-shadow: 0.05333rem 0.05333rem 0.13333rem #ccc; text-align: center; position: fixed; justify-content:center; align-items:center; right: 10px; bottom:80px; border-radius: 50%; display: flex; background: #FFF;}
.backTop .van-icon-arrow-up{vertical-align:middle; font-size: .4rem;}
.van-button{line-height: auto !important;}
</style>
