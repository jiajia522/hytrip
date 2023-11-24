import { defineStore } from "pinia";
import { getCityAll } from "@/services";

const useCityStore = defineStore('city',{
  state: () => ({
    allcities: {},
    currentCity: {
      cityName:'广州'
    }
  }),
  actions: {
    async fetchAllCityiesData() {
      const res = await getCityAll()
      this.allcities = res.data
    }
  } 
})

export default useCityStore