import axios, {
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosError,
} from 'axios'

export function configureAxios() {
  const isLocal = 'localhost'
  if (import.meta.env.VITE_APP_URL) {
    axios.defaults.baseURL = import.meta.env.REACT_APP_BASE_URL
  }
  axios.defaults.withCredentials = window.location.hostname !== isLocal
  axios.interceptors.request.use(
    function (config: AxiosRequestConfig) {
      const internalConfig = config as InternalAxiosRequestConfig
      internalConfig.headers = internalConfig?.headers ?? {}
      return internalConfig
    },
    function (error: AxiosError) {
      return Promise.reject(error)
    },
  )
}
