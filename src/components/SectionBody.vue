<template lang="html">
  <div>
    <!-- about-me -->
    <section class="section is-medium is-mobile">
      <div class="container">
        <div class="heading">
          <h1 class="title">About me</h1>
          <h3 class="subtitle"></h3>
        </div>
        <br>
        <div class="content is-large">
          <p>I'm Software and Knowledge Engeering Student @ Kasetsart Universty.</p>
          <p>Interested : </p>
          <ul>
            <li>Web application development</li>
            <li>Mobile Development</li>
            <li>Game development</li>
          </ul>
        </div>
      </div>
    </section>
    <!-- Skill -->
    <section class="section is-medium" id="my-skill">
      <div class="container">
        <div class="heading">
          <h1 class="title">My Skill</h1>
          <br>
          <div class="content is-large">

            <ul>
              Programming Skill
              <ul>
                <li>Software Design Pattern</li>
                <li>Object Oriented Programming</li>
              </ul>
              Experienced Programming Langugages
              <ul>
                <li>Java</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>SQL</li>
                <li>R</li>
                <li>C#</li>
                <li>Prolog</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="section is-medium works" id="works">
      <div class="container">
        <div class="heading">
          <h1 class="title">My Works</h1>
        </div>
        <br>
        <div class="content is-large">
          <ul>
            Web application
            <ul>
              <li>Pokemon WeakDector</li>
              <li> Tabein Community who love car : Database project </li>
            </ul>
            Android application
            <ul>
              <li>MINI-TELLO</li>
              <li>Cookie :: Rising</li>
              <li>SOFTSPET : VIRTUALPET GAME</li>
              <li>SNAKE-LADER</li>
            </ul>
            Game
            <ul>
              <li>Heaven Drill Runner</li>
            </ul>
          </ul>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>
<style scoped>
.title{
  font-size: 42px;
}
.section{
  /*padding-top:  5%;*/
  /*margin-bottom: -5%;*/
}
.body-content{
  font-size: 30px;
}
.container.heading{
  margin-top: 10%;
}
</style>
