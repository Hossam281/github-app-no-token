import React from 'react'
import {FaGithub} from "react-icons/fa"




const Navbar = () => {

  return (
    <nav className='navbar  mb-12 shadow-lg bg-neutral text-neutral-content'>
        <div className='container mx-auto'>
          <div className=' flex-none px-2 mx-2'>
            <button onClick={()=>window.location.reload(false)}><FaGithub className='inline pr-2 text-5xl mr-4 '/></button>
            
            <button onClick={()=>window.location.reload(false)}  className=' text-xl font-bold align-middle'>
              Github Finder
            </button>
          </div>
          <div className=' flex-1 px-2 mx-2'>
            
          </div>
        </div>
    </nav>
  )
}


export default Navbar
 
