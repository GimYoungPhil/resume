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
      <h1>Personal Projects</h1>
      <project v-for="(project, idx) in pProjects" :project="project" :key="idx"></project>
    </div>

    <div class="container my-5">
      <h1>Career</h1>
      <career v-for="(data, idx) in career" :career="data" :key="idx"></career>
    </div>
  </div>
</template>

<script>
import Jumbotron from './Jumbotron.vue'
import Profile from './Profile.vue'
import Career from './Career.vue'
import Project from './Project.vue'

import _ from 'underscore'
import meta from './meta.json'

export default {
  name: 'app',

  components: { Jumbotron, Profile, Career, Project },

  data() {
    return {
      info: meta.info,
      profile: meta.profile,
      career: meta.career,
      projects: meta.projects
    }
  },

  computed: {
    pProjects() {
      return _.filter(this.projects, p => p.type === 'Personal')
    }
  }
}
</script>
