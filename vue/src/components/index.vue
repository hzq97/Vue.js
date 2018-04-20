<template>
    <div id="index_content">
        <ul class="list">
          <li class="item" :key="item.video_uri" v-for="item in topics">
            <div class="content">
              <div class="head after">
                <div class="img">
                  <img v-lazy="item.profile_image" alt="" />
                </div>
                <div class="name">{{ item.name }}</div>
              </div>
              <p class="title" v-html=
              "item.text">{{ item.text }}</p>
              <div class="video" v-if="item.video_uri">
                <video controls playsinline airplay="true" preload="none" :poster="item.poster">
                  <source :src="item.video_uri" type="video/mp4"/>
                </video>
                <!-- <div class="bf" v-if="play"></div> -->
              </div>
              <div v-if="item.image0" class="content_img">
                <img v-lazy="item.image0" alt="" />
              </div>
              <div class="item_tool">
                <ul>
                  <li>
                    <a class="center">
                      <i></i>
                      <span>{{ item.love }}</span>
                    </a>
                  </li>
                  <li>
                    <a class="center">
                      <i></i>
                      <span>{{ item.hate }}</span>
                    </a>
                  </li>
                  <li>
                    <a class="center">
                      <i></i>
                      <span>123</span>
                    </a>
                  </li>
                  <li>
                    <a class="center">
                      <i></i>
                      <span>123</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <div class="load" @click="moreload" v-if="jz">点击加载更多</div>
    </div>
</template>

<script>
import { getDataList } from '@/getData/getData'
import '@/assets/css/index.styl'
export default {
  name: 'index',
  data () {
    return {
      topics: [],
      page: 1,
      type: null,
      jz: true
    }
  },
  methods: {
    Replace: function (str1) {
      str1 = str1.replace(/mvideo/, 'wimg')
      str1 = str1.replace(/video/, 'picture')
      str1 = str1.replace(/c\.mp4/, 'd.jpg')
      return str1
    },
    getList: function () {
      this.type = this.$route.params.type
      if (this.type !== '10' && this.type !== '41' && this.type !== '29') {
        this.type = null
      }
      getDataList({type: this.type, page: this.page}).then((data) => {
        console.log(data)
        var str = data.data.showapi_res_body.pagebean.contentlist
        var str1 = ''
        for (var i = 0; i < str.length; i++) {
          if (str[i].video_uri) {
            str1 = str[i].video_uri
            str[i].poster = this.Replace(str1)
          }
        }
        if (str.length === 0) {
          this.jz = false
        }
        this.topics = this.topics.concat(str)
      })
    },
    moreload: function () {
      this.page += 1
      this.getList()
    }
  },
  // 生命周期的钩子函数
  created () {
    this.page = 1
    this.topics = []
    this.jz = true
    this.getList()
  },
  watch: {
    $route: function () {
      this.page = 1
      this.topics = []
      this.getList()
    }
  }
}
</script>

<style>
  .item{
    border-bottom: 10px solid #ececec;
  }
  #index_content{
    width: 100%;
  }
</style>
