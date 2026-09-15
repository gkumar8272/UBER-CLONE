import axios from 'axios'
import { useEffect } from 'react'

const UserLogout = () => {

    const token = localStorage.getItem('token')

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
            headers: { Authorization: `Bearer ${token}` }
        }).finally(() => localStorage.removeItem('token'))
    }, [token])
  return (
    <div>User logout</div>
  )
}

export default UserLogout