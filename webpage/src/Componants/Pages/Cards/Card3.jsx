import React,{useState, useEffect} from 'react'
import '../../Styles/card.css'
function Card3() {
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
  // useEffect(()=>{
  //   if (scrollPosition >= 133 && scrollPosition < 453 && !animationRun) {
  //     setAnimationRun(true)
  //   }
  // },[animationRun, scrollPosition])
  const shouldApplyTransition = scrollPosition >= 280 ;
  return (
  <div className=' flex gap-x-7  items-center justify-around w-80  m-auto card_maincontainer2  h-94 '  >
    <div className=' lg:w-1/2 max-lg:w-1/2 sm:w-full x-sm:w-full mb-20' id='img-cont'>
        <img src="https://geeksinvention.com/assets/v3/industry-education.webp" alt="svg-1" />
    </div>
    <div className={`m-auto flex flex-col items-start p-8 lg:w-1/2   ${shouldApplyTransition ? 'apply-transition' : 'hidecont'}`}>
      <div className='mb-8 lg:w-3/4 sm:w-full x-sm:w-full'>
        <h1 className='text-white font-semibold lg:text-6xl sm:text-5xl x-sm:text-3xl '>Industrial IoT</h1>
        <p className='text-gray-100 lg:text-4xl opacity-80 lg:mt-6 sm:mt-3 x-sm:mt-3 x-sm:text-lg sm:text-lg'>Providing a better connected experience</p>
      </div>
      <div className='flex items-center justify-center gap-x-3 w-full flex-wrap  h-20'>
        <p className='bg-white pl-3 pr-3 pt-1 pb-1 rounded-lg w-fit'>Connected manufacturing</p>
        <p className='bg-white pl-2 pr-2 pt-1 pb-1 rounded-lg  w-fit'>TAviation</p>
        <p className='bg-white pl-2 pr-2 pt-1 pb-1 rounded-lg w-fit '>Smart Building</p>
      </div>
        <p className=' text-left mt-6 mb-6 text-zinc-50 text-base paragraph'>
            Revolutionize your industry with our innovative IoT solutions.
            Our software development services offer connected manufacturing,
            pollution control, smart transportation, and intelligent farming, 
            agriculture, and forestry. With our expertise, you can harness 
            the power of technology to increase efficiency, reduce waste, 
            and optimize operations for a sustainable future.
        </p>
     
        <div className='btn-outer'>
           <div className='btn-cont border-2 border-l-white'> 
           <button className='btn-full'>See full case study {"->"}</button>
           </div>
        </div>
    </div>

    
  </div>
  )
}

export default Card3
