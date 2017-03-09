<template>
  <div>
    <jumbotron :info="info"></jumbotron>

    <div class="container my-5">
      <h1>About me</h1>
      <div class="row">
        <div class="col-md-4 mt-4">
          <profile :profile="profile"></profile>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <h1>Career</h1>
      <career v-for="(data, idx) in career" :career="data" :key="idx"></career>
    </div>

    <div class="container my-5">
      <h1>Projects</h1>
      <project v-for="(project, idx) in projects" :project="project" :key="idx"></project>
    </div>
  </div>
</template>

<script>
import Jumbotron from './Jumbotron.vue'
import Profile from './Profile.vue'
import Career from './Career.vue'
import Project from './Project.vue'
import meta from './profile.json'

export default {
  name: 'app',

  components: { Jumbotron, Profile, Career, Project },

  data () {
    return meta
  }
}
</script>
