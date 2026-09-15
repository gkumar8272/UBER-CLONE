import { createContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const CaptainDataContext = createContext()

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState({
    fullname: {
      firstname: '',
      lastname: '',
    },
    email: '',
    password: '',
    vehicle: {
      color: '',
      plate: '',
      capacity: '',
      vehicleType: '',
    },
  })

  return (
    <div>
      <CaptainDataContext.Provider value={[captain, setCaptain]}>
        {children}
      </CaptainDataContext.Provider>
    </div>
  )
}

export default CaptainContext