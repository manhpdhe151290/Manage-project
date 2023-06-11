import React from 'react'

function CreateDebt() {
  return (
    <form className='p-5'>
      <h1 className='text-center uppercase'>Create Debt</h1>
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
        />
      </div>
      <div className='mb-6'>
        <label
          htmlFor='title'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          totalMoney
        </label>
        <input
          type='text'
          id='title'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='totalMoney'
          required
        />
      </div>
      <div className='mb-6'>
        <label
          htmlFor='title'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          amountPaid
        </label>
        <input
          type='text'
          id='title'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='amountPaid'
          required
        />
      </div>
      <div className='mb-6'>
        <label
          htmlFor='title'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          amountOwed
        </label>
        <input
          type='text'
          id='title'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500'
          placeholder='amountOwed'
          required
        />
      </div>
      <div>
        <button
          className='group relative inline-flex items-center justify-center  overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800'
          type='submit'
        >
          <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
            Create Debt
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

export default CreateDebt
