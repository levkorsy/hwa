<template>
<div class="column is-4 mt-1">
  <div class="card">
    <div class="card-content">
      <p class="title">
        {{ item.name }}, {{ item.country }}
      </p>
      <p class="subtitle">
        {{ item.Temperature.Metric.Value }} {{ item.Temperature.Metric.Unit }}°
      </p>
      <p class="subtitle">
        {{ item.WeatherText }}
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "FavoritesItemComponent",
  props:{
    item:{
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.mt-1{
  margin-top: 1rem;
}
</style>