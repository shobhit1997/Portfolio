<template>
  <div id="app">
    <div style="display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    flex-direction: column;
    background-color:black;
    color:white">
    <h1>SHOBHIT AGARWAL</h1>
    <h3>MEVN Stack and Android Developer</h3>
    </div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li v-on:click="setActive(0)" :class="{ active:about }"><router-link to="/">About</router-link></li>
          <li v-on:click="setActive(1)" :class="{ active:education }"><router-link to="/education">Education</router-link></li>
          <li v-on:click="setActive(2)" :class="{ active:experience }"><router-link to="/experience">Experience</router-link></li>
          <li v-on:click="setActive(3)" :class="{active:skills}"><router-link to="/skills">Skills</router-link></li>
          <li v-on:click="setActive(4)" :class="{active:project}"><router-link to="/project">Projects</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view/>
     <div style="display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    flex-direction: column;
    background-color:black;
    color:white">
    <h3>Contact</h3>
    <ul style="list-style:none;padding:0px;">
        <li style="display: inline;padding:5px;"><a href="https://www.facebook.com/shobhitagarwal56"><i class="fa fa-facebook-official" aria-hidden="true" style="font-size:36px;color:grey"></i></a></li>
        <li style="display: inline;padding:5px;"><a href="https://github.com/shobhit1997"><i class="fa fa-github" aria-hidden="true" style="font-size:36px;color:grey"></i></a></li>
        <li style="display: inline;padding:5px;"><a href="https://www.linkedin.com/in/shobhit1997/"><i class="fa fa-linkedin" aria-hidden="true" style="font-size:36px;color:grey"></i></a></li>
        <li style="display: inline;padding:5px;"><a href="mailto:shobhitagarwal756@gmail.com"><i class="fa fa-envelope" aria-hidden="true" style="font-size:36px;color:grey"></i></a></li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      about: true,
      education: false,
      experience: false,
      skills: false,
      project: false
    }
  },
  methods: {
    setActive (i) {
      if (i === 0) {
        this.about = true
        this.education = false
        this.experience = false
        this.skills = false
        this.project = false
      } else if (i === 1) {
        this.about = false
        this.education = true
        this.experience = false
        this.skills = false
        this.project = false
      } else if (i === 2) {
        this.about = false
        this.education = false
        this.experience = true
        this.skills = false
        this.project = false
      } else if (i === 3) {
        this.about = false
        this.education = false
        this.experience = false
        this.skills = true
        this.project = false
      } else if (i === 4) {
        this.about = false
        this.education = false
        this.experience = false
        this.skills = false
        this.project = true
      }
    }
  },
  mounted () {
    if (window.location.pathname === '/project') {
      this.setActive(4)
    } else if (window.location.pathname === '/skills') {
      this.setActive(3)
    } else if (window.location.pathname === '/education') {
      this.setActive(1)
    } else if (window.location.pathname === '/experience') {
      this.setActive(2)
    }
  }

}
</script>
