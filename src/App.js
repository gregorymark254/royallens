import Nav from './pages/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Gallary from './pages/Gallary'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

import Baby from './pages/categories/Baby'
import Birthday from './pages/categories/Birthday'
import Commercial from './pages/categories/Commercial'
import Couples from './pages/categories/Couples'
import Events from './pages/categories/Events'
import Graduation from './pages/categories/Graduation'
import Personal from './pages/categories/Personal'
import Potraits from './pages/categories/Potrais'
import Shower from './pages/categories/Showers'
import Street from './pages/categories/Street'
import Studio from './pages/categories/Studio'
import Wedding from './pages/categories/Wedding'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Nav/>
      <div className="min-h-screen">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/gallary" element={<Gallary/>} />
          <Route exact path="/contact" element={<Contact/>} />

          <Route exact path="/baby" element={<Baby/>} />
          <Route exact path="/birthday" element={<Birthday/>} />
          <Route exact path="/commercial" element={<Commercial/>} />
          <Route exact path="/couples" element={<Couples/>} />
          <Route exact path="/events" element={<Events/>} />
          <Route exact path="/graduation" element={<Graduation/>} />
          <Route exact path="/personal" element={<Personal/>} />
          <Route exact path="/potraits" element={<Potraits/>} />
          <Route exact path="/baby-showers" element={<Shower/>} />
          <Route exact path="/street" element={<Street/>} />
          <Route exact path="/studio" element={<Studio/>} />
          <Route exact path="/wedding" element={<Wedding/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;