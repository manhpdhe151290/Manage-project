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
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to left bottom, #ffffff,  #333)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        padding: '7.5rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          width: '60%',
          height: '100%',
          maxWidth: '90rem',
          margin: '0 auto',
          borderRadius: '10px',
        }}
      >
        <div
          style={{
            width: '50%',
            padding: '2rem 2rem 8rem',
            background:
              'linear-gradient(to top right, #ffffff,  #333) no-repeat center / cover',
            borderRadius: '10px',
            position: 'relative',
            height: '80%',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              color: '#333',
              fontSize: '4rem',
              fontWeight: '500',
              height: '20rem',
              opacity: '0.8',
            }}
          >
            Thông tin công ty
          </span>
          <ul
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 'auto',
            }}
          >
            <li
              style={{
                width: '1.5rem',
                height: '1.5rem',
                backgroundColor: 'white',
                borderRadius: '2rem',
                margin: '0 5px',
                opacity: '0.5',
                cursor: 'pointer',
              }}
            ></li>
            <li
              style={{
                width: '1.5rem',
                height: '1.5rem',
                backgroundColor: 'white',
                borderRadius: '2rem',
                margin: '0 5px',
                opacity: '0.5',
                cursor: 'pointer',
              }}
            ></li>
            <li
              style={{
                width: '1.5rem',
                height: '1.5rem',
                backgroundColor: 'white',
                borderRadius: '2rem',
                margin: '0 5px',
                opacity: '0.5',
                cursor: 'pointer',
              }}
            ></li>
          </ul>
        </div>
        <div
          style={{
            width: '50%',
            backgroundColor: 'white',
            borderRadius: '0 10px 10px 0',
            height: '50%',
          }}
        >
          <h2
            style={{
              color: '#6b6b6b',
              fontSize: '2rem',
              fontWeight: '600',
              marginBottom: '1rem',
            }}
          >
            CompanyName: {data?.companyName}
          </h2>
          <p
            style={{
              color: '#6b6b6b',
              fontSize: '2rem',
              marginBottom: '2rem',
            }}
          >
            Gmail: {data?.gmail}
            <div
              style={{
                color: '#6b6b6b',
                fontSize: '2rem',
                marginBottom: '2rem',
              }}
            >
              NumberPhone: {data?.numberPhone}
            </div>
          </p>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '2',
              color: '#6b6b6b',
              marginBottom: '3rem',
            }}
          >
            RepresentativeName: {data?.representativeName}
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: '#cfcfcf',
              fontSize: '1.6rem',
            }}
          ></div>
          <button
            style={{
              marginTop: '3rem',
              padding: '25px',
              backgroundColor: '#0070f3',
              fontSize: '18px',
              border: '0',
              borderRadius: '1rem',
              cursor: 'pointer',
              display: 'inline-block',
              boxShadow: '0 5px 10px 0 rgba(130, 201, 30, 0.5)',
              width: '100%',
              background: 'rgb(130, 201, 30)',
            }}
          >
            View
          </button>
        </div>
      </div>
    </div>
  )
}

export default CompanyDetail
