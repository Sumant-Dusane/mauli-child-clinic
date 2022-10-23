import Navbar from './components/Navbar/Navbar';
import Banner from './components/Landing/Banner/Banner';
import './App.scss'
import Services from './components/Landing/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import About from './components/About/About';
import Reach from './components/Reach/Reach';
import Footer from './components/Footer/Footer';
import TopButton from './components/TopButton/TopButton';


export default function App() {
  return (
    <>
      <TopButton />
      <Navbar />
      <div className='wrapper' id='home'>
        <Banner />
      </div>
      <div className='wrapper' id='services'>
        <span className='wrapper--title'>Our Services</span>
        <Services />
      </div>
      <div className='wrapper' id='testimonials'>
        <span className='wrapper--title'>Testimonials</span>
        <Testimonials />
      </div>
      <div className='wrapper' id='about'>
        <span className='wrapper--title'>About Us</span>
        <About />
      </div>
      <div className='wrapper' id='reach-out'>
        <span className='wrapper--title'>Reach Out</span>
        <Reach />
      </div>
      <Footer />
    </>

  );
}
