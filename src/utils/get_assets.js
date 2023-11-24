export const getAssetUrl = (image) => {
  // 参数一。image相对路径
  return new URL('../assets/img/'+image,import.meta.url).href
}