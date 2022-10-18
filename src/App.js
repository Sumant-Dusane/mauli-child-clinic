import Navbar from './components/Navbar/Navbar';
import Banner from './components/Landing/Banner/Banner';
import './App.scss'
import Services from './components/Landing/Services/Services';


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
    </>

  );
}
