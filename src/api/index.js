import {
  post
} from '../utils/axios'
/**
 * 获取文章列表
 */
export const getArticleList = () => {
  return post("/article/list")
}
