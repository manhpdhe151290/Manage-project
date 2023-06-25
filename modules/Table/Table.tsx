import { useRouter } from 'next/router'
import { CSSProperties } from 'react'
import { AiFillDelete } from 'react-icons/ai'
interface Company {
  companyCode: string
  companyName: string
  representativeName: number
}
interface TableProps {
  headers: string[]
  data: Company[]
  style?: CSSProperties
  headerCellStyle?: CSSProperties
  cellStyle?: CSSProperties
  headerCellThStyle?: CSSProperties
  onDelete: (companyCode : string) => void
}

const Table = ({
  headers,
  data,
  style,
  headerCellStyle,
  cellStyle,
  headerCellThStyle,
  onDelete,
}: TableProps) => {
  const router = useRouter()
  return (
    <table style={style}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} style={headerCellThStyle}>
              {header}
            </th>
          ))}
          <th style={headerCellThStyle}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} style={headerCellStyle}>
            <td
              style={cellStyle}
              onClick={() => router.push(`/company/${row.companyCode}`)}
            >
              {row.companyCode}
            </td>
            <td style={cellStyle}>{row.companyName}</td>
            <td style={cellStyle}>{row.representativeName}</td>
            <td
              style={cellStyle}
              onClick={() => {
                onDelete(row.companyCode)
              }}
            >
              <div>
                {' '}
                <AiFillDelete
                  style={{
                    fontSize: '30px',
                    transform: 'translateX(50px)',
                    background: 'red',
                    padding: '5px',
                  }}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
