import { callApi } from '@/utils/api'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (): Promise<void> => {
    try {
      const result = await callApi(
        'GET',
        `/login?username=${email}&password=${password}`
      )
      if (result === 'success') {
        sessionStorage.setItem('login', email)
        toast('Login successfully!', {
          hideProgressBar: true,
          autoClose: 2000,
          type: 'success',
          position: 'top-center',
        })
        router.push('/home')
      } else {
        toast('Wrong password!', {
          hideProgressBar: true,
          autoClose: 2000,
          type: 'error',
          position: 'top-center',
        })
      }
    } catch (error) {
      console.error(error)
    }
  }
  const handleSubmit1 = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    handleSubmit()
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f2f3f5',
      }}
    >
      <div
        style={{
          padding: '90px 75px',
          backgroundColor: 'white',
          width: '100%',
          maxWidth: '600px',
          borderRadius: '30px',
        }}
      >
        <h1
          style={{
            fontSize: '40px',
            fontWeight: 'bold',
            color: '#373941',
            textAlign: 'center',
            marginBottom: '35px',
          }}
        >
          Sign in
        </h1>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          onSubmit={handleSubmit1}
        >
          <label
            style={{
              fontSize: '16px',
              color: '#63676b',
              fontWeight: 500,
              marginBottom: '10px',
              display: 'inline-block',
              cursor: 'pointer',
            }}
            htmlFor='email'
          >
            Username:
          </label>
          <input
            id='email'
            required
            value={email}
            style={{
              display: 'block',
              width: '100%',
              padding: '25px',
              borderRadius: '14px',
              backgroundColor: '#f2f3f5',
              outline: 'none',
              border: '0',
              fontSize: '18px',
              marginBottom: '30px',
            }}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label
            style={{
              fontSize: '16px',
              color: '#63676b',
              fontWeight: 500,
              marginBottom: '10px',
              display: 'inline-block',
              cursor: 'pointer',
            }}
            htmlFor='password'
          >
            Password:
          </label>
          <input
            required
            style={{
              display: 'block',
              width: '100%',
              padding: '25px',
              borderRadius: '14px',
              backgroundColor: '#f2f3f5',
              outline: 'none',
              border: '0',
              fontSize: '18px',
              marginBottom: '30px',
            }}
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            style={{
              padding: '25px',
              backgroundColor: '#0070f3',
              fontSize: '18px',
              border: '0',
              borderRadius: '0.25rem',
              cursor: 'pointer',
              display: 'inline-block',
              boxShadow: '0 5px 10px 0 rgba(130, 201, 30, 0.5)',
              marginTop: '0 25px',
              width: '100%',
              background: 'rgb(130, 201, 30)',
            }}
            type='submit'
          >
            Log in
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          <span>Already have an account ?</span>
          <a href='#'>Login</a>
        </p>
      </div>
    </div>
  )
}

export default Login
