import marked from 'marked'
import config from '../../../articles/config.json'
var arr = []
for(let i =0;i<config.length;i++){
  let word = config[i].path
  arr[i] = require("../../../articles/"+word)
}

let contents = []
for(let i = 0; i<arr.length;i++){
  let component = {template: '<div>\
    <div class="content" v-bind:style="styleObject" >\
      <div id="content"></div></div>\
        <div v-bind:style="articleFooter">\
            <a  href="#"> <router-link to="/blog">Back to main...</router-link> </a>\
          </div>\
        </div>\
        ',
        data() {
          return{
            styleObject: {
              marginLeft: '3%',
              marginRight: '3%',
              marginTop:'3%',
              padding:'2%',
              border: '1px solid rgb(54, 118, 217)',
              borderRadius: '5px'
            },
            articleFooter:{
              marginLeft: '3%',
              textAlign: 'center',
              marginRight: '3%',
              marginTop:'3%',
              padding:'2%',
              fontSize:'20px'
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


      contents.push({component:component,path:config[i].path,title:config[i].title,date:config[i].date})

    }

    export default contents
