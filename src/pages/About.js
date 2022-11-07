import React from 'react'
import { Link } from 'react-router-dom'
import { BsGlobe2 } from "react-icons/bs";
import { FaFacebookF,FaInstagram } from "react-icons/fa";
import carloz from '../images/portfolio/Royallensk.jpg'

const About = () => {
  return (
    <main>
      <div className="container mx-auto p-4">
        <div className="md:grid grid-cols-2 gap-4">
          <div className="space-y-5 py-6">
            <h2 className="text-red-600">WHY CHOOSE US</h2>
            <h1>We are a team of observers</h1>
            <p>The sensitivity and natural intuition make our creative photographers the perfect men for capturing your special moments. 
              The thorough approach and deep understanding of this form of art help enjoy each moment to the fullest. Having a passion for creating static and dynamic images,
              we have made up a truly rich photo gallery. Here you can find shots of different styles. Want to hire? Check out the contact details.
            </p>
            <p>At Royallens Ke we do Personal photoshoots,Professional Potraits,Event photography e.g Weddings,Graduations,Baby Bumps and showers,Birthday parties,Co-operate Events e.t.c,
              Commercial and product photography,Fashion,Beauty and Modelling photography,Promotion featured photography,Studio and Arts photography and other related services.
              Get the most affordable services at lower costs.
            </p>
            <p>
              I have worked with OPPO Kenya,Amani International,Siron Place Lounge Ke,Turborg,Jack Daniels,Glenfiddich,Tecno Kenya,He has featured Re-known icons in the Music industry like ,Swat Kenya,
              Brand ambassadors such as The Armore Family,Truckee Labels,Van Hessen and C9.
              Book my services today for a Rollercoaster and pro experience.Join our fan base on Istagram,Twitter and all other social Media platforms to keep up to date with our latest offers.
            </p>
          </div>
          <div>
            <img className="h-full object-cover" src={carloz} alt="" />
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="text-center py-8">
          <section id="feature">
            <div className="title-text">
              <p><b>Our Services</b></p>
            </div>
          </section>
          <article>
            <div className="reveal fade-left">
              <div className="md:grid grid-cols-3 gap-4">
                <div className="py-4">
                  <h2 className="text-red-600">Photography</h2>
                  <p>A separate kind of photo art , that requires incredible skill of the photographer, it is a portrait photographer.</p>
                </div>
                <div className="py-4">
                  <h2 className="text-red-600">Videography</h2>
                  <p>It's the promotion of your company in the market, winning the presentation of goods and services.</p>
                </div>
                <div className="py-4">
                  <h2 className="text-red-600">Software Development</h2>
                  <p>Working closely with computer programmers, we fill crucial roles in the computer systems, manufacturing, finance, and software publishing industries.</p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <section className="py-8">
          <article>
            <div className="reveal fade-left">
              <div className="md:grid grid-cols-2 gap-4">
                <div className="space-y-4 pb-6">
                  <h1 className="text-red-600">Common Services</h1>
                  <div className="md:flex space-x-2">
                    <span>01</span>
                    <div>
                      <h3>Commercial photography</h3>
                      <p>We help you make a better first impression. We provide commercial photography .</p>
                    </div>
                  </div>
                  <div className="md:flex space-x-2">
                    <span>02</span>
                    <div>
                      <h3>Catalog photography</h3>
                      <p>You need to carry out a professional subject shooting, as it is said - catalog shoot?</p>
                    </div>
                  </div>
                  <div className="md:flex space-x-2">
                    <span>03</span>
                    <div>
                      <h3>Macro photography</h3>
                      <p>We offer its most specialised service - macro photography – the photography .</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-600 text-white text-center py-8 space-y-5">
                  <h1>Special Offers</h1>
                  <div>
                    <h3>Print Gallery</h3>
                    <p>Professional photographer with pleasure will implement your order.</p>
                  </div>
                  <div>
                    <h3>Master-classes</h3>
                    <p>Creativity and development is necessary for all of us!</p>
                  </div>
                </div>

                
                <div className="md:grid grid-cols-2 gap-2 py-6">
                  <div className="space-y-5 pt-3">
                    <img src="https://template59499.motopreview.com/mt-demo/59400/59499/mt-content/uploads/2017/04/mt-0959-home-icon4.png" alt="" />
                    <h3>Portait Shoot</h3>
                    <p>A separate kind of photo art , that requires incredible skill of the photographer, is a portrait photography. In the portrait art everything is of great importance...</p>
                  </div>
                  <div className="space-y-5 pt-4">
                    <img src="https://template59499.motopreview.com/mt-demo/59400/59499/mt-content/uploads/2017/04/mt-0959-home-icon5.png" alt="" />
                    <h3>Weeding Photograph</h3>
                    <p>Wedding photographs give an opportunity to experience the joyful moments of the day. In our studio we try hard to make the distance vanish between the loving hearts ...</p>
                  </div>
                  <div className="space-y-5 pt-4">
                    <img src="https://template59499.motopreview.com/mt-demo/59400/59499/mt-content/uploads/2017/04/mt-0959-home-icon6.png" alt="" />
                    <h3>Travel Photography</h3>
                    <p>We can help you make photos of any place! By means of photography we can recollect our past and connect it with the present.</p>
                  </div>
                  <div className="space-y-5 pt-4">
                    <img src="https://template59499.motopreview.com/mt-demo/59400/59499/mt-content/uploads/2017/04/mt-0959-home-icon7.png" alt="" />
                    <h3>Studio Photography</h3>
                    <p>Studio photography requires special art of the photographer, and a studio genre is perhaps of greatest popularity...</p>
                  </div>
                </div>
                
                <div className="bg-red-600 text-white text-center p-4">
                  <h1><u>Other Services</u></h1>
                  <h3 className="py-2 hover:border hover:border-slate-300"><Link to="/birthday">Birthday Shoot</Link></h3>
                  <h3 className="py-2 hover:border hover:border-slate-300"><Link to="/events">Event Shoot</Link></h3>
                  <h3 className="py-2 hover:border hover:border-slate-300"><Link to="/graduation">Graduations Shoot</Link></h3>
                  <h3 className="py-2 hover:border hover:border-slate-300"><Link to="/baby">Baby Shoot</Link></h3>
                  <h3 className="py-2 hover:border hover:border-slate-300"><Link to="/street">Street Shoot</Link></h3>
                  <h3 className="py-2 hover:border hover:border-slate-300"><Link to="/wedding">Weeding Shoot</Link></h3>
                  <h3 className="py-2 hover:border hover:border-slate-300"><Link to="/baby-showers">Baby Shower Shoot</Link></h3>
                  <h3 className="py-2 hover:border hover:border-slate-300"><Link to="/baby">Baby Shoot</Link></h3>
                </div>
              </div>
            </div>
          </article>
        </section>


        <div className="text-center py-8">
          <section id="feature">
            <div className="title-text">
              <p><b>Meet Our Team</b></p>
            </div>
          </section>
          <p>Our team of professionals have experience in photograhy, vediography and many other.</p>
          <br />
          
          <article>
            <div className="reveal fade-left">
              <div className="md:grid grid-cols-3 gap-4 mt-4">
                <div className="shadow-2xl shadow-slate-600 p-4 space-y-4">
                  <img className="rounded-full" src="https://themesfamily.com/tm/jabber/assets/img/team/2.png" alt="" />
                  <h2>John Carloz</h2>
                  <p>Photographer</p>
                  <div className="flex justify-center space-x-3 text-lg">
                    <a className="hover:text-green-700" href="https://carloz.vercel.app/"><BsGlobe2/></a>
                    <a className="hover:text-indigo-600" href="/"><FaInstagram/></a>
                    <a className="hover:text-blue-700" href="/"><FaFacebookF/></a>
                  </div>
                </div>
                <div className="shadow-2xl shadow-slate-600 p-4 space-y-4">
                  <img className="rounded-full" src="https://themesfamily.com/tm/jabber/assets/img/team/1.png" alt="" />
                  <h2>Lee</h2>
                  <p>Videographer</p>
                  <div className="flex justify-center space-x-3 text-lg">
                    <a className="hover:text-green-700" href="/"><BsGlobe2/></a>
                    <a className="hover:text-indigo-600" href="/"><FaInstagram/></a>
                    <a className="hover:text-blue-700" href="/"><FaFacebookF/></a>
                  </div>
                </div>
                <div className="shadow-2xl shadow-slate-600 p-4 space-y-3">
                  <img className="rounded-full" src="https://themesfamily.com/tm/jabber/assets/img/team/3.png" alt="" />
                  <h2>Gregory Mark</h2>
                  <p>Web Developer</p>
                  <div className="flex justify-center space-x-3 text-lg">
                    <a className="hover:text-green-700" href="https://gregorymark.netlify.app/"><BsGlobe2/></a>
                    <a className="hover:text-indigo-600" href="/"><FaInstagram/></a>
                    <a className="hover:text-blue-700" href="/"><FaFacebookF/></a>
                  </div>
                </div>
              </div>
            </div>
          </article>
          
        </div>
        <br />
        <br />
      </div>
    </main>
  )
}

export default About
