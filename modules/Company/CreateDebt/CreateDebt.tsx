import { DebtType } from '@/type/company.type'
import { callApi } from '@/utils/api'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
const initialState: DebtType = {
  companyCode: '',
  totalMoney: '',
  amountPaid: '',
  amountOwed: '',
}
function CreateDebt() {
  const [formData, setFormData] = useState<DebtType>(initialState)
  const handleCreate = async (): Promise<void> => {
    try {
      const result = await callApi('POST', `/add-debt`, formData)
      if (result === 'company does not exits') {
        toast('Company does not exits!', {
          hideProgressBar: true,
          autoClose: 2000,
          type: 'error',
          position: 'top-center',
        })
      } else {
        toast('Create Debt successfully!', {
          hideProgressBar: true,
          autoClose: 2000,
          type: 'success',
          position: 'top-center',
        })
      }
      setFormData(initialState)
    } catch (error) {
      toast.error('Lỗi khi tạo hóa đơn')
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
        Tạo mới hóa đơn
      </h1>
      <div className='mb-6'>
        <label
          htmlFor='title'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Mã công ty
        </label>
        <input
          type='text'
          id='title'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='Tạo mới hóa đơn'
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
          Tổng số tiền
        </label>
        <input
          type='number'
          id='title'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='Tổng số tiền'
          required
          value={formData.totalMoney}
          onChange={(event) =>
            setFormData((prev) => ({
              ...prev,
              totalMoney: event.target.value,
            }))
          }
        />
      </div>
      <div className='mb-6'>
        <label
          htmlFor='title'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Số tiền đã trả
        </label>
        <input
          type='number'
          id='title'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='Số tiền đã trả'
          required
          value={formData.amountPaid}
          onChange={(event) =>
            setFormData((prev) => ({
              ...prev,
              amountPaid: event.target.value,
            }))
          }
        />
      </div>
      <div className='mb-6'>
        <label
          htmlFor='title'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Số tiền nợ
        </label>
        <input
          type='number'
          id='title'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='Số tiền nợ'
          required
          value={formData.amountOwed}
          onChange={(event) =>
            setFormData((prev) => ({
              ...prev,
              amountOwed: event.target.value,
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
            Tạo hóa đơn
          </span>
        </button>
        <button
          type='reset'
          className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400'
        >
          <span
            onClick={() => {
              setFormData(initialState)
            }}
            className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'
          >
            Hủy bỏ
          </span>
        </button>
      </div>
    </form>
  )
}

export default CreateDebt
