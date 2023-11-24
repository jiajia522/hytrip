<template>
  <div class="search">
    <h2>search </h2>
    <p>{{ route.query.currentCity }}</p>
    <p></p>
    <p></p>
  </div>
</template>

<script setup>
import { useRouter,useRoute } from 'vue-router';
const route = useRoute()

</script>

<style lang="less" scoped>

</style>