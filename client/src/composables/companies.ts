import clientsApi from '@/api/laravel-api'
import type { Company, Employe } from '@/types/Companies'

export const getCompanies = async () => {
  const resultCompanies = await clientsApi.get('companies')
  return resultCompanies.data

}
export const getCompaniesById= async (id:number) => {
  const resultCompanies = await clientsApi(`companies/${id}/employees`)


    return resultCompanies
  
}
export const addCompanies = async (company: Company) => {
  
  const resultCompanies = await clientsApi.post('companies', company)

 return resultCompanies
}
export const addEmploye = async (employe: Employe) => {
  
  const resultCompanies = await clientsApi.post('employe', employe)

 return resultCompanies
}
