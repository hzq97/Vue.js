<template>
    <div class="details">
      <ul class="after">
        <li><a href="/index/all" @click="back">百思不得解</a></li>
        <li></li>
        <li>奇闻异事</li>
      </ul>
      <div class="desc">
        <p class="gscon" v-html="gscontent">{{ gscontent }}</p>
      </div>
    </div>
</template>
<script>
import { getDesc } from '@/getData/getData'
export default {
  data () {
    return {
      gsdata: [],
      gscontent: '',
      id: ''
    }
  },
  methods: {
    getcontent: function () {
      this.id = '/' + this.$route.params.type + '/' + this.$route.params.id
      this.gscontent = getDesc({
      }, this.id).responseJSON.showapi_res_body.text.slice(13)
    },
    back: function () {
      this.$router.back()
    }
  },
  created () {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    document.querySelector('.top').style.textAlign = 'center'
    document.querySelector('.hide').style.display = 'block'
    document.querySelector('.dir>ul').style.display = 'none'
    this.getcontent()
  },
  watch: {
    $route: function () {
      this.getcontent()
    }
  }
}
</script>
<style lang="styl">
  .details
    position absolute
    top 2.75rem
    left 0
    width 100%
    ul
      width 100%
      border-bottom 1px solid #dfdfdf
      background-color #f8f7f7
      li
        float left
        padding 0 0.625rem
        line-height 2.625rem
        font-size 1.0rem
        color #1a1a1a
        a
         padding 0.25rem
         font-size 1.0rem
         color #1a1a1a
         font-weight 400
      li:nth-of-type(2)
        background url(../../assets/imgs/nav.png) no-repeat
        background-position 0 -3.625rem
        background-size 14.1875rem auto
        width 0.875rem
        height 2.5625rem
        padding 0
    .desc
      background #fff
      .gscon
        font-size 1.2rem
        line-height 1.8rem
        margin 0.4rem 0.133rem 0 0.333rem
</style>
