import Navbar from './components/Navbar/Navbar';
import Banner from './components/Landing/Banner/Banner';
import './App.scss'

export default function App() {
  return (
    <>
      <Navbar />
      <div className='wrapper'>
        <Banner />
      </div>
    </>

  );
}
