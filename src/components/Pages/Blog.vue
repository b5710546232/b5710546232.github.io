<template lang="html">
  <div>
  <div class="content">
    <div id="my-content"></div>
  </div>
  </div>

</template>

<script>
import marked from 'marked'
import config from '../../articles/config.json'
var arr = []
// for(let i = 0 ; i<config.path.length;i++){
//   let p = config.path[i]
//   console.log(' p ',p)
//   arr[i] = require(String(p))
//   // arr[i] = require(p)
// }
let word = config.path[0]
console.log(word.toString());
let a = "/Users/Nattapat/Learning/Vue/t01/safe-vue/src/articles/reader00.md"
arr[0] = require("/Users/Nattapat/Learning/Vue/t01/safe-vue/src/articles"+word+".md")
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {


    this.renderer = new marked.Renderer()
    document.getElementById('my-content').innerHTML =
      marked(arr[0])
      console.log('hello')
      console.log(config)
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
