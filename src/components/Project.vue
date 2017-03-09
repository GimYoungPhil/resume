<template>
  <div class="project">
    <div class="row py-4">
      <div class="col-md-3">
        <samp>{{ priod }}</samp>
      </div>
      <div class="col-md-7">
        <div class="d-flex justify-content-start">
          <div>
            <h4>
              {{ project.name }} <small class="text-muted">{{ project.description }}</small>
            </h4>
            <ul class="list-inline">
              <li class="list-inline-item" v-for="technic in project.technics">
                {{ technic }}
              </li>
            </ul>
          </div>
          <div class="ml-auto p-2">
            <h6 class="text-muted">{{ project.type }}</h6>
          </div>
        </div>
      </div>
      <div class="col-md-1 offset-md-1">
        <ul class="list-inline">
          <li class="list-inline-item" v-if="project.link">
            <a :href="project.link" target="_blank" class="card-link">Link</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
  computed: {
    priod: function() {
      return `${this.project.startDate} ~ ${this.project.endDate}`
    }
  }
}
</script>
