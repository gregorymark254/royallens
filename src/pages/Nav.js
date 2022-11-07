import React, {useState} from 'react'
import { FaFacebookF,FaInstagram,FaTwitter } from "react-icons/fa"
import  { Link } from 'react-router-dom'
import logo from '../images/white.png'

const Nav = () => {
  const [navIsShown, setnavIsShown] = useState(false);
  const toggleNavIsShown = () => {
    setnavIsShown((navIsShown) => !navIsShown);
  };

  return (
    <main>
      <div className="bg-black text-white">
        <div className="container mx-auto p-4">
          <nav className='flex justify-between items-center  px-4'>
            {/* Top Nav */}
            <div className="flex items-center ">
              <img className="w-16 h-full" src={logo} alt="" />
            </div>
            <ul className='hidden md:flex'>
              <li>
                <Link to="/" className="px-3 py-2 ">Home</Link>
              </li>
              <li>
                <Link to="/about" className=" px-3 py-2 ">About Us</Link>
              </li>
              <li>
                <Link to="/gallary" className=" px-3 py-2 ">Gallary</Link>
              </li>
              <li>
                <Link to="/contact" className="px-3 py-2">Contact Us</Link>
              </li>
            </ul>
            <div className='hidden md:flex space-x-2'>
              <a className="hover:text-blue-700 text-xl" href="https://www.facebook.com/profile.php?id=100008989771011"><FaFacebookF/></a>
              <a className="hover:text-purple-700 text-xl" href="https://instagram.com/_royal.lens.ke?utm_media=copy_link"><FaInstagram/></a>
              <a className="hover:text-blue-700 text-xl"  href="/"><FaTwitter/></a>
            </div>

            {/* Responsive Nav */}
            {!navIsShown && (
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 md:hidden' onClick={toggleNavIsShown} >
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
              </svg>
            )}
            {navIsShown && (
              <div className='md:hidden absolute z-10 top-0 left-0 w-full bg-gray-100/90 text-black px-4 py-6'>
                <div className='flex justify-between border-b-2 border-b-gray-600'>
                  <div className="flex items-center ">
                    <h3>Royal Lens</h3>
                  </div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6' onClick={toggleNavIsShown} >
                    <path  strokeLinecap='round'  strokeLinejoin='round'  d='M6 18L18 6M6 6l12 12'/>
                  </svg>
                </div>
                <ul className=' mb-4'>
                  <li>
                    <a href="/" className="px-3 py-2 text-lg">Home</a>
                  </li>
                  <li>
                    <a href="/about" className=" px-3 py-2 text-lg">About Us</a>
                  </li>
                  <li>
                    <a href="/gallary" className=" px-3 py-2 text-lg">Gallary</a>
                  </li>
                  <li>
                    <a href="/contact" className="px-3 py-2 text-lg">Contact Us</a>
                  </li>
                </ul>
                <div className="flex space-x-2">
                  <a className="hover:text-blue-700 text-2xl" href="https://www.facebook.com/profile.php?id=100008989771011"><FaFacebookF/></a>
                  <a className="hover:text-purple-700 text-2xl" href="https://instagram.com/_royal.lens.ke?utm_media=copy_link"><FaInstagram/></a>
                  <a className="hover:text-blue-700 text-2xl"  href="/"><FaTwitter/></a>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div> 
    </main>
  )
  
}

export default Nav

