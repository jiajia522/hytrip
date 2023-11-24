<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" />
    </div>
    <home-search-box ></home-search-box>
    <home-categories></home-categories>
    <home-content></home-content>
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar />
    </div>
  </div>
</template>

<script setup>
import { onActivated, onDeactivated, onMounted,onUnmounted, ref, watch ,computed} from 'vue';
import homeNavBar from './cpns/home-nav-bar.vue';
import homeSearchBox from './cpns/home-search-box.vue';
import homeCategories from './cpns/home-categories.vue';
import homeContent from './cpns/homeContent.vue';
import searchBar from '../../components/search-bar/search-bar.vue';
// import { getHotSuggests } from '@/services/modules/home.js'
import useHomeStore from '@/stores/modules/home.js'
import useScroll from '@/hooks/useScroll.js'

// const hotSuggests = ref([])
// getHotSuggests().then(res => {
//   hotSuggests.value = res.data
// })

// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
homeStore.fetchCategories()
homeStore.fetchHouseList()


// 监听window的滚动
// 1.离开页面时候需要移除监听
// 2.如果别的页面也需要监听，需要编写重复的代码 --  抽取
// keep-alive 组件存活
// 1.回调方式 callback
// useScroll(()=>{
//   homeStore.fetchHouseList()
// })
// 2.hooks 控制变量形式
const { isReachBottom ,scrollTop} = useScroll()
watch(isReachBottom,(newValue,oldValue)=>{
  if(newValue){
    homeStore.fetchHouseList().then(()=>{
      isReachBottom.value = false
    })
  }
})
// const isShowSearchBar = ref(false)
// watch(scrollTop,(newValue,oldValue) => {
//   isShowSearchBar.value = newValue > 100
// })
const isShowSearchBar = computed(()=>{
  return scrollTop.value>100 
})
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
.home {
  // height: 100vh;
  // overflow-y: auto;
  // box-sizing: border-box;
  padding-bottom: 60px;
}
.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>