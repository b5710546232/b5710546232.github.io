<template lang="html">
  <div>
    <div>
      welcome to my blog.
    </div>
    <div v-for="value in items">
    <BlogArticle  v-bind:articleName="value" ></BlogArticle>
  </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import config from '../../../articles/config.json'
import BlogArticle from './BlogArticle.vue'
var arr = []
for(let i =0;i<config.path.length;i++){
  let word = config.path[i]
  arr[i] = require("../../../articles/"+word)
}
export default {
  data () {
    return {
      items:[]
    }
  },
  computed: {},
  mounted () {
    this.items = config.path.map(url=>url.substr(0,url.length-3))
  },
  methods: {},
  components: {
    BlogArticle
  }
}
</script>
<style scoped>
</style>
