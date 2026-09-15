import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/captainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehicleplate, setVehicleplate] = useState('')
  const [vehiclecapacity, setVehiclecapacity] = useState('')
  const [vehicletype, setVehicletype] = useState('')
  const [error, setError] = useState('')

  const [, setCaptain] = useContext(CaptainDataContext)

  const submitHandler=async(e)=> {
    e.preventDefault()

    const captainData ={
      fullname: {
        firstname,
        lastname
      },
      email:email,
      password:password,
      vehicle:{
        color:vehicleColor,
        plate: vehicleplate,
        capacity: vehiclecapacity,
        vehicleType: vehicletype
      }
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

      if(response.status === 201){
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
    } catch (requestError) {
      setError(requestError.response?.data?.message || 'Unable to create captain account')
    }

    setEmail('')
    setFirstname('')
    setLastname('')
    setPassword('')
    setVehicleColor('')
    setVehicleplate('')
    setVehiclecapacity('')
    setVehicletype('')
  }

  return (
    <div>
      <div className='py-5 px-5 h-screen flex flex-col justify-between '>
        <div>
          <img className='w-20 mb-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBqEMZenXTzjV7ZYW11B-PbxnRkoKlEFjU505vh7PIgWqXZFcXxvu1LIc&s=10" alt="Uber logo"></img>


          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <h3 className='text-lg w-full font-medium mb-2'>What's our Captain name</h3>
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

            <h3 className='text-lg font-medium mb-2'>Vehicle details</h3>
            <div className='grid grid-cols-2 gap-4 mb-6'>
              <input required className='bg-[#eeeeee] rounded px-4 py-2 border text-lg placeholder:text-base'
                type='text' placeholder='Vehicle color' value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)} />

              <input required className='bg-[#eeeeee] rounded px-4 py-2 border text-lg placeholder:text-base'
                type='text' placeholder='Vehicle plate' value={vehicleplate}
                onChange={(e) => setVehicleplate(e.target.value)} />

              <input required className='bg-[#eeeeee] rounded px-4 py-2 border text-lg placeholder:text-base'
                type='number' min='1' placeholder='Vehicle capacity' value={vehiclecapacity}
                onChange={(e) => setVehiclecapacity(e.target.value)} />

              <select required className='bg-[#eeeeee] rounded px-4 py-2 border text-lg'
                value={vehicletype} onChange={(e) => setVehicletype(e.target.value)}>
                <option value='' disabled>Vehicle type</option>
                <option value='car'>Car</option>
                <option value='auto'>Auto</option>
                <option value='motorcycle'>Motorcycle</option>
              </select>
            </div>

            <button className='bg-[#111]  text-white font-semibold mb-3 rounded px-4 py-2 w-full text-base placeholder:text-base'>Create  captain Account</button>

            <p className='text-center'>Already have a account?<Link to='/captain-login' className='text-blue-600'>Login</Link></p>
          </form>
        </div>
        <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTHA and the <span className='underline'>Google Privacy Policy </span>and Terms of Service apply.</p>
        </div>
      </div>
    </div>
  )
}

export default CaptainSignup