<template>
  <div id="app">
    <div id="top-fixed">
        <div class="top center">
          <a class="show hide" @click="back"> &lt; </a>
          <a href=""></a>
        </div>
        <ul>
            <li><router-link to='/index/all'>全部</router-link></li>
            <li><router-link to='/index/41'>视频</router-link></li>
            <li><router-link to='/index/10'>图片</router-link></li>
            <li><router-link to='/index/29'>段子</router-link></li>
            <li><router-link to='/game'>游戏</router-link></li>
            <li><router-link to='/hot'>故事</router-link></li>
        </ul>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import './assets/js/rem.js'
import './assets/css/App.styl'
export default {
  name: 'App',
  data () {
    return {
      // hide:true
    }
  },
  methods: {
    back: function () {
      this.$router.back()
    }
  },
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
}
</script>

<style lang="styl">
  @import './assets/css/reset.css';
</style>
