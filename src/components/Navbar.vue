<template lang="html">
<nav class="nav">

  <div class="nav-center">
    <!-- for center -->
    <a class="nav-item" href="#" @click="scollTo('#about-me')" >
      ABOUT
    </a>
    <a class="nav-item" href="#my-skill" @click="scollTo('#my-skill')">
      SKILL
    </a>
    <a class="nav-item" href="#works" @click="scollTo('#works')" > WORKS </a>
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
      scrollToElement(e, {
    offset: 0,
    ease: 'inSine',
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
  font-size: 30px;
}
</style>
