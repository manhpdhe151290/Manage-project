import { CompanyType } from '@/type/company.type'
import { callApi } from '@/utils/api'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const initialState: CompanyType = {
  companyCode: '',
  nameCompany: '',
  representativeName: '',
  gmail: '',
  numberPhone: '',
}
interface AddCompanyProps {
  setRole: (result: String) => void
  onCreateCompanySuccess: () => void
}
function CreateCompany({ setRole, onCreateCompanySuccess }: AddCompanyProps) {
  const router = useRouter()
  const [formData, setFormData] = useState<CompanyType>(initialState)
  const handleCreate = async (): Promise<void> => {
    try {
      await callApi('POST', `/add-company`, formData)
      toast('Create successfully!', {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'success',
        position: 'top-center',
      })
      setRole('manage')
      onCreateCompanySuccess()
    } catch (error) {
      toast.error('Lỗi khi tạo công ty')
    }
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    handleCreate()
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1
        style={{
          fontSize: '30px',
          letterSpacing: -'1px',
          textTransform: 'uppercase',
          textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
          color: '#fff',
          backgroundColor: '#333',
          padding: '10px',
          margin: '20px 0',
          textAlign: 'center',
        }}
      >
        Create Company
      </h1>
      <div className='mb-6'>
        <label
          htmlFor='title'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          CompanyCode
        </label>
        <input
          type='text'
          id='title'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='CompanyCode'
          required
          value={formData.companyCode}
          onChange={(event) =>
            setFormData((prev) => ({
              ...prev,
              companyCode: event.target.value,
            }))
          }
        />
      </div>
      <div className='mb-6'>
        <label
          htmlFor='title'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          NameCompany
        </label>
        <input
          type='text'
          id='title'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='NameCompany'
          required
          value={formData.nameCompany}
          onChange={(event) =>
            setFormData((prev) => ({
              ...prev,
              nameCompany: event.target.value,
            }))
          }
        />
      </div>
      <div className='mb-6'>
        <label
          htmlFor='title'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          RepresentativeName
        </label>
        <input
          type='text'
          id='title'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='RepresentativeName'
          required
          value={formData.representativeName}
          onChange={(event) =>
            setFormData((prev) => ({
              ...prev,
              representativeName: event.target.value,
            }))
          }
        />
      </div>
      <div className='mb-6'>
        <label
          htmlFor='title'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Gmail
        </label>
        <input
          type='email'
          id='title'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='Gmail'
          required
          value={formData.gmail}
          onChange={(event) =>
            setFormData((prev) => ({
              ...prev,
              gmail: event.target.value,
            }))
          }
        />
      </div>
      <div className='mb-6'>
        <label
          htmlFor='title'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          NumberPhone
        </label>
        <input
          type='text'
          id='title'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='NumberPhone'
          required
          value={formData.numberPhone}
          onChange={(event) =>
            setFormData((prev) => ({
              ...prev,
              numberPhone: event.target.value,
            }))
          }
        />
      </div>

      <div>
        <button
          className='group relative inline-flex items-center justify-center  overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800'
          type='submit'
        >
          <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
            Publish Company
          </span>
        </button>
        <button
          type='reset'
          className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400'
        >
          <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
            Cancel
          </span>
        </button>
      </div>
    </form>
  )
}

export default CreateCompany
