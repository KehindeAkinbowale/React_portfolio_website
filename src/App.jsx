import Header from './components/header/Header'
import './App.css'
import Home from './components/home/Home'
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Qualifications from './components/Qualifications/Qualifications';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact.jsx/Contact';
import Footer from './components/Footer/Footer';
import Scroll from './components/Scroll/Scroll';
import Work from './components/Work/Work';

function App() {

  return (
    <>
      <Header /> 
      <main>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Work />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <Scroll />
    </>
  )
}

export default App
