import { type Company, type Employe } from '../types/Companies';

export const companies = {
  state: {
    selectedCompany: { id: null, name: '', description: '' } as Company,
    companies: [] as Company[],
    currentPage: 1
  },
  getters: {
    getSelectedCompany: state => state.selectedCompany,
    getCompanies: state => state.companies,
    getCurrentPage:state => state.currentPage
},
  mutations: {
    selectCompany(state, company: Company) {
      state.selectedCompany = company
    },
    addCompany(state, company: Company) {
      state.companies.push(company)
    },
    removeCompany(state, id: number) {
      state.companies = state.companies.filter((company) => company.id !== id)
    },
    updateCompany(state, id: number, company: Company) {
      const companyToUpdate = state.companies.find((company) => company.id === id)
      companyToUpdate.name = company.name
      companyToUpdate.description = company.description
    },
    setPage(state, page: number) {


      if (state.currentPage === page) return
      if (page <= 0) return
      if (page > state.companies.length) return
      state.currentPage = page
    }
    ,
    addEmploye(state, data: { companies: Company, employes: Employe }) {


      const indexToUpdate = state.companies.findIndex((company: Company) => company.id === data.companies.id);
      if (indexToUpdate !== -1) {

        state.companies[indexToUpdate].employes.push(data.employes);
      } else {

        console.log("No se encontró una empresa con el id especificado.");
      }

    },
  },
  actions: {


    setPage({ commit }, page: number) { // <-- Add 'state' as an argument here
      commit('setPage', page);
    },
    addEmploye({ commit }, data: { companies: Company, employes: Employe }) {

      commit('addEmploye', data)
    },
    selectCompany({ commit }, company: Company) {
      commit('selectCompany', company)
    },
    addCompany({ commit }, company: Company) {
      commit('addCompany', company)
    },
    removeCompany({ commit }, id: number) {
      commit('removeCompany', id)
    },
    updateCompanyAction({ commit }, id: number, company: Company) {
      commit('updateCompany', id, company)
    }
  }
}
