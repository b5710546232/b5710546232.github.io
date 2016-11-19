<template lang="html">
<div class="container">
  <div class="header">
      Welcome to my Blog...
  </div>
  <div class="my-articles">
    <div v-for="value in items">
    <BlogArticle  v-bind:articleName="value.title"  v-bind:articleDate="value.date"></BlogArticle>
  </div>
    </div>
  </div>
</div>
</template>

<script>
import marked from 'marked'
import contents from './BlogContents'
import BlogArticle from './BlogArticle.vue'
export default {
  data () {
    return {
      items:[]
    }
  },
  computed: {},
  mounted () {
    // console.log(config);
    this.items = contents
    console.log(this.items);
    // console.log(this.items);
  },
  methods: {},
  components: {
    BlogArticle
  }
}
</script>
<style scoped>
.header{
  margin-left: 3%;
  margin-right: 3%;
  margin-top:3%;
  padding:2%;
  font-size: 42px

}
.my-articles{
  margin-left: 3%;
  margin-right: 3%;
  margin-top:3%;
  padding:2%;
  border: 1px solid rgb(54, 118, 217);
  /*border-style: solid;*/
  border-radius: 5px;
}
</style>
