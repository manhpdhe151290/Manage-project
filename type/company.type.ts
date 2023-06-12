export interface CompanyType {
    companyCode: string
    nameCompany: string
    representativeName: string
    gmail: string
    numberPhone: string
  }
export interface DebtType {
  companyCode : string
  totalMoney : number
  amountPaid : number
  amountOwed : number
}
export interface CompanyDetailType {
  companyCode: string
  companyName: string
  representativeId: string
  representativeName: string
  gmail: string
  numberPhone : string
}