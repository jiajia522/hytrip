import hyRequest from '../request'

export function getHotSuggests() {
  return hyRequest.get({
    url: '/home/hotSuggests'
  })
}
export function getCategories() {
  return hyRequest.get({
    url: '/home/categories'
  })
}

export function getHouseList(page) {
  return hyRequest.get({
    url: '/home/houselist',
    params: {
      page
    }
  })
}