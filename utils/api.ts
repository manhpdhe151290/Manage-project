import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const apiInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  timeout: 1000,
})

export const callApi = async (
  method: AxiosRequestConfig['method'],
  url: string,
  data?: any,
): Promise<any> => {
  try {
    const response: AxiosResponse = await apiInstance({
      method,
      url,
      data,
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}
