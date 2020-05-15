import axios from 'axios'
import qs from 'qs'
var isDev = process.env.NODE_ENV === 'production'
if (isDev) {
  axios.defaults.baseURL = 'http://api.xuhaibing.com/v1'
} else {
  axios.defaults.baseURL = 'http://api.xuhaibing.io/v1'
}
// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
//axiso
axios.interceptors.request.use(
  config => {
    //let token = store.state.user.userInfo.token || '';
    let token = '';
    if (config.method === 'get') {
      config.params.token = token
    }
    if (config.method === 'post') {
      config.data['token'] = token
    }
    if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8' || config.headers['Content-Type'] === 'application/json;charset=utf-8') {
      config.data = qs.stringify(config.data);
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  });

export default axios;

/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}, config) {
  return new Promise((resolve, reject) => {
    axios.post(url, data, config)
      .then(response => {
        resolve(response.data.data);
      }, err => {
        reject(err);
      })
  })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
  })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
  })
}
