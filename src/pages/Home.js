import React from 'react'
import 'tw-elements';
import img2 from '../images/hero/COVER.jpg'
import img1 from '../images/hero/COVER.jpg'
import img3 from '../images/hero/COVER.jpg'
import erick from '../images/client/erick.jpg'
import sonia from '../images/client/sonia.jpg'
import notiflow from '../images/client/notiflow.jpg'
import glen from '../images/client/glen.JPG'
import teddy from '../images/client/teddy.JPG'
import tatu from '../images/client/tatu.jpg'
import sylvia from '../images/client/sylvia.jpg'
import makenah from '../images/client/makenah.jpg'
import njoki from '../images/client/njoki.jpg'
import lian from '../images/client/lian.JPG'
import samira from '../images/client/samira.jpg'
import suzzy from '../images/client/suzzy.jpg'
import { FaCameraRetro, FaServicestack,FaIdCard,FaBook } from "react-icons/fa";
import { MdCall,MdPhotoLibrary } from "react-icons/md";

const Home = () => {

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
      {/* Hero section */}
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
          <div className="carousel-item active relative float-left w-full landing">
            <img
              src={img2}
              className="w-full min-h-screen"
              alt=""
            />
            <div className="carousel-caption hidden md:block absolute text-center word">
              <h5 className="text-5xl">Royal Lens Ke.</h5>
              <p>Capture your best moments.</p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full landing">
            <img
              src={img1}
              className="w-full min-h-screen"
              alt=""
            />
            <div className="carousel-caption hidden md:block absolute text-center word">
              <h5 className="text-5xl">Photography is poetry.</h5>
              <p>Great photography shouldn't be so hard.</p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full landing">
            <img
              src={img3}
              className="w-full min-h-screen"
              alt=""
            />
            <div className="carousel-caption hidden md:block absolute text-center word">
              <h5 className="text-5xl">Capturing Moments.</h5>
              <p>Ideas that capture beautiful moments.</p>
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
      <div className="container mx-auto md:flex justify-center p-4">
        <div className="flex space-x-2 m-4 items-center justify-center border border-slate-400 py-6 px-16 text-orange-400 hover:bg-orange-400 hover:text-black">
          <FaBook/>
          <a href="mailto:royallenske@gmail.com"><b>BOOK NOW</b></a>
        </div>
        <div className="flex space-x-2 m-4 items-center justify-center border border-slate-400 py-6 px-16 text-orange-400 hover:bg-orange-400 hover:text-black">
          <MdCall/>
          <a href="tel:+254111522255"><b>CALL US</b></a>
        </div>
      </div>
      <br />

      <section className="hero">
        <div className="hero-inner">
          <h4>We capture your best moments and bring them to life.</h4>
          <br />
          <div className="text-box">
            <h1>ROYAL LENS</h1>
          </div>
          <a href="https://instagram.com/_royal.lens.ke?utm_media=copy_link" className="border-2 border-white hover:bg-white hover:text-black  px-6 py-3">EXPLORE</a>
        </div>
      </section>
        
      {/* Experience */}
      <section className="container mx-auto p-4">
        <div className="md:grid grid-cols-3 gap-9 text-center py-9">
          <div className="py-4">
            <span className="text-8xl text-orange-400 flex justify-center"><FaCameraRetro/></span>
            <h3><b>Amazing, fully-vetted photographers</b></h3>
            <p>We are good photographers who are passionate about photography and willing to learn and improve continuously.</p>
          </div>
          <div className="py-4">
            <span className="text-8xl text-orange-400 flex justify-center"><FaServicestack/></span>
            <h3><b>Exceptional customer service</b></h3>
            <p>We don't want to push our ideas on to customers, we simply want to make what they want to the highest level of service to every person, regardless of the circumstances.</p>
          </div>
          <div className="py-4">
            <span className="text-8xl text-orange-400 flex justify-center"><FaIdCard/></span>
            <h3><b>Photography quality guarantee</b></h3>
            <p>We take great pride in our photo books and albums, and confidently stand by the products we create which are made to last a lifetime.</p>
          </div>
        </div>

        <div>
          {/* Clients */}
          <div className="text-center">
            <section id="feature">
              <div className="title-text">
                <p><b>Some of the people I've worked with.</b></p>
              </div>
            </section>
            
            <div className="md:grid grid-cols-4 gap-3 clients">
              <article>
                <div className="reveal fade-bottom">
                  <img src={erick} alt="" />
                  <p>Erick Omondi </p>
                </div>
              </article>
              <article>
                <div className="reveal fade-bottom">
                  <img src={sonia} alt="" />
                  <p>Sonia Pinto</p>
                </div>
              </article>
              <article>
                <div className="reveal fade-bottom">
                  <img src={notiflow} alt="" />
                  <p>Noti Flow</p>
                  </div>
              </article>
              <article>
                <div className="reveal fade-bottom">
                  <img src={suzzy} alt="" />
                  <p>Suzzy</p>
                  </div>
              </article>
              <article>
                <div className="reveal fade-bottom">
                  <img src={glen} alt="" />
                  <p>Glen Fiddich</p>
                  </div>
              </article>
              <article>
                <div className="reveal fade-bottom">
                  <img src={teddy} alt="" />
                  <p>Teddy Treffers</p>
                  </div>
              </article>
              <article>
                <div className="reveal fade-bottom">
                  <img src={tatu} alt="" />
                  <p>Tatu Dorothy</p>
                  </div>
              </article>
              <article>
                <div className="reveal fade-bottom">
                  <img src={sylvia} alt="" />
                  <p>Sylvia</p>
                  </div>
              </article>
              <article>
                <div className="reveal fade-bottom">
                  <img src={makenah} alt="" />
                  <p>Makenah</p>
                  </div>
              </article>
              <article>
                <div className="reveal fade-bottom">
                  <img src={njoki} alt="" />
                  <p>Njoki Mburu</p>
                  </div>
              </article>
              <article>
                <div className="reveal fade-bottom">
                  <img src={lian} alt="" />
                  <p>Lian Brian</p>
                  </div>
              </article>
              <article>
                <div className="reveal fade-bottom">
                  <img src={samira} alt="" />
                  <p>Samira</p>
                </div>
              </article>
            </div>
          </div>

          {/* Text */}
          <div className="text-orange-500 py-4">
            <h2>We are a creative team passionate about photography. We love shooting. While capturing your precious moments we enjoy the way this form is art fills us with
              emotions, joy and happiness.
            </h2>
          </div>

          {/* How we work */}
          <div>
            <section id="feature">
              <div className="title-text">
                <p><b className="text-6xl py-7">HOW WE WORK.</b></p>
              </div>
            </section>
            <div className="md:flex">
              <article>
                <div className="w-full p-4 reveal fade-left">
                  <img className="w-full h-full" src="https://ld-wp.template-help.com/wordpress_prod-22230/v2/wp-content/uploads/2019/02/about-img-2-1.png" alt="" />
                </div>
              </article>
              <article>
                <div className="w-full space-y-6 reveal fade-right">
                  <div className="md:flex space-x-6">
                    <div>
                      <span className="text-8xl text-orange-400 p-4 flex justify-center"><FaBook/></span>
                    </div>
                    <div>
                      <h3>01. Booking</h3>
                      <p>Reach us and describe the session you want, create an appointment, and quickly fill empty calendar spots with Royal Lens.</p>
                    </div>
                  </div>
                  <div className="md:flex space-x-6">
                    <div>
                      <span className="text-8xl text-orange-400 p-4 flex justify-center"><FaCameraRetro/></span>
                    </div>
                    <div>
                      <h3>02. Photoshoot</h3>
                      <p>Pose for the session inside a studio or other outdoor locations in order to take multiple photos.</p>
                    </div>
                  </div>
                  <div className="md:flex space-x-6">
                    <div>
                      <span className="text-8xl text-orange-400 p-4 flex justify-center"><MdPhotoLibrary/></span>
                    </div>
                    <div>
                      <h3>03. Ready to receive photos.</h3>
                      <p>Get ready images fully edited snapshots of the session you had after 4-5 working days.</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Testimonials */}
          <main>
            <section id="feature">
              <div className="title-text">
                <p><b>Testimonials</b></p>
              </div>
            </section>
            <div id="carouselExampleCaptions" className="carousel slide relative carousel-dark" data-bs-ride="carousel">
              <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full text-center">
                  <div className="mt-12 mb-6 flex justify-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                      className="rounded-full w-24 h-24 shadow-lg"
                      alt=""
                    />
                  </div>
                  <p className="text-gray-500">- John Carlos O -</p>
                  <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                    "Photography for me is not looking, it’s feeling. If you can’t feel what you’re looking at,
                      then you’re never going to get others to feel anything when they look at your pictures.!"
                  </p>
                </div>
                <div className="carousel-item relative float-left w-full text-center">
                  <div className="mt-12 mb-6 flex justify-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                      className="rounded-full w-24 h-24 shadow-lg"
                      alt=""
                    />
                  </div>
                  <p className="text-gray-500">- Erick Omondi -</p>
                  <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                    "A good photograph is one that communicates a fact, touches the heart and leaves the viewer a changed person for having seen it. 
                     It is, in a word, effective."
                  </p>
                </div>
                <div className="carousel-item relative float-left w-full text-center">
                  <div className="mt-12 mb-6 flex justify-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                      className="rounded-full w-24 h-24 shadow-lg"
                      alt=""
                    />
                  </div>
                  <p className="text-gray-500">- Noty Flow -</p>
                  <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
                    "Life is like a camera. Just focus on what’s important and capture the good times, develop from the negatives and if things don’t work out, 
                     just take another shot."
                  </p>
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
          </main>

          {/* About */}
          <main className="md:grid grid-cols-2 py-16">
            <article>
              <div className="reveal fade-left">
                <div className="py-2">
                  <img className src="https://template59495.motopreview.com/mt-demo/59400/59495/mt-content/uploads/2017/03/mt-0911-home-welcome1.jpg" alt="" />
                  <p>Instead of an easel - a tripod. Instead of brushes - a camera that transmits feelings and emotions in one shot. And one day opening the album, reviewing pictures
                    in the minds memories begin to emerge, the same emotions that had been on the day of the shooting. And by the will of a smile appears on the face, and maybe even tears of joy.
                  </p>
                </div>
              </div>
            </article>
            <article>
              <div className="reveal fade-right">
                <div className="py-2">
                  <img src="https://template59495.motopreview.com/mt-demo/59400/59495/mt-content/uploads/2017/03/mt-0911-home-welcome2.jpg" alt="" />
                  <p>Photography has become an integral part of our lives. Agree, it is difficult sometimes to keep everything in memory only. Time is so fleeting. But it's nice to sit in the evening with 
                    loved ones, open the album and relive all of your important moments. After working with us, you will see that this is just an excuse!
                  </p>
                </div>
              </div>
            </article>      
          </main>
        </div>
      </section>
      
      {/* Images */}
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
