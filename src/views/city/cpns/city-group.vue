<template>
  <div class="content">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="#"  />
      <div class="list">
        <template v-for="(item,index) in groupData?.hotCities"> 
          <div class="city" @click="cityClick(item)">{{  item.cityName }}</div>
        </template>
      </div>
      <template v-for="(item,index) in groupData?.cities" :key="item.group">
        <van-index-anchor :index="item.group" />
        <template v-for="(iten,indey) in item.cities" :key="indey">
          <van-cell :title="iten.cityName" @click="cityClick(iten)"/>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city.js'
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

const indexList = computed(()=>{
  const list = props.groupData.cities.map(item => item.group)
  list.unshift('#')
  return list
})
const router = useRouter()
const cityStore = useCityStore()
const cityClick = (item) => {
  console.log(cityClick)
  // 发送事件 emits 
  cityStore.currentCity = item
  router.back()
}



</script>

<style lang="less" scoped>
.content{
  
    height: calc(100vh - 98px);
    overflow-y: scroll;
    // margin-top: 98px;  
}
.list{
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  padding-right: 25px;
  justify-content: space-around;

  .city {
    width: 70px;
    height: 28px;
    border-radius: 8px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color:#fff4ec;
    margin: 5px;
  }
}
</style>