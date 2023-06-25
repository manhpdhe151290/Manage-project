import { callApi } from '@/utils/api'
import { useRouter } from 'next/router'
import React, { useState, useEffect, useCallback } from 'react'

interface Data {
  totalMoney: string
  amountPaid: string
  amountOwed: string
  month: string
  lastUpdate: string
}
// const dump: Data[] = [
//   {
//     totalMoney: '2',
//     amountPaid: '2',
//     amountOwed: '2',
//     month: '07/2022',
//     lastUpdate: '12/07/2022 20:47',
//   },
//   {
//     totalMoney: '2',
//     amountPaid: '2',
//     amountOwed: '2',
//     month: '08/2022',
//     lastUpdate: '12/08/2022 20:47',
//   },
//   {
//     totalMoney: '2',
//     amountPaid: '2',
//     amountOwed: '2',
//     month: '09/2022',
//     lastUpdate: '12/09/2022 20:47',
//   },
//   {
//     totalMoney: '2',
//     amountPaid: '2',
//     amountOwed: '2',
//     month: '10/2022',
//     lastUpdate: '12/10/2022 20:47',
//   },
//   {
//     totalMoney: '2',
//     amountPaid: '2',
//     amountOwed: '2',
//     month: '11/2022',
//     lastUpdate: '12/11/2022 20:47',
//   },
//   {
//     totalMoney: '2',
//     amountPaid: '2',
//     amountOwed: '2',
//     month: '12/2022',
//     lastUpdate: '12/12/2022 20:47',
//   },
//   {
//     totalMoney: '2',
//     amountPaid: '2',
//     amountOwed: '2',
//     month: '01/2023',
//     lastUpdate: '12/01/2023 20:47',
//   },
//   {
//     totalMoney: '2',
//     amountPaid: '2',
//     amountOwed: '2',
//     month: '02/2023',
//     lastUpdate: '12/02/2023 20:47',
//   },
//   {
//     totalMoney: '2',
//     amountPaid: '2',
//     amountOwed: '2',
//     month: '03/2023',
//     lastUpdate: '12/03/2023 20:47',
//   },
//   {
//     totalMoney: '2',
//     amountPaid: '2',
//     amountOwed: '2',
//     month: '04/2023',
//     lastUpdate: '12/04/2023 20:47',
//   },
// ]
// const targetLength = 12 // Số lượng object mục tiêu
// const currentLength = dump.length // Số lượng object hiện tại

// if (currentLength < targetLength) {
//   const diff = targetLength - currentLength // Số lượng object cần thêm
//   for (let i = 0; i < diff; i++) {
//     dump.push({
//       totalMoney: 'Không có dữ liệu',
//       amountPaid: 'Không có dữ liệu',
//       amountOwed: 'Không có dữ liệu',
//       month: 'Không có dữ liệu',
//       lastUpdate: 'Không có dữ liệu',
//     })
//   }
// }
// console.log(dump)

function History() {
  const router = useRouter()
  const id = router?.query?.id?.toString()
  const [dataHistory, setDataHistory] = useState<Data[]>()
  const handleCreateCompanySuccess = useCallback(async () => {
    if (!!id) {
      try {
        const result = await callApi(
          'GET',
          `/get-debt-history?companyCode=${id}`
        )
        const targetLength = 12 // Số lượng object mục tiêu
        const currentLength = result.length // Số lượng object hiện tại

        if (currentLength < targetLength) {
          const diff = targetLength - currentLength // Số lượng object cần thêm
          for (let i = 0; i < diff; i++) {
            result.push({
              totalMoney: 'Không có dữ liệu',
              amountPaid: 'Không có dữ liệu',
              amountOwed: 'Không có dữ liệu',
              month: 'Không có dữ liệu',
              lastUpdate: 'Không có dữ liệu',
            })
          }
          setDataHistory(result)
        }
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
