<template>
  <div class="detail top-page" ref="detailRef">
    <tab-control 
      :titles='names' 
      v-if="showTabControl" 
      class="tabs" 
      @tabItemClick="tabItemClick"
    >
    </tab-control>
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
      <detail-infos name="描述" :ref="getSectionRef" :top-infos="mainPart.topModule"/>
      <detail-facility name="设施" :ref="getSectionRef" :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <detail-landlord name="房东" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule"/>
      <detail-comment name="评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule"/>
      <detail-notice name="须知" :ref="getSectionRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules"/>
      <detail-map name="周边" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule"/>
      <detail-intro :price-intro="mainPart.introductionModule"/>
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">弘源旅途, 永无止境!</div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { getDetailInfos } from '@/services/modules/detail.js'
import { computed, onMounted, ref } from 'vue';

import tabControl from '../../components/tab-control/tab-control.vue';
import DetailSwipe from "./cpns/detail_01-swipe.vue"
import DetailInfos from "./cpns/detail_02-infos.vue"
import DetailFacility from "./cpns/detail_03-facility.vue"
import DetailLandlord from "./cpns/detail_04-landlord.vue"
import DetailComment from "./cpns/detail_05-comment.vue"
import DetailNotice from "./cpns/detail_06-notice.vue"
import DetailMap from "./cpns/detail_07-map.vue"
import DetailIntro from "./cpns/detail_08-intro.vue"
import useScroll from '@/hooks/useScroll.js'

const route = useRoute()
const onClickLeft = () => history.back();
const houseId = route.params.houseId
const detailInfos = ref({})
getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data
})
const mainPart = computed(() => detailInfos.value.mainPart)

const titles = ref([1,2,3,4])
// 此时是div元素在滚动
const detailRef = ref()
console.log(detailRef)
const { isReachBottom ,scrollTop} = useScroll(detailRef)
const showTabControl = computed(()=>{
   return scrollTop.value>200
  }
)
// const landlordRef = ref()
// landlord.value 拿到的是组件对象 .el拿到的是组件对象的根元素
// console.log(landlordRef.value)

// const sectionEls = []
// const getSectionRef = (value) => {
//   console.log(value.$el)
//   sectionEls.push(value.$el)
// }
// const tabItemClick = (index) => {
//   console.log(index)
//   detailRef.value.scrollTo({
//     top: sectionEls[index].offsetTop - 44,
//     behavior: 'smooth'
//   })
// } 

const sectionEls = ref({})

// console.log(names)
const getSectionRef = (item) => {
  console.log(item)
  console.log(item.$el)
  const name = item.$el.getAttribute('name')
  sectionEls.value[name] = item.$el
  
}
const names = computed( ()=>{
  return Object.keys(sectionEls.value)
})
const tabItemClick = (index) => {
  const key = Object.keys(sectionEls.value)[index]
  const el = sectionEls.value[key]
  detailRef.value.scrollTo({
    top: el.offsetTop - 44,
    behavior: 'smooth'
  })
} 
</script>

<style lang="less" scoped>
.tabs {
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>