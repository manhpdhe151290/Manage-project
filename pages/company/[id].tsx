import { CompanyDetailType } from '@/type/company.type'
import { callApi } from '@/utils/api'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

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
  console.log(data)
  return (
    <div>
      <div>
        <h1 className='text-center uppercase'>{data?.companyName}</h1>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '50px',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            marginTop: '20px',
            marginBottom: 0,
            textAlign: 'center',
          }}
        >
          {data?.numberPhone}
        </h1>
        <p
          style={{
            maxWidth: '400px',
            height: 'auto',
            marginTop: '20px',
            marginBottom: '40px',
          }}
        >
          {data?.representativeName}
        </p>
        <p
          style={{
            marginTop: '20px',
            fontSize: '1.2rem',
            textAlign: 'center',
          }}
        >
          Website: <div>{data?.gmail}</div>
        </p>
      </div>
    </div>
  )
}

export default CompanyDetail
