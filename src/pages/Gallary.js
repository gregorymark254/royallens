import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import image1 from '../images/client/Royallenske.JPG'
import image2 from '../images/client/Royallenskee.JPG'
import image3 from '../images/client/Royallenskeee.JPG'
import image4 from '../images/client/fashion.JPG'
import image5 from '../images/client/fashionn.JPG'

const Gallary = () => {

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
        <section id="feature">
          <div className="title-text">
            <p><h1><b>My Potrfolio</b></h1></p>
          </div>
        </section>
        <div className="text-center pb-6">
          <p>ROYAL LENS has photographers for all specialties (or at least all the G-rated ones). Click to see portfolio samples.</p>
          <p>EVERY PHOTO TELLS A STORY.</p>
        </div>

        
        <div className="md:grid grid-cols-3 gap-6 text-center client">
          <div className="hover:brightness-50 py-4">
            <Link to="/potraits">
              <img src={image1} alt="portaits" width="400" height="300" />
              <h2>Portaits</h2>
              <p className="flex justify-center items-center animate-bounce">The beauty of moments &nbsp;<BsArrowRight/></p>
            </Link>
          </div>
          <div className="hover:brightness-50 py-4">
            <Link to="/personal">
              <img src={image2} alt="portaits" width="400" height="300" />
              <h2>Personal Shoots</h2>
              <p className="flex justify-center items-center animate-bounce">The beauty of moments &nbsp;<BsArrowRight/></p>
            </Link>
          </div>
          <div className="hover:brightness-50 py-4">
            <Link to="/studio">
              <img src={image3} alt="portaits" width="400" height="300" />
              <h2>Studio Shot</h2>
              <p className="flex justify-center items-center animate-bounce">The beauty of moments &nbsp;<BsArrowRight/></p>
            </Link>
          </div>
        </div>

        <article>
          <div className="reveal fade-bottom">
            <div className="md:grid grid-cols-3 gap-6 text-center client">
              <div className="hover:brightness-50 py-4">
                <Link to="/events">
                  <img src={image4} alt="portaits" width="400" height="300" />
                  <h2>Events</h2>
                  <p className="flex justify-center items-center animate-bounce">The beauty of moments &nbsp;<BsArrowRight/></p>
                </Link>
              </div>
              <div className="hover:brightness-50 py-4">
                <Link to="/birthday">
                  <img src={image5} alt="portaits" width="400" height="300" />
                  <h2>Birthday</h2>
                  <p className="flex justify-center items-center animate-bounce">The beauty of moments &nbsp;<BsArrowRight/></p>
                </Link>
              </div>
              <div className="hover:brightness-50 py-4">
                <Link to="/street">
                  <img src={image2} alt="portaits" width="400" height="300" />
                  <h2>Street</h2>
                  <p className="flex justify-center items-center animate-bounce">The beauty of moments &nbsp;<BsArrowRight/></p>
                </Link>
              </div>
            </div>
          </div>
        </article>

        <article>
          <div className="reveal fade-bottom">
            <div className="md:grid grid-cols-3 gap-6 text-center client">
              <div className="hover:brightness-50 py-4">
                <Link to="/couples">
                  <img src={image4} alt="portaits" width="400" height="300" />
                  <h2>Couples</h2>
                  <p className="flex justify-center items-center animate-bounce">The beauty of moments &nbsp;<BsArrowRight/></p>
                </Link>
              </div>
              <div className="hover:brightness-50 py-4">
                <Link to="/baby-showers">
                  <img src={image5} alt="portaits" width="400" height="300" />
                  <h2>Baby Showers</h2>
                  <p className="flex justify-center items-center animate-bounce">The beauty of moments &nbsp;<BsArrowRight/></p>
                </Link>
              </div>
              <div className="hover:brightness-50 py-4">
                <Link to="/baby">
                  <img src={image2} alt="portaits" width="400" height="300" />
                  <h2>Baby Bump</h2>
                  <p className="flex justify-center items-center animate-bounce">The beauty of moments &nbsp;<BsArrowRight/></p>
                </Link>
              </div>
            </div>
          </div>
        </article>

        <article>
          <div className="reveal fade-bottom">
            <div className="md:grid grid-cols-3 gap-6 text-center client">
              <div className="hover:brightness-50 py-4">
                <Link to="/graduation">
                  <img src={image5} alt="portaits" width="400" height="300" />
                  <h2>Graduation</h2>
                  <p className="flex justify-center items-center animate-bounce">The beauty of moments &nbsp;<BsArrowRight/></p>
                </Link>
              </div>
              <div className="hover:brightness-50 py-4">
                <Link to="/wedding">
                  <img src={image2} alt="portaits" width="400" height="300" />
                  <h2>Weddings</h2>
                  <p className="flex justify-center items-center animate-bounce">The beauty of moments &nbsp;<BsArrowRight/></p>
                </Link>
              </div>
              <div className="hover:brightness-50 py-4">
                <Link to="/commercial">
                  <img src={image2} alt="portaits" width="400" height="300" />
                  <h2>Commercial</h2>
                  <p className="flex justify-center items-center animate-bounce">The beauty of moments &nbsp;<BsArrowRight/></p>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}





export default Gallary