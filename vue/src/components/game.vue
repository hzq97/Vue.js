<template>
    <div>
        <div class="new-name">
            <h3 class="game-title">新游推荐</h3>
            <div class="game-list">
                <ul>
                    <li :key="item.gamename" v-for="item in gameList">
                        <a :href="item.gameurl">
                            <img :src="item.iconurl" alt="" />
                            <span>{{ item.gamename }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="gamed">
            <h3 class="game-title">最近玩过</h3>
            <div class="game-list">
                <ul></ul>
            </div>
        </div>
        <div class="hot-game">
            <h3 class="game-title">热门推荐</h3>
            <div class="hot-game-list">
                <ul>
                    <li class="after" :key="items.longname" v-for="items in hotgamelist">
                        <div class="hot-img">
                            <a :href="items.gameurl">
                              <img :src="items.mainurl" alt="" />
                              <span>{{ items.longname }}</span>
                            </a>
                        </div>
                        <div class="hot-msg">
                            <div class="share">
                                <span>分享 | </span>
                                <span>{{ items.wxcount }}</span>
                            </div>
                            <div class="num">
                                <span>{{ items.viewcount }}</span>在玩
                                <a :href="items.gameurl" :alt="items.gamename">开始</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="load" @click="moreload">点击加载更多</div>
    </div>
</template>

<script>
import { getGameList } from '@/getData/getData'
export default {
  data () {
    return {
      gameList: [],
      hotgamelist: [],
      index: 1
    }
  },
  methods: {
    moreload: function () {
      this.index += 1
      this.hotgamelist = this.hotgamelist.concat(getGameList(this.index, 2, 10).responseJSON.list)
      console.log(this.hotgamelist)
    }
  },
  created () {
    this.gameList = getGameList(1, 1, 8).responseJSON.list
    this.hotgamelist = getGameList(this.index, 2, 9).responseJSON.list
  }
}
</script>

<style lang="styl">
  .game-title
    width 100%
    height 2.0rem
    background #f9f9f9f
    color #7f7f7f
    padding-left 0.625rem
    font-size 0.75rem
    line-height 2.0rem
    font-weight 400
    border-bottom 1px solid #bdbdbd
    box-sizing border-box
  .game-list
    padding 0 0.3125rem
    box-sizing border-box
    border-bottom: 1px solid #dbdbdb
    background #fff
    ul
      display flex
      justify-content space-around
      align-items center
      flex-wrap wrap
      li
        width 25%
        margin 0.625rem 0
        a
          display flex
          width 100%
          height 100%
          justify-content center
          align-items center
          flex-wrap wrap
          img
            width 60px
            height 60px
          span
            width 100%
            text-align center
            font-size 0.75rem
            color #000
  .hot-game-list
    ul
      li
        padding 0.625rem
        background #fff
        margin-bottom 0.3125rem
        .hot-img
          position relative
          width 100%
          a
            display block
            width 100%
            height 100%
            img
              width 100%
            span
              position absolute
              left 0
              bottom 0
              display block
              width 100%
              height 1.875rem
              background rgba(0,0,0,.7)
              color #fff
              line-height 1.875rem
              font-size 0.875rem
              padding 0 0.375rem
              box-sizing border-box
              overflow hidden
              text-flow ellipsis
              white-space nowrap
        .hot-msg
          padding-top 0.5rem
          .share
            float left
            margin-top 4px
            span:first-of-type
              font-size  0.75rem
              color #818181
              margin-top: 0.125rem
            span:last-of-type
              font-size 0.875rem
              margin: 0.0625rem 0 0 0.25rem
          .num
            float right
            span
              color #eb0035
            a
              display inline-block
              width 5.0rem
              height 1.75rem
              line-height 1.75rem
              text-align center
              border 1px solid #c1c1c1
              border-radius 6px
              color #515151
              font-size 0.875rem
              background: linear-gradient(to bottom,#fff 0,#eaeaea 100%)
  .load{
    width: 100%;
    height: 2.8125rem;
    line-height: 2.8125rem;
    text-align: center;
    font-size: 0.875rem;
    background: #ececec;
    color: #9a9a9a;
    /* border-top: 1px solid #dbdbdb; */
  }
</style>
