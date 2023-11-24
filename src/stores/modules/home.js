import { defineStore } from "pinia";
import { getHotSuggests ,getCategories ,getHouseList} from "@/services";
const useHomeStore = defineStore('home',{
  state:() =>({
    hotSuggests:[],
    categories: [],
    houseList: [],
    currentPage: 1
  }),
  actions:{
    async fetchHotSuggests() {
     const res = await getHotSuggests()
     this.hotSuggests = res.data
    },
    async fetchCategories() {
      const res = await getCategories()
      this.categories = res.data
    },
    async fetchHouseList() {
      const res = await getHouseList(this.currentPage)
      this.houseList = this.houseList.concat(res.data)
      // this.houseList.push(...res.data)
      this.currentPage++;
    }
  }
})
export default useHomeStore