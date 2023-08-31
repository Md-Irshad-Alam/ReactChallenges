import { useEffect, useState } from 'react';
import Navbar from './Componants/Pages/Navbar';
import './App.css';
import Cards from './Componants/Pages/Cards';
import Moreworks from './Componants/Pages/Moreworks';
import Clint from './Componants/Pages/Clint';
import Spplatform from './Componants/Pages/Spplatform';
import Footer from './Componants/Pages/Footer';



function App() {
  const [bgcolor, setbgcolor] = useState(['#3f2caa', '#01b5ac','#111111'])

    const [isScrolled, setIsScrolled] = useState(false);
    const [bgcolors, setcolors] = useState('')
    const [height, setheight]  = useState(1);
  console.log(height)
  
  const getBackgroundColor = () => {
    if (height == 0 || height <300) {
      return bgcolor[0];
    } else if (height == 300 || height <989) {
        
       return bgcolor[1];
    } else if(height == 989|| height <1764) {
        return bgcolor[2];
    }
  };
  console.log(getBackgroundColor())
  
    useEffect(() => {
   
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 100);
        setheight(window.scrollY )
      };
  
      // Attach the event listener
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    // 
  return (
    <div className="App "style={{ transition:"background 0.3s ease-in", background: getBackgroundColor() }}  >
      <Navbar/>
     <Cards/>
    <Moreworks/>
      <Clint/>
      <Spplatform/> 
    
    </div>
  );
}

export default App;
