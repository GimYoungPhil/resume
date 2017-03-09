<template>
  <div class="card">
    <div class="card-img-top" :style="'background-image: url(' + profile.img + ');'" alt="Card image cap"></div>
    <div class="card-block">
      <h4 class="card-title">{{ profile.name }}</h4>
      <p class="card-text">{{ profile.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['profile']
}
</script>
