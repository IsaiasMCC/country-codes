import React from 'react'
import { Link } from 'react-router-dom'
const NavigationPage = () => {
  return (
    <nav className='bg-white flex flex-col py-2 text-gray-500 sm:flex-row bg-white-200 justify-between shadow-lg font-bold text-center'> 
      <div className='py-1 mx-14 px-2 text-lg hover:bg-gray-300 cursor-pointer rounded-xl hover:text-stone-800'> 
        <Link to='/'> Country Code</Link>
      </div>
      <div className='flex flex-col sm:flex-row'>
        <div className='py-1 mx-5 hover:bg-gray-300 px-2 hover:cursor-pointer rounded-xl hover:text-stone-800'> 
          <Link to='/'> Sign In</Link>
        </div>
        <div className='py-1 mx-5 hover:bg-gray-300 px-2 hover:cursor-pointer rounded-xl hover:text-stone-800'>
          <Link to ='/register'> Register</Link>
        </div>
      </div>
    </nav>
    
  )
}

export default NavigationPage