import React from 'react'
import { BsArrowRight } from "react-icons/bs";


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
            <p className="text-xl font-bold"><b>My Potrfolio</b></p>
          </div>
        </section>
        <div className="text-center pb-6">
          <p><b className="text-orange-400 font-bold">ROYAL LENS</b> has photographers for all specialties (or at least all the G-rated ones). Click to see portfolio samples.</p>
          <p><b>EVERY PHOTO TELLS A STORY.</b></p>
        </div>

        
        <div className="md:grid grid-cols-3 gap-6 text-center client">
          <div className="hover:brightness-50 py-4">
            <a href="/potraits">
              <img src="https://i.postimg.cc/cLb6ht74/potrait.jpg" alt="portaits" loading="lazy" width="400" height="300" />
              <h2>Portaits</h2>
              <p className="flex justify-center items-center animate-bounce">The beauty of moments &nbsp;<BsArrowRight/></p>
            </a>
          </div>
          <div className="hover:brightness-50 py-4">
            <a href="/personal">
              <img src="https://i.postimg.cc/JhK82JJB/RLK-3084.jpg" alt="portaits" loading="lazy" width="400" height="300" />
              <h2>Personal Shoots</h2>
              <p className="flex justify-center items-center animate-bounce">Be yourself &nbsp;<BsArrowRight/></p>
            </a>
          </div>
          <div className="hover:brightness-50 py-4">
            <a href="/studio">
              <img src="https://i.postimg.cc/j2jdbstS/studio37.jpg" alt="portaits" loading="lazy" width="400" height="300" />
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
                  <img src="https://i.postimg.cc/wMXBSP9T/DSC-0236.jpg" alt="portaits" loading="lazy" width="400" height="300" />
                  <h2>Events</h2>
                  <p className="flex justify-center items-center animate-bounce">Creating the best day &nbsp;<BsArrowRight/></p>
                </a>
              </div>
              <div className="hover:brightness-50 py-4">
                <a href="/birthday">
                  <img src="https://i.postimg.cc/j5nq4xcB/birthday7.jpg" alt="portaits" loading="lazy" width="400" height="300" />
                  <h2>Birthday</h2>
                  <p className="flex justify-center items-center animate-bounce">It's your special day &nbsp;<BsArrowRight/></p>
                </a>
              </div>
              <div className="hover:brightness-50 py-4">
                <a href="/street">
                  <img src="https://i.postimg.cc/76VF1cjv/DSC-4086.jpg" alt="portaits" loading="lazy" width="400" height="300" />
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
                  <img src="https://i.postimg.cc/NFG5b3MR/fashionv-4.jpg" alt="portaits" loading="lazy" width="400" height="300" />
                  <h2>Couples</h2>
                  <p className="flex justify-center items-center animate-bounce">All you need is love. &nbsp;<BsArrowRight/></p>
                </a>
              </div>
              <div className="hover:brightness-50 py-4">
                <a href="/baby-showers">
                  <img src="https://royalens.netlify.app/images/shower1.jpg" alt="portaits" loading="lazy" width="400" height="300" />
                  <h2>Baby Showers</h2>
                  <p className="flex justify-center items-center animate-bounce">Dream big, little one &nbsp;<BsArrowRight/></p>
                </a>
              </div>
              <div className="hover:brightness-50 py-4">
                <a href="/baby">
                  <img src="https://i.postimg.cc/tTkmL6X8/Royallenske-1037.jpg" alt="portaits" loading="lazy" width="400" height="300" />
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
                  <img src="https://i.postimg.cc/9MKNzFZf/eventsbb.jpg" alt="portaits" loading="lazy" width="400" height="300" />
                  <h2>Graduation</h2>
                  <p className="flex justify-center items-center animate-bounce">You did it,congatulations &nbsp;<BsArrowRight/></p>
                </a>
              </div>
              <div className="hover:brightness-50 py-4">
                <a href="/wedding">
                  <img src="https://i.postimg.cc/xTRy418b/wed.jpg" alt="portaits" loading="lazy" width="400" height="300" />
                  <h2>Weddings</h2>
                  <p className="flex justify-center items-center animate-bounce">Best wishes! &nbsp;<BsArrowRight/></p>
                </a>
              </div>
              <div className="hover:brightness-50 py-4">
                <a href="/commercial">
                  <img src="https://i.postimg.cc/K8hLWYH7/Royallenske-2780.jpg" alt="portaits" loading="lazy" width="400" height="300" />
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
