<template>
  <div class="career">
    <div class="row py-4">
      <div class="col-md-3">
        <samp>{{ priod }}</samp>
      </div>
      <div class="col-md-7">
        <div class="d-flex justify-content-start">
          <div>
            <h4>{{ career.name }}</h4>
            <p>{{ career.role }}</p>
          </div>
          <div class="ml-auto p-2">
            <h6 class="text-muted">{{ career.position }}</h6>
          </div>
        </div>
      </div>
      <div class="col-md-1 offset-md-1">
        <a :href="career.link" target="_blank" v-if="career.link">Link</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['career'],
  computed: {
    priod: function() {
      return `${this.career.startDate} ~ ${this.career.endDate}`
    }
  }
}
</script>
