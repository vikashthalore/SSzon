import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import mainlogo from '../assets/mainlogo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)

    const toggleNav = () => setNavOpen(!navOpen);
  return (
    <nav className='w-full bg-white shadow-md fixed top-0 left-0 z-50'>
     <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        {/* { logo } */}
        <div className='text-2xl font-bold text-blue-600'><img src={mainlogo} alt="" /></div>

        {/* { Desktop Menu } */}
        <ul className='hidden md:flex gap-8 text-gray-700 font-medium'>
            <li className='hover:text-blue-600 cursor-pointer'><Link to="/">Home</Link></li>
            <li className='hover:text-blue-600 cursor-pointer'><Link to="/courses">Courses</Link></li>
            <li className='hover:text-blue-600 cursor-pointer'><Link to="/blog">Blog</Link></li>
            <li className='hover:text-blue-600 cursor-pointer'><Link to="/about">About</Link></li>
            <li className='hover:text-blue-600 cursor-pointer'><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Buttons */}
        <div className='hidden md:flex gap-4'>
            
            <button style={{ backgroundColor: '#E3E3E3'}} className=''></button>
            <button className='text-blue-600 font-medium'>Login</button>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-md'>Sign Up</button>
        </div>
         
          {/* { Mobile Icon } */}
                <div className='md:hidden' onClick={toggleNav}>
                 {navOpen ? (
                    <AiOutlineClose size={24} />
                 ) : (
                    <AiOutlineMenu size={24} />
                 )}
                </div>

        {/* { Mobile Menu} */}
        {navOpen && (
            <div className='md:hidden bg-white px-6 py-4 shadow-md'>
                <ul className='flex flex-col gap-4 text-gray-700 font-medium'>
  <li className='hover:text-blue-600'>
    <Link to="/" onClick={() => setNavOpen(false)}>Home</Link>
  </li>
  <li className='hover:text-blue-600'>
    <Link to="/courses" onClick={() => setNavOpen(false)}>Courses</Link>
  </li>
  <li className='hover:text-blue-600'>
    <Link to="/blog" onClick={() => setNavOpen(false)}>Blog</Link>
  </li>
  <li className='hover:text-blue-600'>
    <Link to="/about" onClick={() => setNavOpen(false)}>About</Link>
  </li>
  <li className='hover:text-blue-600'>
    <Link to="/contact" onClick={() => setNavOpen(false)}>Contact</Link>
  </li>
</ul>

                <div className='mt-4 flex flex-col gap-2'>
                    <button className='text-blue-600 font-medium'>Login</button>
                    <button className='bg-blue-600 text-white px-4 py-2 rounded-md'>Sign Up</button>
                </div>

            </div>
        )}
     </div>
    </nav>
  )
}

export default Navbar
