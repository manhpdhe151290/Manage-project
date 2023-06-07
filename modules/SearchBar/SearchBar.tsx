import { callApi } from '@/utils/api'
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
interface SearchProps {
  setSearchResults1: (
    results: {
      companyCode: string
      companyName: string
      representativeName: number
    }[]
  ) => void
  setTotalRecord1: (total: number) => void
}
function SearchBox({ setSearchResults1, setTotalRecord1 }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSearch = async (): Promise<void> => {
    try {
      const result = await callApi(
        'GET',
        `/get-company-by-company-code?page=1&companyCode=${searchTerm}`
      )
      setSearchResults1(result.companyDTOList) // cập nhật kết quả tìm kiếm
      setTotalRecord1(result.total)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (searchTerm !== '') {
      handleSearch()
    }
  }, [searchTerm])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    handleSearch()
  }

  return (
    <div style={{ marginBottom: '2%' }}>
      <form onSubmit={handleSubmit}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '5px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px',
            width: '30%',
          }}
        />
        <button
          type='submit'
          style={{
            padding: '5px 10px',
            marginLeft: '20px',
            backgroundColor: 'orange',
            color: 'white',
            borderRadius: '5px',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          <div
            style={{ display: 'flex', alignItems: 'center', padding: '5px' }}
          >
            <AiOutlineSearch />
          </div>
        </button>
      </form>
    </div>
  )
}

export default SearchBox
