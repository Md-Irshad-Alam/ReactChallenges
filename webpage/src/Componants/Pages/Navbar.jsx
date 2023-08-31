import React, { useState } from 'react'
import { Link } from "react-router-dom";
import '../Styles/navbar.css'
import { AiOutlineMenu } from 'react-icons/ai'
function Navbar() {
    const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
   <div>
       
           <div className='flex items-center justify-between m-auto   bg-black text-white sm:pl-4 sm:pr-4 fixed w-full z-10 top-0 h-20 mb-28'>
           <div className="flex items-center ">
                <h1 className='text-10 text-4xl font-bold'>Geeks <span className='text-yellow-500'>Inventions</span></h1>
            </div>
            
            
                <div className={` mobile_view ${showMenu ? 'hide' : 'active'}`}>
                    <Link to='/' className='border-b-2 border-orange-300'>
                        Home
                    </Link>
                    <Link to='/work'>Works</Link>
                    <Link to='/tech'>Technologies</Link>
                    <Link to='/service'>Services</Link>
                    <Link to='/com'>Company</Link>
                    <Link to='/cont'>Contacts</Link>
                </div>

                <div className='hamburger-icon' onClick={toggleMenu}>
                ☰
                </div>
             </div>
          
        </div>
  
  )
}

export default Navbar
