import React, {useState, useEffect} from 'react'
import Card from './Cards/Card1'
import Card3 from './Cards/Card3'
import Card2 from './Cards/Card2'

function Cards() {
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
    } else if(height > 989) {
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
  

  return (
    <div style={{ transition:"background 0.3s ease-in", background: getBackgroundColor() }} >
     <div className=''>
     <Card/>
     </div>
    <div className='pt-25'>
    <Card3/>
    </div>
     <div className='pt25'>
     <Card2/>
     </div>
    </div>
  )
}

export default Cards
