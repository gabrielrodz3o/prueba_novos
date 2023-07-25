import type { Company } from "@/types/Companies";



export default  {
  state: {
    selectedCompany: { id: null, name: '', description: '' } as Company,
    companies: [] as Company[],
    currentPage: 1,
  },
  getters: {
    getSelectedCompany: (state: any) => state.selectedCompany,
    getCompanies: (state: any) => state.companies,
    getCurrentPage: (state: any) => state.currentPage,
  },
  mutations: {
    selectCompany(state: any, company: Company) {
      state.selectedCompany = company;
    },
    addCompany(state: any, company: Company) {
  state.companies.push(company);
    },
    removeCompany(state: any, id: number) {
      state.companies = state.companies.filter((company: Company) => company.id !== id);
    },
    updateCompany(state: any, { id, company }: { id: number; company: Company }) {
      const companyToUpdate = state.companies.find((c: Company) => c.id === id);
      if (companyToUpdate) {
        companyToUpdate.name = company.name;
        companyToUpdate.description = company.description;
      }
    },
    setPage(state: any, page: number) {
      if (state.currentPage === page) return;
      if (page <= 0) return;
      if (page > state.companies.length) return;
      state.currentPage = page;
    },
    setCompanies(state: any, companies: Company[]) {
      state.companies = companies;
    },
    addEmploye(state: any, data: { companies: Company; employes: Employe }) {
      const indexToUpdate = state.companies.findIndex((c: Company) => c.id === data.companies.id);
      if (indexToUpdate !== -1) {
        state.companies[indexToUpdate].employes.push(data.employes);
      } else {
        console.log('No se encontró una empresa con el id especificado.');
      }
    },
  },
  actions: {
    setPage({ commit }: { commit: any }, page: number) {
      commit('setPage', page);
    },
    addEmploye({ commit }: { commit: any }, data: { companies: Company; employes: Employe }) {
      commit('addEmploye', data);
    },
    selectCompany({ commit }: { commit: any }, company: Company) {
      commit('selectCompany', company);
    },
    setCompanies({ commit }: { commit: any }, companies: Company[]) {
      commit('setCompanies', companies);
    },
    addCompany({ commit }: { commit: any }, company: Company) {
      commit('addCompany', company);
    },
    removeCompany({ commit }: { commit: any }, id: number) {
      commit('removeCompany', id);
    },
    updateCompanyAction({ commit }: { commit: any }, { id, company }: { id: number; company: Company }) {
      commit('updateCompany', { id, company });
    },
  },
};
