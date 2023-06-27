
import './App.css'
import Home from './Component/Home'
import Header from './Component/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer/Footer'

function App() {

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
