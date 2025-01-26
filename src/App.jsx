
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'


function App() {

  return (
    <div className='md:flex'>
      <div className='flex-1'>
      <Header/>
      </div>
      <main className='md:px-2'>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
