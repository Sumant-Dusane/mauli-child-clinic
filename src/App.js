import Navbar from './components/Navbar/Navbar';
import Banner from './components/Landing/Banner/Banner';
import './App.scss'
import Services from './components/Landing/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';


export default function App() {
  return (
    <>
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
    </>

  );
}
