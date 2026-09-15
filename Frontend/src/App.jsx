import { Routes, Route } from 'react-router-dom'
import Start from './Pages/Start'
import UserLogin from './Pages/UserLogin'
import UserSignup from './Pages/UserSignup'
import CaptainLogin from './Pages/CaptainLogin'
import CaptainSignup from './Pages/CaptainSignup'
import Home from './Pages/Home'
import UserProtectedWrapper from './Pages/userProtectedWrapper'
import UserLogout from './Pages/userLogut'
import CaptainProtectedWrapper from './Pages/captainProtectedwrapper'
import CaptainHome from './Pages/captainhome'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/home' element={<UserProtectedWrapper>
          <Home />
        </UserProtectedWrapper>} />
        <Route path='/user.logout' element={<UserProtectedWrapper>
          <UserLogout />
        </UserProtectedWrapper> }
        />
        <Route path='/captain-home' element={
          <CaptainProtectedWrapper>
            <CaptainHome />
          </CaptainProtectedWrapper>
        }/>
      </Routes>
    </div>
  )
}

export default App