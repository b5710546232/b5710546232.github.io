<template lang="html">
<div>
  <BlogArticles></BlogArticles>
</div>
</template>

<script>
import BlogArticles from './BlogArticles.vue'
export default {
  data () {
    return {
      items:[]
    }
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {
    BlogArticles
  }
}
</script>
<style scoped>
.content{
  margin-left: 3%;
  margin-right: 3%;
  margin-top:3%;
  padding:2%;
  border: 1px solid rgb(54, 118, 217);
  /*border-style: solid;*/
  border-radius: 5px;
}
</style>
