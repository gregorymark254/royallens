import React from 'react'
import { BsGlobe2 } from "react-icons/bs";
import { FaFacebookF,FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const About = () => {

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

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
            <img className="h-full object-cover" src="https://i.postimg.cc/J0JQG74R/Royallensk.jpg" alt="" loading="lazy" />
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
                  <p>Photography for me is not looking, it’s feeling. If you can’t feel what you’re looking at, then you’re never going to get others to feel
                      anything when they look at your pictures.
                   </p>
                </div>
                <div className="py-4">
                  <h2 className="text-red-600">Videography</h2>
                  <p>For me, filmmaking combines everything. That’s the reason I’ve made cinema my life’s work. In films, painting and literature, theatre and music come together.</p>
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
                      <h3>Catalogue photography</h3>
                      <p>You need to carry out a professional subject shooting, as it is said - catalogue shoot?</p>
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

                <div className="bg-[#DC5F00] text-white text-center py-8 space-y-5">
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
                    <h3>Potrait Shoot</h3>
                    <p>A separate kind of photo art , that requires incredible skill of the photographer, is a portrait photography. In the portrait art everything is of great importance...</p>
                  </div>
                  <div className="space-y-5 pt-4">
                    <img src="https://template59499.motopreview.com/mt-demo/59400/59499/mt-content/uploads/2017/04/mt-0959-home-icon5.png" alt="" />
                    <h3>Wedding Photograph</h3>
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
                
                <div className="bg-[#DC5F00] text-white text-center p-4">
                  <h1><u>Other Services</u></h1>
                  <h3 className="py-2 hover:border hover:border-slate-300"><a href="/birthday">Birthday Shoot</a></h3>
                  <h3 className="py-2 hover:border hover:border-slate-300"><a href="/events">Event Shoot</a></h3>
                  <h3 className="py-2 hover:border hover:border-slate-300"><a href="/graduation">Graduations Shoot</a></h3>
                  <h3 className="py-2 hover:border hover:border-slate-300"><a href="/baby">Baby Shoot</a></h3>
                  <h3 className="py-2 hover:border hover:border-slate-300"><a href="/street">Street Shoot</a></h3>
                  <h3 className="py-2 hover:border hover:border-slate-300"><a href="/wedding">Wedding Shoot</a></h3>
                  <h3 className="py-2 hover:border hover:border-slate-300"><a href="/baby-showers">Baby Shower Shoot</a></h3>
                  <h3 className="py-2 hover:border hover:border-slate-300"><a href="/baby">Baby Shoot</a></h3>
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
              <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
                <div className="mb-6 lg:mb-0">
                  <div className="bg-white block rounded-lg shadow-lg">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover">
                      <img src="https://i.postimg.cc/J0JQG74R/Royallensk.jpg"className="w-full h-full rounded-t-lg" alt="" loading="lazy" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                      </a>
                      <svg className="absolute left-0 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#fff"
                          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        </path>
                      </svg>
                    </div>
                    <div className="p-6">
                      <h5 className="text-lg font-bold mb-4">John Carlos O</h5>
                      <p className="text-gray-500 mb-4">CEO & Founder</p>
                      <p className="text-gray-500 mb-4">Main Photographer & Videographer</p>
                      <div className="flex justify-center space-x-3 text-lg">
                        <a className="hover:text-orange-500 text-green-700" href="https://carloz.vercel.app/"><BsGlobe2/></a>
                        <a className="hover:text-orange-500 text-indigo-600" href="https://instagram.com/_royal.lens.ke?utm_media=copy_link"><FaInstagram/></a>
                        <a className="hover:text-orange-500 text-blue-700" href="https://www.facebook.com/profile.php?id=100008989771011"><FaFacebookF/></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6 lg:mb-0">
                  <div className="bg-white block rounded-lg shadow-lg">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover">
                      <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" className="w-full h-full rounded-t-lg" alt="" loading="lazy" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                      </a>
                      <svg className="absolute left-0 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#fff"
                          d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        </path>
                      </svg>
                    </div>
                    <div className="p-6">
                      <h5 className="text-lg font-bold mb-4">Lewis</h5>
                      <p className="text-gray-500 mb-4">2nd Photographer</p>
                      <div className="flex justify-center space-x-3 text-lg">
                        <a className="hover:text-orange-500 text-green-700" href="/"><BsGlobe2/></a>
                        <a className="hover:text-orange-500 text-indigo-600" href="/"><FaInstagram/></a>
                        <a className="hover:text-orange-500 text-blue-700" href="/"><FaFacebookF/></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="bg-white block rounded-lg shadow-lg">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover">
                      <img src="https://markgregory.netlify.app/static/media/img.42f46daf7ecd918e0b32.jpg" className="w-full h-full rounded-t-lg" alt="" loading="lazy" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                      </a>
                      <svg className="absolute left-0 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#fff"
                          d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        </path>
                      </svg>
                    </div>
                    <div className="p-6">
                      <h5 className="text-lg font-bold mb-4">Gregory Mark</h5>
                      <p className="text-gray-500 mb-4">Web Developer</p>
                      <div className="flex justify-center space-x-3 text-lg">
                        <a className="hover:text-orange-500 text-green-700" href="https://gregorymark.netlify.app/"><BsGlobe2/></a>
                        <a className="hover:text-orange-500 text-indigo-600" href="/"><FaInstagram/></a>
                        <a className="hover:text-orange-500 text-green-700" href="https://wa.me/+254798551778"><IoLogoWhatsapp/></a>
                      </div>
                    </div>
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
