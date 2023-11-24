import { defineStore } from "pinia";
const nowDate = new Date()
let newDate = new Date()
newDate = new Date(newDate.setDate(nowDate.getDate()+1))

const useMainStore = defineStore('main',{
  state:()=>({
    startDate: nowDate,
    endDate: newDate,
    isLoading: false
  })
})
export default useMainStore