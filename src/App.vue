<template>
  <div id="app">
    <div class="section-header">
    <SectionHeader></SectionHeader>
    <Navbar></Navbar>
    </div>
    <div class="section-body">
    <SectionBody></SectionBody>
    </div>
    <SectionFooter></SectionFooter>
  </div>
</template>

<script>
import SectionHeader from './components/SectionHeader.vue'
import SectionBody from './components/SectionBody.vue'
import SectionFooter from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
export default {
  name: 'app',
  data () {
    return {
      renderer : null
    }
  },
  mounted(){},
  components : {
    SectionHeader,
    SectionBody,
    SectionFooter,
    Navbar
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
h1, h2 {
  font-weight: normal;
}
.section-header{
  position: relative;
}
.section-body{
  position: relative;
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
