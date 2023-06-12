import CreateDebt from '@/modules/Company/CreateDebt'
import Navbar from '@/modules/NavBar/NavBarEndUser'
import SearchBox from '@/modules/SearchBar/SearchBar'
import Table from '@/modules/Table/Table'
import { Pagination } from '@/pagination'
import { callApi } from '@/utils/api'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { default as Company, default as CreateCompany } from './add-company'
import { AiFillCaretDown } from 'react-icons/ai'
import { toast } from 'react-toastify'
interface Company {
  companyCode: string
  companyName: string
  representativeName: number
}
function HomePage() {
  const [dataCompany, setDataCompany] = useState<Company[]>()
  const [hover, setHover] = useState(false)
  const router = useRouter()
  const [totalRecord, setTotalRecord] = useState<number>()
  const [page, setPage] = useState<number>(1)
  const [toggle, setToggle] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<String>('manage')
  const [user, setUser] = useState<String>('')
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
  useEffect(() => {
    setUser(sessionStorage.getItem('login') || '')
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: '30%' }}>
        <Navbar activeTab={activeTab} setRole={setActiveTab} />
      </div>
      <div style={{ width: '60%' }}>
        {activeTab === 'manage' && (
          <div>
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
                  textAlign: 'center',
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
        )}
        {activeTab === 'company' && <CreateCompany />}
        {activeTab === 'history' && <CreateDebt />}
      </div>

      {user && (
        <>
          <div style={{ margin: 15 }}>
            <div
              style={{ width: '100%', display: 'flex', alignItems: 'center' }}
            >
              Hi, {user}
              <span style={{ position: 'relative' }}>
                <AiFillCaretDown
                  style={{ cursor: 'pointer' }}
                  onClick={() => setToggle(!toggle)}
                />
                {toggle && (
                  <div
                    style={{
                      position: 'absolute',
                      width: '120px',
                      left: '-60px',
                      top: '20px',
                      backgroundColor: '#333',
                      minHeight: '100%',
                      cursor: 'pointer',
                      padding: 5,
                      transition: 'linear 1s',
                    }}
                  >
                    <ul>
                      <li
                        style={{
                          minWidth: '100%',
                          color: '#fff',
                        }}
                        onMouseEnter={() => {
                          setHover(true)
                        }}
                        onMouseLeave={() => {
                          setHover(false)
                        }}
                      >
                        Trang Cá Nhân
                      </li>
                      <li
                        style={{
                          minWidth: '100%',
                          color: '#fff',
                        }}
                        onMouseEnter={() => {
                          setHover(true)
                        }}
                        onMouseLeave={() => {
                          setHover(false)
                        }}
                      >
                        Cài Đặt
                      </li>
                      <li
                        style={{
                          minWidth: '100%',
                          color: '#fff',
                          background: hover ? 'red' : '#333',
                        }}
                        onMouseEnter={() => {
                          setHover(true)
                        }}
                        onMouseLeave={() => {
                          setHover(false)
                        }}
                        onClick={() => {
                          sessionStorage.removeItem('login')
                          toast('Logout successfully!', {
                            hideProgressBar: true,
                            autoClose: 2000,
                            type: 'success',
                            position: 'top-center',
                          })
                          router.push('/login')
                        }}
                      >
                        Đăng xuất
                      </li>
                    </ul>
                  </div>
                )}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default HomePage
