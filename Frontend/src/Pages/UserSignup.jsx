import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/usercontext'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const [, setUser] = useContext(UserDataContext)


  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

      if (response.status === 201) {
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/home')
      }
    } catch (requestError) {
      setError(requestError.response?.data?.message || 'Unable to create account')
    }

    setEmail('')
    setFirstname('')
    setLastname('')
    setPassword('')
  }

  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between '>
        <div>
          <img className='w-16 mb-8' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg?utm_source=sco.wikipedia.org&utm_campaign=index&utm_content=original" alt="Uber logo"></img>


          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <h3 className='text-lg  font-medium mb-2'>What's your name</h3>
            <div className='flex gap-4 mb-6'>
              <input required className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base' type="text" placeholder='Firstname'
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value)
                }}
              />

              <input required className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-lg placeholder:text-base' type="text" placeholder='Lastname'
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value)
                }} />
            </div>

            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}

              className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com' />

            <h3 className='text-lg  font-medium mb-2'>Enter Password</h3>
            <input className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}

              required type="password" placeholder='password' />

            {error && <p className='text-red-600 mb-3'>{error}</p>}

            <button className='bg-[#111]  text-white font-semibold mb-3 rounded px-4 py-2 w-full text-base placeholder:text-base'>Create account</button>

            <p className='text-center'>Already have a account?<Link to='/login' className='text-blue-600'>Login</Link></p>
          </form>
        </div>
        <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTHA and the <span className='underline'>Google Privacy Policy </span>and Terms of Service apply.</p>
        </div>
      </div>
    </div>
  )
}

export default UserSignup