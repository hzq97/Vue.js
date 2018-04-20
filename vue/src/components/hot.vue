<template>
    <div class="dir">
        <ul>
          <li :key="item.title" v-for="item in gsdata">
            <router-link :to='"/hot"+item.id'>
              <div class="content1">
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
              </div>
              <div class="img" v-if="item.img">
                <img v-lazy="item.img" alt="" />
              </div>
            </router-link>
          </li>
          <div class="load" @click="moreload">点击加载更多</div>
        </ul>
        <div>
          <router-view></router-view>
        </div>
    </div>

</template>
<script>
import { getgslist } from '@/getData/getData'
export default {
  data () {
    return {
      gsdata: [],
      page: 1
    }
  },
  methods: {
    moreload: function () {
      this.page++
      this.gsdata = this.gsdata.concat(getgslist(this.page).responseJSON.showapi_res_body.pagebean.contentlist)
    }
  },
  created () {
    this.gsdata = getgslist(this.page)
    this.gsdata = this.gsdata.responseJSON.showapi_res_body.pagebean.contentlist
  },
  watch: {
    $route: function () {
      document.querySelector('.dir>ul').style.display = 'block'
      document.querySelector('.top').style.textAlign = 'left'
      document.querySelector('.hide').style.display = 'none'
    }
  }
}
</script>
<style scoped lang="styl">
  ul
    width 100%
    background #fff
    li
      width 100%
      padding 0 0.625rem
      box-sizing border-box
      border-bottom 1px solid #ececec
      a
        display flex
        width 100%
        height 9.25rem
        padding 1.5625rem 0
        justify-content space-around
        align-items center
        box-sizing border-box
        .content1
          width 65%
          height 100%
          display flex
          flex-wrap wrap
          /* align-items space-around */
          h3
            width 100%
            color #333
            font-size 1.375rem
          p
            width 100%
            color #999
            font-size 1.0rem
            overflow hidden
            text-overflow ellipsis
            white-space  nowrap
        .img
          width 25%
          img
            width 100%
            height 100%

</style>
