import marked from 'marked'
import config from '../../../articles/config.json'
var arr = []
for(let i =0;i<config.path.length;i++){
  let word = config.path[i]
  arr[i] = require("../../../articles/"+word)
}

let contents = []
let CONTENT_PATH = config.path.map(url=>url.substr(0,url.length-3))
for(let i = 0; i<arr.length;i++){
  let component = {template: '<div>\
    <div class="content" v-bind:style="styleObject" >\
      <div id="content"></div></div></div>',
        data() {
          return{
            styleObject: {
              marginLeft: '3%',
              marginRight: '3%',
              marginTop:'3%',
              padding:'2%',
              border: '1px solid rgb(54, 118, 217)',
              borderRadius: '5px'
            }
          }
        },
        mounted: ()=> {
          console.log('mounted');
          document.getElementById('content').innerHTML =
          marked(arr[i]);
        },
        methods: {}
      }


      contents.push({component:component,path:CONTENT_PATH[i]})

}

    export default contents
