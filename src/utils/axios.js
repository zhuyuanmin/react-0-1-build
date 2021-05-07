import axios from 'axios'

const service = axios.create({
  baseURL: '/',
  timeout: 15000,
})

service.interceptors.request.use(function(config) {
  return config
})

service.interceptors.response.use(function(config) {
  return config
})

export default service
