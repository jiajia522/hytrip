// 回调方式
// import { onActivated, onDeactivated, onMounted,onUnmounted, ref } from 'vue';
// export default function useScroll (callback)  {
//   const scrollListenerHandler = () => {
//     const srollHeight = document.documentElement.scrollHeight //可滚动高度
//     const srollTop = document.documentElement.scrollTop //向上滚动高度
//     const clientHeight = document.documentElement.clientHeight //向上滚动高度
//     if(srollHeight <= srollTop + clientHeight){
//       // homeStore.fetchHouseList()
//       // 滚动到底部了
//       callback&&callback()
//     }
//   }
//     onMounted(()=> {
//       window.addEventListener("scroll",scrollListenerHandler)
//     })
//     onActivated(()=> {
//       window.addEventListener("scroll",scrollListenerHandler)
//     })
//     onUnmounted(()=> {
//       window.removeEventListener('scroll',scrollListenerHandler)
//     })
//     onDeactivated(()=> {
//       window.removeEventListener('scroll',scrollListenerHandler)
//     })
// }
// 传参方式
// 节流
import { onActivated, onDeactivated, onMounted,onUnmounted, ref } from 'vue';
import { throttle } from 'underscore';
// 传入元素的ref 。
export default function useScroll (elRef)  {
  let el = window
  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  const scrollListenerHandler = throttle(() => {
    if(el === window) {
      scrollHeight.value = document.documentElement.scrollHeight //可滚动高度
      scrollTop.value = document.documentElement.scrollTop //向上滚动高度
      clientHeight.value = document.documentElement.clientHeight //向上滚动高度
    } else {
      clientHeight.value = el.clientHeight //向上滚动高度
      scrollHeight.value = el.scrollHeight //可滚动高度
      scrollTop.value = el.scrollTop //向上滚动高度
    }
   
    if(scrollHeight.value <= scrollTop.value + clientHeight.value){
      // 滚动到底部了
      isReachBottom.value = true
    }
  },100)
  onMounted(()=> {
    if(elRef){
      el = elRef.value
    }
    el.addEventListener("scroll",scrollListenerHandler)
  })
  onActivated(()=> {
    if(elRef){
      el = elRef.value
    }
    el.addEventListener("scroll",scrollListenerHandler)
  })
  onUnmounted(()=> {
    if(elRef){
      el = elRef.value
    }
    el.removeEventListener('scroll',scrollListenerHandler)
  })
  onDeactivated(()=> {
    el.removeEventListener('scroll',scrollListenerHandler)
  })
  return { isReachBottom , scrollTop , scrollHeight , clientHeight}
}
