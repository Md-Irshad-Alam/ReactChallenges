import React, {useState, useEffect} from 'react'
import '../Styles/card.css'
function Clint() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [animationRun, setAnimationRun] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const shouldApplyTransition = scrollPosition >= 2004 ;
  return (
    <div className={'lg:w-80 sm:w-full m-auto mt-10 '} >
      <div className='m-auto text-center flex flex-col gap-y-7 items-center justify-center'>
        <h1 className=' text-7 text-5xl text-zinc-50 '>Recent clients</h1>
        <p className='text-zinc-50 text-base x-sm:text-2xl mt-7 mb-7'>We worked with the Fortune 500 companies in the USA, Africa, UK, Middle East
            World's 4th Strongest Banking Brand, Automobile & IoT industry</p>
      </div>
     <div className={`  sm:grid-cols-1 grid  lg:grid-cols-3 gap-x-7 gap-y-7 mt-12    ${shouldApplyTransition ? 'applyclint' : ''} `}>
        <div className='text-zinc-50  flex flex-col  items-center justify-center pl-9 pr-9  h-434 card_clint  m-auto'>
            <img src="https://geeksinvention.com/assets/v3/client/logo-ibm.webp" alt="ibm" />
            <h3 className=' text-2xl font-semibold mb-4 mt-4'>Global Technology</h3>
            <p className='pl-8 pr-8 text-center '>From cloud computing to artificial intelligence, IBM's
                cutting-edge technologies and expertise
                have helped countless businesses stay ahead of the 
                curve in today's digital world.</p>
        </div>
        <div className='text-zinc-50  flex flex-col items-center justify-center pl-9 pr-9  h-434  m-auto card_clint'>
            <img src="https://geeksinvention.com/assets/v3/client/logo-equity.webp" alt="ibm" />
            <h3 className=' text-2xl font-semibold mb-4 mt-4'>Global Technology</h3>
            <p className='pl-8 pr-8 text-center '>From cloud computing to artificial intelligence, IBM's
                cutting-edge technologies and expertise
                have helped countless businesses stay ahead of the 
                curve in today's digital world.</p>
        </div>
        <div className='text-zinc-50  flex flex-col items-center justify-center pl-9 pr-9  h-434  m-auto card_clint'>
            <img src="https://geeksinvention.com/assets/v3/client/logo-audi.webp" alt="ibm" />
            <h3 className=' text-2xl font-semibold mb-4 mt-4'>Global Technology</h3>
            <p className='pl-8 pr-8 text-center '>From cloud computing to artificial intelligence, IBM's
                cutting-edge technologies and expertise
                have helped countless businesses stay ahead of the 
                curve in today's digital world.</p>
        </div>
        <div className='text-zinc-50  flex flex-col items-center justify-center pl-9 pr-9  h-434  m-auto card_clint'>
            <img src="	https://geeksinvention.com/assets/v3/client/logo-aramco.webp" alt="ibm" />
            <h3 className=' text-2xl font-semibold mb-4 mt-4'>Global Technology</h3>
            <p className='pl-8 pr-8 text-center '>From cloud computing to artificial intelligence, IBM's
                cutting-edge technologies and expertise
                have helped countless businesses stay ahead of the 
                curve in today's digital world.</p>
        </div>
        <div className='text-zinc-50  flex flex-col items-center justify-center pl-9 pr-9  h-434  m-auto card_clint'>
            <img src="	https://geeksinvention.com/assets/v3/client/logo-linux.webp" alt="ibm" />
            <h3 className=' text-2xl font-semibold mb-4 mt-4'>Global Technology</h3>
            <p className='pl-8 pr-8 text-center  '>From cloud computing to artificial intelligence, IBM's
                cutting-edge technologies and expertise
                have helped countless businesses stay ahead of the 
                curve in today's digital world.</p>
        </div>
        <div className='text-zinc-50  flex flex-col items-center justify-center pl-9 pr-9  h-434  m-auto card_clint'>
            <img src="	https://geeksinvention.com/assets/v3/client/logo-ifit.webp" alt="ibm" />
            <h3 className=' text-2xl font-semibold mb-4 mt-4'>Global Technology</h3>
            <p className='pl-8 pr-8 text-center '>From cloud computing to artificial intelligence, IBM's
                cutting-edge technologies and expertise
                have helped countless businesses stay ahead of the 
                curve in today's digital world.</p>
        </div>
     </div>
    </div>
  )
}

export default Clint
