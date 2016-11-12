<template lang="html">
<nav class="nav">

  <div class="nav-center">
    <!-- for center -->
    <a class="nav-item" href="#">
      ABOUT
    </a>
    <a class="nav-item" href="#">
      SKILL
    </a>
    <a class="nav-item" href="#">
      WORKS
    </a>
  </div>
  <!-- right -->

  </div>
</nav>
</template>

<script>
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
