import React from 'react'
import Link from 'next/link'

const Navbar: React.FC = () => {
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
    link: {
      display: 'block',
      padding: '1rem',
      transition: 'all 0.3s ease-in-out',
      textDecoration: 'none',
      color: '#000',
      fontWeight: 600,
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
        <Link href='/'>
          <div style={styles.link}>Danh sách công ty</div>
        </Link>
        <Link href='/about'>
          <div style={styles.link}>Thêm Công ty</div>
        </Link>
        <Link href='/contact'>
          <div style={styles.link}>Lịch sử</div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
