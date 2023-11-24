<template>
  <div class="app">
    <RouterView></RouterView>
    <tabbar v-if="!route.meta.hideTabBar"></tabbar>
    <!-- <tabbar></tabbar> -->
    <loading></loading>
  </div>
</template>

<script setup>
import tabbar from '@/components/tabbar/tabbar.vue';
import { useRoute } from 'vue-router';
import loading from './components/loading/loading.vue';
// useRoute 拿到当前活跃用户对象
const route = useRoute()
</script>

<style lang="less" scoped>

</style>