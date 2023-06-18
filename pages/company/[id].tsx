import { CompanyDetailType } from '@/type/company.type'
import { callApi } from '@/utils/api'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function CompanyDetail() {
  const router = useRouter()
  const id = router?.query?.id?.toString()
  const [data, setData] = useState<CompanyDetailType>()
  useEffect(() => {
    if (!!id) {
      const fetchData = async () => {
        try {
          const result = await callApi(
            'GET',
            `/get-full-company-info-by-company-code?companyCode=${id}`
          )
          setData(result)
        } catch (error) {
          console.error(error)
        }
      }
      fetchData()
    }
  }, [id])
  return (
    <>
      <form style={{ margin: '0 2rem' }}>
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
          Thông tin chi tiết công ty
        </h1>
        <div className='mb-6'>
          <span className='mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
            CompanyCode : <span>{data?.companyCode}</span>
          </span>
        </div>
        <div className='mb-6'>
          <span className='mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
            NameCompany : <span>{data?.companyName}</span>
          </span>
        </div>
        <div className='mb-6'>
          <span className='mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
            RepresentativeName : <span>{data?.representativeName}</span>
          </span>
        </div>
        <div className='mb-6'>
          <span className='mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
            Gmail : <span>{data?.gmail}</span>
          </span>
        </div>
        <div className='mb-6'>
          <span className='mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
            NumberPhone : <span>{data?.numberPhone}</span>
          </span>
        </div>
        <div>
          <Link href={`/history/${id}`}>
            <button className='group relative inline-flex items-center justify-center  overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800'>
              <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                Xem chi tiết công nợ
              </span>
            </button>
          </Link>
          <button
            type='reset'
            className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400'
            onClick={() => {
              router.back()
            }}
          >
            <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
              Quay lại
            </span>
          </button>
        </div>
      </form>
    </>
  )
}

export default React.memo(CompanyDetail)
