<template lang="html">
  <nav class="nav">
    <div class="nav-center">
      <!-- for center -->
      <a class="nav-item" href="#" @click="scollTo('#about-me')" > <router-link to="/">ABOUT</router-link></a>
      <a class="nav-item" href="#my-skill" @click="scollTo('#my-skill')"> <router-link to="/">SKILL</router-link> </a>
      <a class="nav-item" href="#works" @click="scollTo('#works')" > <router-link to="/">WORKS</router-link> </a>
      <a class="nav-item" href="" @click="scollTo('#works')" ><router-link to="/blog">BLOG</router-link></a>
    </div>
    <!-- right -->
  </div>

</nav>
</template>

<script>
import scrollToElement from 'scroll-to-element'

export default {
  name:"navbar",
  data () {
    return {
      isToggleActive:false,
      isTap:false
    }
  },
  computed: {},
  mounted () {},
  methods: {
    scollTo(e){
      event.preventDefault()
      scrollToElement(e, {
        offset: 0,
        ease: 'outBack',
        duration: 500
      })
    },
    toggle(){
      this.isToggleActive =! this.isToggleActive
      console.log('click');
    },
  },
  components: {}
}

</script>

<style scoped>

.nav-left{
}
a.nav-item{
  font-size: 42px;
}
</style>
