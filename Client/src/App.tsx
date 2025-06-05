import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './pages/user/Register'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Provider store={store}>
    <BrowserRouter>
   <Routes>
    <Route path='/register'element={<Register/>}/>
   </Routes>
   
   </BrowserRouter>
   </Provider>
  )
}

export default App
