<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    }
  },
  created() {
    this.$store.dispatch('getAiports');
    this.$store.dispatch('getFlights');

  }
}
</script>
<style>
  .app {
    background-color: #49026E !important;
  }
</style>
