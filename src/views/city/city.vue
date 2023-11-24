<template>
  <div class="city  ">
    <div class="top">
      <van-search 
        v-model="searchValue" 
        show-action 
        shape="round" 
        @cancel="onCancel"
        placeholder="城市/区域" />
      <van-tabs v-model:active="tabActive" color="#ff9854">
          <template v-for="(value,key,index) in allcities" :key="key">
            <van-tab :title="value.title" :name="key">
                <template v-for="(value,key,index) in allcities" :key="key">
                  <city-group v-show="tabActive === key" :group-data="value" ></city-group> 
                </template>
            </van-tab>
          </template>
      </van-tabs>
    </div>
   
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
// import { getCityAll }  from '@/services'
import useCityStore from '@/stores/modules/city.js'
import { storeToRefs } from 'pinia'
import CityGroup from './cpns/city-group.vue'
const router = useRouter()

// defineProps({
//  groupData:{
//     type:Object,
//     default: ()=>({}) 
//   }
// })
// 搜索栏相关
const searchValue = ref('');
const onCancel = () => {
  router.back()
}

const tabActive = ref()
// 请求城市的数据
// const allCity = ref({})
// getCityAll().then(res => {
//   allCity.value = res.data
// })
const cityStore = useCityStore()
cityStore.fetchAllCityiesData() //调用actions
const { allcities } = storeToRefs(cityStore)
const cuttentGroup = computed(() => allcities.value[tabActive.value])
</script>

<style lang="less" scoped>
  .top{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
  .van-tabs__wrap{
    position: relative;
    z-index: 111;
  }
</style>
