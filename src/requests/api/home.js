/**
 * 请求文件
*/
import { get, post } from '../index'

// get
export const gets = lotteryid => {
  return get(`/ceshi?id=${lotteryid}`)
}

// post
export const posts = anorder => {
  return post('/ceshi', anorder)
}
