<template>
   <div class="loading" v-if="isLoading" @click="loadingClick">
      <div class="bg">
        <img src="@/assets/img/home/full-screen-loading.gif" />
      </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useMainStore from '../../stores/modules/main';
const mainStore = useMainStore()
const { isLoading  } = storeToRefs(mainStore)
const loadingClick = () => {
  isLoading.value = false
}
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
 .bg { 
    width: 104px;
    height: 104px;
    background: url(@/assets/img/home/loading-bg.png) 0 0 /100% 100%; 
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 70px;
      height: 70px;
      margin-top: -10px;
    }
  }
}

</style>