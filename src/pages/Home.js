import React from 'react'
import 'tw-elements';
import img1 from '../images/hero/black.jpg'
import img2 from '../images/hero/black2.jpg'
import img3 from '../images/hero/black7.jpg'
// import img4 from '../images/hero/black9.jpg'
// import carloz from '../images/portfolio/Royallensk.jpg'
import sa from '../images/client/Royallenske.JPG'
import saa from '../images/client/Royallenskee.JPG'
import saaa from '../images/client/Royallenskeee.JPG'
import saaaa from '../images/client/fashion.JPG'
import saaaaa from '../images/client/fashionn.JPG'
import saaaaaa from '../images/client/potraits.JPG'
import { FaCameraRetro, FaServicestack,FaIdCard,FaBook } from "react-icons/fa";
import { MdCall,MdPhotoLibrary } from "react-icons/md";

const Home = () => {
  return (
    <main>
      {/* Hero section */}
      {/* <section>
        <div id="slider">
          <figure>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img4} alt="" />
          </figure>
        </div>
  
        <div id="banner">
          <div className="text-box">
            <h1>CAPTURE YOUR BEST MOMENTS</h1>
            <div className="row">
              <a href="https://www.instagram.com/_royal.lens.ke/?hl=en">EXPLORE PORTFOLIO <span>&#8594;</span></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=odhiambojohncarlos81@gmail.com&body=my-text">BOOK NOW <span></span>&#8594;</a>
            </div>
          </div>           
        </div>
      </section> */}
      <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full ">
      <img
        src={img1}
        className="w-full "
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full ">
      <img
        src={img2}
        className="w-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full ">
      <img
        src={img3}
        className="w-full "
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      <br />  

      {/* Body section */}
    
      {/* <div>
        <h1 className="text-center text-red-500 py-4 ">Portfolio</h1>
      </div>
      <div className="md:grid grid-cols-2 gap-6 py-8">
        <div>
          <img className="h-full object-cover" src={carloz} alt="" />
        </div>
        <div className="space-y-8 pt-6">
          <h1 className="font-bold text-5xl text-red-500">Have you ever thought who is the photographer?</h1>
          <p> Hello,
              <br/>
              I'm Carlos an award winning professsional photographer based in kenya.Photography is my passion and i have a good scale of experience.
              Carlos is a magician at his job he brings life into the camera and makes the most valued moments of your life so memorable.His ideas are 
              Unique as he seeks to make outstanding content.He values customer satisfaction and makes it his No.1 priority.It's Amazing how he can 
              use the art of photography to capture a split second of something exquisite.
          </p>
          <p className="text-lg">Maybe, an artist. Instead of an easel - a tripod. Instead of brushes - a camera that transmits feelings and emotions in one shot. And one day opening the album,
            reviewing pictures in the minds memories begin to emerge, the same emotions that had been on the day of the shooting.
          </p>
          <h3>Call us : +254 111 522 255</h3>
        </div>
      </div> */}

      <div className="container mx-auto md:flex justify-center p-4">
        <div className="flex space-x-2 m-4 items-center justify-center border border-slate-400 py-6 px-16 text-orange-400">
          <FaBook/>
          <span><b>BOOK NOW</b></span>
        </div>
        <div className="flex space-x-2 m-4 items-center justify-center border border-slate-400 py-6 px-16 text-orange-400">
          <MdCall/>
          <span><b>CALL US</b></span>
        </div>
      </div>
      <br />

      <section className="hero">
        <div className="hero-inner">
            <h4>Great photography shouldn’t be so hard.</h4>
            <br />
            <h1>ROYAL LENS</h1>
            <a href="/programs" className="border-2 border-white hover:bg-white hover:text-black  px-6 py-3">BOOK NOW</a>
        </div>
      </section>
        
      <section className="container mx-auto p-4">
        <div className="md:grid grid-cols-3 gap-9 text-center py-9">
          <div className="py-4">
            <span className="text-8xl text-orange-400 flex justify-center"><FaCameraRetro/></span>
            <h3><b>Amazing, fully-vetted photographers</b></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lobortiser.</p>
          </div>
          <div className="py-4">
            <span className="text-8xl text-orange-400 flex justify-center"><FaServicestack/></span>
            <h3><b>Exceptional customer service</b></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lobortiser.</p>
          </div>
          <div className="py-4">
            <span className="text-8xl text-orange-400 flex justify-center"><FaIdCard/></span>
            <h3><b>Photography quality guarantee</b></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lobortiser.</p>
          </div>
        </div>

        <div>
          <div className="text-center">
            <section id="feature">
              <div className="title-text">
                <p><h1><b>Our Best Clients</b></h1></p>
              </div>
            </section>
            
            <div className="md:grid grid-cols-3 gap-3 clients">
              <div>
                <img src={sa} alt="" />
                <p>Linda </p>
              </div>
              <div>
                <img src={saa} alt="" />
                <p>Swat</p>
              </div>
              <div>
                <img src={saaa} alt="" />
                <p>Eric Johnson</p>
              </div>
              <div>
                <img src={saaaa} alt="" />
                <p>Gregory</p>
              </div>
              <div>
                <img src={saaaaa} alt="" />
                <p>Carloz</p>
              </div>
              <div>
                <img src={saaaaaa} alt="" />
                <p>Hamidah</p>
              </div>
            </div>
          </div>

          <div className="text-orange-500 py-4">
            <h2>We are a creative team passionate about photography. We love shooting. While capturing your precious moments we enjoy the way this form is art fills us with
              emotions, joy and happiness.
            </h2>
          </div>

          <div>
            <section id="feature">
              <div className="title-text">
                <p><h1><b><h1 className="text-6xl py-7"><b>HOW WE WORK.</b></h1></b></h1></p>
              </div>
            </section>
            <div className="md:flex">
              <div className="w-full p-4">
                <img src="https://ld-wp.template-help.com/wordpress_prod-22230/v2/wp-content/uploads/2019/02/about-img-2-1.png" alt="" />
              </div>
              <div className="w-full space-y-6">
                <div className="md:flex space-x-6">
                  <div>
                    <span className="text-8xl text-orange-400 p-4 flex justify-center"><FaBook/></span>
                  </div>
                  <div>
                    <h3>01. Booking</h3>
                    <p>Lorem ipsum dolor sit amet, consecteturadipiscing elit. Donec eu lobortiser.</p>
                  </div>
                </div>
                <div className="md:flex space-x-6">
                  <div>
                    <span className="text-8xl text-orange-400 p-4 flex justify-center"><FaCameraRetro/></span>
                  </div>
                  <div>
                    <h3>02. Photoshoot</h3>
                    <p>Lorem ipsum dolor sit amet, consecteturadipiscing elit. Donec eu lobortiser.</p>
                  </div>
                </div>
                <div className="md:flex space-x-6">
                  <div>
                    <span className="text-8xl text-orange-400 p-4 flex justify-center"><MdPhotoLibrary/></span>
                  </div>
                  <div>
                    <h3>03. Ready to receive photos.</h3>
                    <p>Lorem ipsum dolor sit amet, consecteturadipiscing elit. Donec eu lobortiser.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="md:grid grid-cols-2 py-16">
            <img className src="https://template59495.motopreview.com/mt-demo/59400/59495/mt-content/uploads/2017/03/mt-0911-home-welcome1.jpg" alt="" />
            <img src="https://template59495.motopreview.com/mt-demo/59400/59495/mt-content/uploads/2017/03/mt-0911-home-welcome2.jpg" alt="" />
            <p>Instead of an easel - a tripod. Instead of brushes - a camera that transmits feelings and emotions in one shot. And one day opening the album, reviewing pictures
              in the minds memories begin to emerge, the same emotions that had been on the day of the shooting. And by the will of a smile appears on the face, and maybe even tears of joy.
            </p>
            <p>Photography has become an integral part of our lives. Agree, it is difficult sometimes to keep everything in memory only. Time is so fleeting. But it's nice to sit in the evening with 
              loved ones, open the album and relive all of your important moments. After working with us, you will see that this is just an excuse!
            </p>
          </div>
        </div>
      </section>
      

      <div className="md:grid grid-cols-2">
        <div>
          <img className="w-full" src="https://template59495.motopreview.com/mt-demo/59400/59495/mt-content/uploads/2017/03/mt-0911-home-gallery2-small2.jpg" alt="" />
        </div>
        <div>
          <img className="w-full" src="https://template59495.motopreview.com/mt-demo/59400/59495/mt-content/uploads/2017/03/mt-0911-home-gallery2-small7.jpg" alt="" />
        </div>
      </div>


      <div>
        <div className="md:grid grid-cols-4">
          <img src="https://template59495.motopreview.com/mt-demo/59400/59495/mt-content/uploads/2017/03/mt-0911-home-gallery1-small1.jpg" alt="" />
          <img src="https://template59495.motopreview.com/mt-demo/59400/59495/mt-content/uploads/2017/03/mt-0911-home-gallery1-small2.jpg" alt="" />
          <img src="https://template59495.motopreview.com/mt-demo/59400/59495/mt-content/uploads/2017/03/mt-0911-home-gallery1-small3.jpg" alt="" />
          <img src="https://template59495.motopreview.com/mt-demo/59400/59495/mt-content/uploads/2017/03/mt-0911-home-gallery1-small4.jpg" alt="" />
        </div>
      </div>

      
    </main>
  )
}

export default Home
