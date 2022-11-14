import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import baby from '../images/babybump/cover.JPG'
import birthday from '../images/babybump/cover.JPG'
import commercial from '../images/commercial/commercial.JPG'
import couples from '../images/couples/cover.JPG'
import events from '../images/events/cover.jpg'
import grad from '../images/graduation/grad1.jpg'
import person from '../images/personal/cover.jpg'
import potrait from '../images/potrait/potrait.jpg'
import street from '../images/street/street1.jpg'
import studio from '../images/studio/cover.jpg'
import wedding from '../images/wedding/cover.jpg'

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
          <p><b className="text-orange-400 font-bold">ROYAL LENS</b> has photographers for all specialties (or at least all the G-rated ones). Click to see portfolio samples.</p>
          <p><b>EVERY PHOTO TELLS A STORY.</b></p>
        </div>

        
        <div className="md:grid grid-cols-3 gap-6 text-center client">
          <div className="hover:brightness-50 py-4">
            <a href="/potraits">
              <img src={potrait} alt="portaits" width="400" height="300" />
              <h2>Portaits</h2>
              <p className="flex justify-center items-center animate-bounce">The beauty of moments &nbsp;<BsArrowRight/></p>
            </a>
          </div>
          <div className="hover:brightness-50 py-4">
            <a href="/personal">
              <img src={person} alt="portaits" width="400" height="300" />
              <h2>Personal Shoots</h2>
              <p className="flex justify-center items-center animate-bounce">Be yourself &nbsp;<BsArrowRight/></p>
            </a>
          </div>
          <div className="hover:brightness-50 py-4">
            <a href="/studio">
              <img src={studio} alt="portaits" width="400" height="300" />
              <h2>Studio Shot</h2>
              <p className="flex justify-center items-center animate-bounce">Capture your imaginations &nbsp;<BsArrowRight/></p>
            </a>
          </div>
        </div>

        <article>
          <div className="reveal fade-bottom">
            <div className="md:grid grid-cols-3 gap-6 text-center client">
              <div className="hover:brightness-50 py-4">
                <a href="/events">
                  <img src={events} alt="portaits" width="400" height="300" />
                  <h2>Events</h2>
                  <p className="flex justify-center items-center animate-bounce">Creating the best day &nbsp;<BsArrowRight/></p>
                </a>
              </div>
              <div className="hover:brightness-50 py-4">
                <a href="/birthday">
                  <img src="https://royalens.netlify.app/images/birth.jpg" alt="portaits" width="400" height="300" />
                  <h2>Birthday</h2>
                  <p className="flex justify-center items-center animate-bounce">It's your special day &nbsp;<BsArrowRight/></p>
                </a>
              </div>
              <div className="hover:brightness-50 py-4">
                <a href="/street">
                  <img src={street} alt="portaits" width="400" height="300" />
                  <h2>Street</h2>
                  <p className="flex justify-center items-center animate-bounce">Get out there and live a little &nbsp;<BsArrowRight/></p>
                </a>
              </div>
            </div>
          </div>
        </article>

        <article>
          <div className="reveal fade-bottom">
            <div className="md:grid grid-cols-3 gap-6 text-center client">
              <div className="hover:brightness-50 py-4">
                <a href="/couples">
                  <img src={couples} alt="portaits" width="400" height="300" />
                  <h2>Couples</h2>
                  <p className="flex justify-center items-center animate-bounce">All you need is love. &nbsp;<BsArrowRight/></p>
                </a>
              </div>
              <div className="hover:brightness-50 py-4">
                <a href="/baby-showers">
                  <img src="https://royalens.netlify.app/images/shower1.jpg" alt="portaits" width="400" height="300" />
                  <h2>Baby Showers</h2>
                  <p className="flex justify-center items-center animate-bounce">Dream big, little one &nbsp;<BsArrowRight/></p>
                </a>
              </div>
              <div className="hover:brightness-50 py-4">
                <a href="/baby">
                  <img src={baby} alt="portaits" width="400" height="300" />
                  <h2>Baby Bump</h2>
                  <p className="flex justify-center items-center animate-bounce">The best is yet to come &nbsp;<BsArrowRight/></p>
                </a>
              </div>
            </div>
          </div>
        </article>

        <article>
          <div className="reveal fade-bottom">
            <div className="md:grid grid-cols-3 gap-6 text-center client">
              <div className="hover:brightness-50 py-4">
                <a href="/graduation">
                  <img src={grad} alt="portaits" width="400" height="300" />
                  <h2>Graduation</h2>
                  <p className="flex justify-center items-center animate-bounce">You did it,congatulations &nbsp;<BsArrowRight/></p>
                </a>
              </div>
              <div className="hover:brightness-50 py-4">
                <a href="/wedding">
                  <img src={wedding} alt="portaits" width="400" height="300" />
                  <h2>Weddings</h2>
                  <p className="flex justify-center items-center animate-bounce">Best wishes! &nbsp;<BsArrowRight/></p>
                </a>
              </div>
              <div className="hover:brightness-50 py-4">
                <a href="/commercial">
                  <img src={commercial} alt="portaits" width="400" height="300" />
                  <h2>Commercial</h2>
                  <p className="flex justify-center items-center animate-bounce">Add Value &nbsp;<BsArrowRight/></p>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}





export default Gallary
