import { callApi } from '@/utils/api'
import { useRouter } from 'next/router'
import React, { useState, useEffect, useCallback } from 'react'

interface Data {
  totalMoney: number
  amountPaid: number
  amountOwed: number
  month: string
  lastUpdate: string
}

function History() {
  const router = useRouter()
  const id = router?.query?.id?.toString()
  const [dataHistory, setDataHistory] = useState<Data[]>()
  console.log(id)
  const handleCreateCompanySuccess = useCallback(async () => {
    if (!!id) {
      try {
        const result = await callApi(
          'GET',
          `/get-debt-history?companyCode=${id}`
        )
        setDataHistory(result)
      } catch (error) {
        console.error(error)
      }
    }
  }, [])
  useEffect(() => {
    handleCreateCompanySuccess()
  }, [])
  return (
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
        Lịch sử công nợ
      </h1>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th
              style={{
                backgroundColor: '#f2f2f2',
                color: 'black',
                textAlign: 'left',
                padding: '8px',
                borderBottom: '1px solid #ddd',
              }}
            >
              Thời gian
            </th>
            {dataHistory?.map(({ month }) => (
              <th
                key={month}
                style={{
                  backgroundColor: '#f2f2f2',
                  color: 'black',
                  textAlign: 'left',
                  padding: '8px',
                  borderBottom: '1px solid #ddd',
                }}
              >
                {month}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                textAlign: 'left',
                padding: '8px',
                borderBottom: '1px solid #ddd',
              }}
            >
              Tổng số tiền
            </td>
            {dataHistory?.map(({ totalMoney }) => (
              <td
                key={totalMoney}
                style={{
                  textAlign: 'left',
                  padding: '8px',
                  borderBottom: '1px solid #ddd',
                }}
              >
                {totalMoney}
              </td>
            ))}
          </tr>
          <tr>
            <td
              style={{
                textAlign: 'left',
                padding: '8px',
                borderBottom: '1px solid #ddd',
              }}
            >
              Số tiền đã trả
            </td>
            {dataHistory?.map(({ amountPaid }) => (
              <td
                key={amountPaid}
                style={{
                  textAlign: 'left',
                  padding: '8px',
                  borderBottom: '1px solid #ddd',
                }}
              >
                {amountPaid}
              </td>
            ))}
          </tr>
          <tr>
            <td
              style={{
                textAlign: 'left',
                padding: '8px',
                borderBottom: '1px solid #ddd',
              }}
            >
              Số tiền nợ
            </td>
            {dataHistory?.map(({ amountOwed }) => (
              <td
                key={amountOwed}
                style={{
                  textAlign: 'left',
                  padding: '8px',
                  borderBottom: '1px solid #ddd',
                }}
              >
                {amountOwed}
              </td>
            ))}
          </tr>
          <tr>
            <td
              style={{
                textAlign: 'left',
                padding: '8px',
                borderBottom: '1px solid #ddd',
              }}
            >
              Cập nhật cuối cùng
            </td>
            {dataHistory?.map(({ lastUpdate }) => (
              <td
                key={lastUpdate}
                style={{
                  textAlign: 'left',
                  padding: '8px',
                  borderBottom: '1px solid #ddd',
                }}
              >
                {lastUpdate}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default History
