<template lang="html">
  <section class="hero is-info">
  <div class="hero-head">
    <div class="title my-title">
      Nattapat Sukpootanan
    </div>
  </div>
  <div class="hero-body">
  <div class="nav-center">
      <a class="nav-item" href="#">
        <div class="tiles my-icon">
          <div class="icon-wrapper">
            <i class="fa fa-facebook-square fa-5x">
          </div>
          <span>facebook</span>
        </div>
      </a>
      <a class="nav-item" href="https://github.com/b5710546232">
        <div class="tiles my-icon">
          <div class="icon-wrapper">
            <i class="fa fa-github-alt fa-5x"></i>
          </div>
          <span>github</span>
        </div>
      </a>
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
.my-icon{
  text-align: center;
}
.my-title{
 text-align: center;
}
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
