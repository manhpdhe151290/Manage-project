import { CSSProperties } from 'react'
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
}

const Table = ({
  headers,
  data,
  style,
  headerCellStyle,
  cellStyle,
  headerCellThStyle,
}: TableProps) => {
  return (
    <table style={style}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} style={headerCellThStyle}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <>
            <tr key={index} style={headerCellStyle}>
              <td style={cellStyle}>{row.companyCode}</td>
              <td style={cellStyle}>{row.companyName}</td>
              <td style={cellStyle}>{row.representativeName}</td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  )
}

export default Table
