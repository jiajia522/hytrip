<template>
  <div class="tabbar">
    <!-- <div class="tab-bar-item"  @click='itemClick(index,item)' v-for="(item,index) in tabBarData" :key="item.text" :class="{active:currentIndex == index}">
    <img v-if='currentIndex !== index' :src="getAssetUrl(item.image)"/>
    <img v-else :src="getAssetUrl(item.imageActive)"/>
    <span>{{ item.text }}</span>
    </div> -->
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item,index) in tabBarData" :key="item.text" >
        <van-tabbar-item :to="item.path">
          <span>{{item.text}}</span>
          <template #icon>
            <img v-if='currentIndex !== index' :src="getAssetUrl(item.image)"/>
            <img v-else :src="getAssetUrl(item.imageActive)"/>
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
  import tabBarData from '@/assets/data/tabbar.js'
  import { getAssetUrl } from '@/utils/get_assets.js'
  import { useRouter ,useRoute } from 'vue-router'
  import { ref, watch } from 'vue';
  const currentIndex = ref(0)
  const router = useRouter()
  const route = useRoute()
  const itemClick = (index,item) => {
    currentIndex.value = index
    router.push(item.path)
  }

  watch(route,(newValue)=>{
    const index = tabBarData.findIndex(item=> item.path == newValue.path)
    if(index === -1 ) return 
    currentIndex.value = index
  })
</script>

<style lang="less" scoped>
// .tabbar{
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 50px;
//   display: flex;
  
//   .tab-bar-item{
//     flex: 1;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     &.active span {
//       color: var(--primary-color)
//    }
//   }
// }

</style>