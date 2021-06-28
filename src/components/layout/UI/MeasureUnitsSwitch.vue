<template>
  <div>
    <input type="radio" id="Metric" value="Metric" v-model="unit" @change="setMeasureUnit">
    <label for="Metric">Metric</label>
    <br>
    <input type="radio" id="two" value="Imperial" v-model="unit" @change="setMeasureUnit">
    <label for="two">Imperial</label>
    <br>
  </div>
</template>

<script>
export default {
  name: "MeasureUnitsSwitch",
  data(){
    return {
      unit: 'Imperial'
    }
  },
  methods:{
    setMeasureUnit(){
      this.$store.dispatch('main/changeMeasureUnit', this.unit)
    }
  }
}
</script>

<style scoped>

</style>