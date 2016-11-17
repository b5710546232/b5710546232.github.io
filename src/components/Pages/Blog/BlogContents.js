import marked from 'marked'
import config  from '../../../articles/config.json'
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});
//
export let articles = []
for(let i =0;i<config.path.length;i++){
  let file = config.path[i]
  articles[i] = require("../../../articles/"+file)
}

export default  articles
