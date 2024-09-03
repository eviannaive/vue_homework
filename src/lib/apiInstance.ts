import axios from 'axios'

const apiInstance = axios.create({
  baseURL: 'https://vue3-tutorial-api.vercel.app/api',
  headers: { 'Content-Type': 'application/json' }
})

apiInstance.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default apiInstance

export const apiGetProducts = () => {
  console.log('pr')
  return apiInstance.get('/products')
}
export const apiGetBanner = () => {
  console.log('ba')
  return apiInstance.get('/banner')
}
