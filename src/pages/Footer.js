import React from 'react'
import logo from '../images/white.png'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram,FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <main>
      <div className="bg-[#181818] text-white">
        <div className="container mx-auto p-4">
          <div className="md:grid grid-cols-3 gap-4 py-4 justify-between">
            <div className="mt-6">
              <div className="flex space-x-4 mb-4">
                <img className="w-12 h-full" src={logo} alt="logo" />
                <h3><u>Royal Lens</u></h3>
              </div>
              <p>A team of enthusiasts who do their best to meet any client’s demand and provide them with perfectly made photos.We are a passionate freelance photography and videography service operating currently at Nairobi.</p>
              <div className="flex space-x-2 mt-6">
                <a className="hover:text-blue-700 text-2xl" href="https://www.facebook.com/profile.php?id=100008989771011"><FaFacebookF/></a>
                <a className="hover:text-purple-700 text-2xl" href="https://instagram.com/_royal.lens.ke?utm_media=copy_link"><FaInstagram/></a>
                <a className="hover:text-blue-700 text-2xl"  href="/"><FaTwitter/></a>
              </div>
            </div>
            <div className="grid mt-6">
              <h3><u>Quick Links</u></h3>
              <span className="hover:underline"><Link to="/about">&#10146; About</Link></span>
              <span className="hover:underline"><Link to="/gallary">&#10146; Our Portfolio</Link></span>
              <span className="hover:underline"><Link to="/about">&#10146; Product & Services</Link></span>
              <span className="hover:underline"><Link to="/contact">&#10146; Contact Us</Link></span>
            </div>
            <div className="mt-6 space-y-3">
              <h3><u>Contact Information</u></h3>
              <p>Phone : (+254) 111 522 255</p>
              <p>Email : Royallenske@gmail.com</p>
              <p>Location : Nairobi,Kenya.</p>
            </div>
          </div>
          <hr />
          <div className="py-4 text-center">
            <p>&copy; 2022 Royal Lens. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Footer
