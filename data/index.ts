import { QueryClient } from 'react-query'
import Axios from 'axios'

export const reactQuery = new QueryClient()

export const axiosInstance = Axios.create({
  baseURL: 'https://restcountries.com/v2',
  timeout: 1000,
})
