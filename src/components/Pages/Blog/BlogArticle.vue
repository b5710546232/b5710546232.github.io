<template lang="html">
  <div>
    <div class="content">
      <div class = "title article"><h1><router-link v-bind:to="router" append >{{articleName}}</router-link></h1></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['articleName'],
  data () {
    return {
      router:""
    }
  },
  computed: {},
  mounted () {
    this.router = '/blog/'+this.articleName
  },
  methods: {},
  components: {}
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
.article{
  text-align: center;
}
</style>
