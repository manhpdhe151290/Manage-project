import React from 'react'
import Link from 'next/link'

interface NavBarProps {
  setRole: (result: String) => void
  activeTab: String
}
function Navbar({ setRole, activeTab }: NavBarProps) {
  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      height: '60px',
      backgroundColor: '#fff',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      padding: '0 2rem',
    },
    logo: {
      fontWeight: 700,
      fontSize: '2rem',
      color: '#444',
      letterSpacing: '2px',
    },
    links: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '30%',
    },
  }

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        height: '60px',
        backgroundColor: '#fff',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        padding: '0 2rem',
      }}
    >
      <div style={styles.logo}>Logo</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          flexDirection: 'column',
        }}
      >
        <div
          onClick={() => {
            setRole('manage')
          }}
          style={{
            cursor: 'pointer',
            background: activeTab === 'manage' ? '#333' : '',
          }}
        >
          <div
            style={{
              display: 'block',
              padding: '1rem',
              transition: 'all 0.3s ease-in-out',
              textDecoration: 'none',
              fontWeight: 600,
              color: activeTab === 'manage' ? 'white' : '#000',
            }}
          >
            Danh sách công ty
          </div>
        </div>
        <div
          onClick={() => {
            setRole('company')
          }}
          style={{
            background: activeTab === 'company' ? '#333' : '',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              display: 'block',
              padding: '1rem',
              transition: 'all 0.3s ease-in-out',
              textDecoration: 'none',
              fontWeight: 600,
              color: activeTab === 'company' ? 'white' : '#000',
            }}
          >
            Thêm Công ty
          </div>
        </div>
        <div
          onClick={() => {
            setRole('history')
          }}
          style={{
            background: activeTab === 'history' ? '#333' : '',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              display: 'block',
              padding: '1rem',
              transition: 'all 0.3s ease-in-out',
              textDecoration: 'none',
              fontWeight: 600,
              color: activeTab === 'history' ? 'white' : '#000',
            }}
          >
            Thêm hóa đơn
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
