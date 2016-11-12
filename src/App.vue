<template>
  <div id="app">
    <SectionHeader></SectionHeader>
    <SectionBody></SectionBody>
    <Footer></Footer>
  </div>
</template>

<script>
import SectionHeader from './components/SectionHeader.vue'
import SectionBody from './components/SectionBody.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components : {
    SectionHeader,
    SectionBody,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
