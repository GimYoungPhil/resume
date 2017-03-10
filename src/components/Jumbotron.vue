<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">{{ info.title }}</h1>
      <p class="lead">{{ info.subTitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info']
}
</script>
