import dayjs from 'dayjs'
export function formatMonthDay(date, type = "MM月DD日") {

  return dayjs(date).format(type)
}

export function getDiffDays(startDate,endDate){
  return dayjs(endDate).diff(startDate,"day")
}