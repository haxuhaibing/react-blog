import {
    post
} from '../utils/axios'
/**
 * 获取文章列表
 */
export const getUserInfo = (data) => {
    return post("/user/login", data)
}
