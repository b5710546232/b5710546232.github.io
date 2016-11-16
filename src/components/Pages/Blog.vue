<template lang="html">
  <div>
  <div class="content">
    <div id="my-content"></div>
  </div>
  </div>

</template>

<script>
import marked from 'marked'
var file = require('level-filesystem');
import article from '../../articles/reader.md'
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {
    this.renderer = new marked.Renderer()
    document.getElementById('my-content').innerHTML =
      marked(article)
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
</style>
