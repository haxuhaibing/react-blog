 //获取用户信息
 const userInfoAction = (data) => {
     return {
         type: "send_action",
         userInfo:data
     }
 }
//登录弹窗状态
 const isLoginAction = (data) => {
     return {
         type: "is_login_action",
         isLogin: data
     }
 }
 module.exports={
     userInfoAction,
     isLoginAction
 }