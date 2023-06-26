import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home'
import Header from './Component/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-[#242734] '>
        <Header></Header>
      </div>
      <Outlet></Outlet>
      <div className='bg-[#292C39] '>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
