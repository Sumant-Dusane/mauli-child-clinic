import Navbar from './components/Navbar/Navbar';
import Banner from './components/Landing/Banner/Banner';
import './App.scss'
import BannerPitch from './components/Landing/Banner/BannerPitch/BannerPitch';


export default function App() {
  return (
    <>
      <Navbar />
      <div className='wrapper' id='home'>
        <Banner />
      </div>
      <div className='wrapper' id='home'>
        <BannerPitch />
      </div>
    </>

  );
}
