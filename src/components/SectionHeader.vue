<template lang="html">
  <section class="hero is-info">
  <div class="hero-head">
    <div class="title">
      Nattapat Sukpootanan
    </div>
  </div>
  <div class="hero-body">
  <div class="nav-center">
      <a class="nav-item" href="#"> <i class="fa fa-facebook-square fa-3x"> </a>
      <a class="nav-item" href="https://github.com/b5710546232"> <i class="fa fa-github-alt fa-3x"></i> </a>
</div>
  <!-- </nav> -->
  </div>
  </div>
    <Navbar></Navbar>
    </div>
  </div>
</section>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {
    Navbar
  }
}
</script>

<style scoped>
.title{
  font-size: 42px;
}
.hero-head{
  padding-top: 2%;
  padding-bottom: 1%;
}
.hero-body{
  padding: 0%
}
.container{

}
</style>
