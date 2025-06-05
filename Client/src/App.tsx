
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './pages/user/auth/Register'
import { Provider } from 'react-redux'
import store from './store/store'
import Login from './pages/user/auth/Login'
import ForgetPassword from './pages/user/auth/forgetPassword'
import OTPVerification from './pages/user/auth/OTPVerification'

function App() {
  return (
   <Provider store={store}>
    <BrowserRouter>
   <Routes>
    <Route path='/register'element={<Register/>}/>
    <Route path='/login'element={<Login/>}/>
    <Route path='/forgetPassword' element={<ForgetPassword/>}/>
    <Route path='/OTPVerification' element={<OTPVerification/>}/>
   </Routes>
   
   </BrowserRouter>
   </Provider>
  )
}

export default App
