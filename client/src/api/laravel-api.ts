//const url =import.meta.env.VITE_API_FINNACES;
import axios from 'axios'
const url =
  import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_API_PRODUCTION
    : import.meta.env.VITE_API_LOCAL

const clientsApi = axios.create({
  // baseURL: import.meta.env.VITE_API_URL
  baseURL: url
})
//console.log(import.meta.env)
export default clientsApi
// export const api_Get = async  (link: string)=> {

//   const cabecera = {
//     'Content-Type': 'application/json',

//   }

//   const request = { method: 'GET', headers: cabecera }
//   const response = await fetch(url + link, request)
//    // console.log(response);
//   return response
// }
// export const api_Post = async (link: string, body: any)=> {

//   const cabecera = {
//     'Content-Type': 'application/json',
//   }

//   const request = {
//     method: 'POST',
//     headers: cabecera,
//     body: body
//   }

//   const response = await fetch(url + link, request)
// console.log(response)
//   return response
// }
