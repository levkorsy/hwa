<template>
<div>
  <div>{{ item.name }},{{ item.country }} </div>
  <div>{{ item.Temperature.Metric.Value }} {{ item.Temperature.Metric.Unit }}°</div>
  <div>{{ item.WeatherText }}</div>
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

</style>