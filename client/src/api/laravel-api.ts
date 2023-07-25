//const url =import.meta.env.VITE_API_FINNACES;
import axios from 'axios'
const url =
  import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_API_PRODUCTION
    : import.meta.env.VITE_API_LOCAL

const clientsApi = axios.create({
 
  baseURL: url
})

export default clientsApi
