import React from 'react'
import { FaFacebookF,FaInstagram,FaTwitter } from "react-icons/fa"

const Contact = () => {
  return (
    <main>
      <div className="container mx-auto p-4 mb-6">
        <div className="text-center">
        <section id="feature">
          <div className="title-text">
            <p><b>Contact us</b></p>
          </div>
        </section>
          <p>For inquiries about sessions and pricing fill out the form and someone will get back to you.</p>
        </div>

        <section className="md:flex p-6">
          <div className="w-full p-2 mr-14">
            <h2>Get in touch with us today.</h2>
            <form action="mailto:royallenske@gmail.com" method="post" enctype="text/plain" className="grid">
              <label htmlFor="name">
                <input 
                  type="text" 
                  required 
                  name="name"
                  placeholder="Your Name" 
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500   w-full rounded-md focus:ring-1"
                />
              </label>
              <label htmlFor="email">
                <input 
                  type="email" 
                  required 
                  name="email"
                  placeholder="Your Email" 
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500  w-full rounded-md  focus:ring-1"
                />
              </label>
              <label htmlFor="number">
                <input 
                  type="text" 
                  name="number"
                  placeholder="Phone Number *(Optional)" 
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500  w-full rounded-md  focus:ring-1"
                />
              </label>
              <p>How did you hear about us?</p>
              <label htmlFor="about">Instagram &nbsp;
                <input type="radio" id="htl" name="fav_language" value="HTL" />
              </label>
              <label htmlFor="about">Facebook &nbsp;
                <input type="radio" id="hl" name="fav_language" value="HL"/>
              </label>
              <label htmlFor="about">Friends &nbsp;
                <input type="radio" id="htm" name="fav_language" value="HTM" />
              </label>
              <label htmlFor="about">Others. &nbsp;
                <input 
                  type="text" 
                  placeholder="If others how?" 
                  required
                  name="about"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500  w-full rounded-md  focus:ring-1"
                />
              </label>
              <label htmlFor="message">
                <textarea cols="30" rows="5"
                  required 
                  name="message"
                  placeholder="Description of service(s) you want" 
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500  w-full rounded-md focus:ring-1"
                ></textarea>
              </label>
              <label htmlFor="number">
                <input 
                  type="text" 
                  name="budget"
                  placeholder="Budget *(Optional)" 
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500  w-full rounded-md  focus:ring-1"
                />
              </label>
              <p>Confirm your booking?</p>
              <label htmlFor="about">
                <input type="checkbox" name="confirm" required />
              </label>
              <button type="submit" className="bg-red-600 text-white mt-1 px-3 py-2">Send Message</button>
            </form>
          </div>
          <div className="md:w-full p-2 space-y-6">
            <h1><u>Contact Information</u></h1>
            <div>
              <h3><b>Address:</b></h3>
              <span>Nairobi,Kenya</span>
            </div>
            <div>
              <h3><b>Phones:</b></h3>
              <h5>+254 111 522 255</h5>
              <h5>+254 793 621 329</h5>
            </div>
            <div>
              <h3><b>Mail:</b></h3>
              <h5>royallenske@gmail.com</h5>
            </div>
            <br />
            <div className="flex space-x-3">
              <a className="hover:text-blue-700 text-xl" href="https://www.facebook.com/profile.php?id=100008989771011"><FaFacebookF/></a>
              <a className="hover:text-purple-700 text-xl" href="https://instagram.com/_royal.lens.ke?utm_media=copy_link"><FaInstagram/></a>
              <a className="hover:text-blue-700 text-xl"  href="/"><FaTwitter/></a>
            </div>
          </div>
        </section>

        <br />
        <br />

        <div>
          <iframe className="w-full h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817006240733!2d36.816406114753995!3d-1.2836756990637304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11efc0b203dd%3A0x5376f1de78cf155a!2sNairobi%20C%20B%20D!5e0!3m2!1sen!2ske!4v1667223338323!5m2!1sen!2ske" 
            width="600" height="450" allowFullScreen="" loading="lazy" title="rongai" referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        
      </div>
    </main>
  )
}

export default Contact
