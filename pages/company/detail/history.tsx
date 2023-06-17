import React from 'react'

interface Data {
  totalMoney: number
  amountPaid: number
  amountOwed: number
  date: string
  lastUpdateTime: string
}

const yourData: Data[] = [
  {
    totalMoney: 2,
    amountPaid: 2,
    amountOwed: 2,
    date: '2022-07-12T20:47:40',
    lastUpdateTime: '2022-07-12T20:47:40',
  },
  {
    totalMoney: 2,
    amountPaid: 2,
    amountOwed: 2,
    date: '2022-08-12T20:47:40',
    lastUpdateTime: '2022-07-12T20:47:40',
  },
  {
    totalMoney: 2,
    amountPaid: 2,
    amountOwed: 2,
    date: '2022-09-12T20:47:40',
    lastUpdateTime: '2022-07-12T20:47:40',
  },
  {
    totalMoney: 2,
    amountPaid: 2,
    amountOwed: 2,
    date: '2022-10-12T20:47:40',
    lastUpdateTime: '2022-07-12T20:47:40',
  },
  {
    totalMoney: 2,
    amountPaid: 2,
    amountOwed: 2,
    date: '2022-11-12T20:47:40',
    lastUpdateTime: '2022-07-12T20:47:40',
  },
  {
    totalMoney: 2,
    amountPaid: 2,
    amountOwed: 2,
    date: '2022-12-12T20:47:40',
    lastUpdateTime: '2022-07-12T20:47:40',
  },
  {
    totalMoney: 2,
    amountPaid: 2,
    amountOwed: 2,
    date: '2023-01-12T20:47:40',
    lastUpdateTime: '2022-07-12T20:47:40',
  },
  {
    totalMoney: 2,
    amountPaid: 2,
    amountOwed: 2,
    date: '2023-02-12T20:47:40',
    lastUpdateTime: '2022-07-12T20:47:40',
  },
  {
    totalMoney: 2,
    amountPaid: 2,
    amountOwed: 2,
    date: '2023-03-12T20:47:40',
    lastUpdateTime: '2022-07-12T20:47:40',
  },
  {
    totalMoney: 2,
    amountPaid: 2,
    amountOwed: 2,
    date: '2023-04-12T20:47:40',
    lastUpdateTime: '2022-07-12T20:47:40',
  },
  {
    totalMoney: 2,
    amountPaid: 2,
    amountOwed: 2,
    date: '2023-05-12T20:47:40',
    lastUpdateTime: '2022-07-12T20:47:40',
  },
  {
    totalMoney: 2,
    amountPaid: 2,
    amountOwed: 2,
    date: '2023-06-12T20:47:40',
    lastUpdateTime: '2022-07-12T20:47:40',
  },
]

function History() {
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
              Date
            </th>
            {yourData.map(({ date }) => (
              <th
                key={date}
                style={{
                  backgroundColor: '#f2f2f2',
                  color: 'black',
                  textAlign: 'left',
                  padding: '8px',
                  borderBottom: '1px solid #ddd',
                }}
              >
                {date}
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
              Total Money
            </td>
            {yourData.map(({ totalMoney }) => (
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
              Amount Paid
            </td>
            {yourData.map(({ amountPaid }) => (
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
              Amount Owed
            </td>
            {yourData.map(({ amountOwed }) => (
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
              LastTimeUpdate
            </td>
            {yourData.map(({ lastUpdateTime }) => (
              <td
                key={lastUpdateTime}
                style={{
                  textAlign: 'left',
                  padding: '8px',
                  borderBottom: '1px solid #ddd',
                }}
              >
                {lastUpdateTime}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default History
