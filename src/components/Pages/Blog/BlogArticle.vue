<template lang="html">
  <div>
    <div class="my-articles">
      <div class="columns">
        <div class="column is-6">
          <div class = "title article"><router-link v-bind:to="router" append >{{articleName}}</router-link></div>
        </div>
        <div class="column is-6">
          <div class = "title article">{{articleDate}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['articleName','articleDate'],
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
.my-articles{
}
.article{
  text-align: center;
}
</style>
