<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houselist" :key="item.data.houseId">
        <!-- 组件 @click 取决于场景,只有一个根组件时候可以使用 -->
        <house-item-v9 v-if="item.discoveryContentType === 9" :item-data="item.data" @click="itemClick(item.data)"></house-item-v9>
        <house-item-v3 v-else-if="item.discoveryContentType === 3" :item-data="item.data"  @click="itemClick(item.data)"></house-item-v3>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import useHomeStore from '../../../stores/modules/home';
import houseItemV9 from '@/components/house-item-v9/house-item-v9.vue'
import houseItemV3 from '@/components/house-item-v3/house-item-v3.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const homeStore = useHomeStore()
const houselist = computed(()=> homeStore.houseList)
const itemClick = (item) => {
  const { houseId } = item
  router.push(`/detail/${item.houseId}`)
}
</script>

<style lang="less" scoped>

.content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>