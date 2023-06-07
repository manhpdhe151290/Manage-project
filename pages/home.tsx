import Navbar from '@/modules/NavBar/NavBarEndUser'
import SearchBox from '@/modules/SearchBar/SearchBar'
import Table from '@/modules/Table/Table'
import { Pagination } from '@/pagination'
import { callApi } from '@/utils/api'
import { useEffect, useState } from 'react'
interface Company {
  companyCode: string
  companyName: string
  representativeName: number
}
function HomePage() {
  const [dataCompany, setDataCompany] = useState<Company[]>()
  const [totalRecord, setTotalRecord] = useState<number>()
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await callApi('GET', `/get-company?page=${page}`)
        setDataCompany(result.companyDTOList)
        setTotalRecord(result.total)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [page])
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: '30%' }}>
        <Navbar />
      </div>
      <div style={{ width: '60%' }}>
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
          {' '}
          Quản lý công nợ
        </h1>
        <SearchBox
          setSearchResults1={setDataCompany}
          setTotalRecord1={setTotalRecord}
        />
        {dataCompany && (
          <Table
            headers={['CompanyCode', 'CompanyName', 'RepresentativeName']}
            data={dataCompany}
            style={{
              borderCollapse: 'collapse',
              border: '1px solid #333',
              width: '100%',
              borderColor: '#333',
              fontFamily: 'Arial, sans-serif',
              fontSize: '14px',
              textAlign: 'center',
              backgroundColor: '#f2f2f2',
            }}
            headerCellStyle={{
              textAlign: 'left',
              borderTop: '1px solid #f0f4f8',
              padding: '8px',
            }}
            cellStyle={{
              textAlign: 'left',
              backgroundColor: 'white',
              padding: '8px',
            }}
            headerCellThStyle={{
              color: '#364d67',
              fontWeight: '600',
              backgroundColor: '#f1f7fd',
              padding: 10,
            }}
          />
        )}
        <Pagination
          total={totalRecord || 0}
          onChange={(number) => setPage(number)}
          page={page}
          pageSize={6}
          paginationStyle={{
            marginTop: 20,
            marginBottom: 20,
            marginLeft: '50%',
            transform: 'translateX(-15%)',
          }}
        />
      </div>
    </div>
  )
}

export default HomePage
