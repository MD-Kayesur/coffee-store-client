 
import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {
   

  return (
    <>
       
      <div className='my-20 '>
      <h1 className='font-bold text-4xl text-center '>Coffe Store</h1>
      <div className='flex  w-50 mx-auto gap-4'>
        <NavLink to='/updatecoffee'>updateCoffee</NavLink>
        <NavLink to='/addcoffee'>AddCoffee</NavLink> 
        <NavLink to='/coffee'>Coffee</NavLink> 
      </div>
      <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
