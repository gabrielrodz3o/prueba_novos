export interface Company {
  id: number | null
  name: string
  description: string
  employes: Employe[]
}
export interface Employe {
  id: number | null
  name: string
  dni: string
  address: string
  phone: string
  email: string
  salary: number
}
