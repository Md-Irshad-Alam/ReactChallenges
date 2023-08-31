import React, {useEffect, useState} from 'react'
import '../../Styles/card.css'
function Card2() {
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
  const shouldApplyTransition = scrollPosition >= 733 ;
  return (
  <div className=' flex gap-x-7  items-center justify-around w-80  m-auto card_maincontainer3 h-94'>
     <div className=' lg:w-1/2 max-lg:w-1/2 sm:w-full x-sm:w-full mb-20' id='img-cont'>
        <img src="	https://geeksinvention.com/assets/v3/industry-iot.webp" alt="svg-1"  />
    </div>
    <div className={`m-auto flex flex-col items-start p-8 lg:w-1/2   ${shouldApplyTransition ? 'apply-transition' : 'hidecont'}`}>
      <div className='mb-8  lg:w-3/4 sm:w-full x-sm:w-full'>
        <h1 className='text-white font-medium lg:text-6xl sm:text-lg x-sm:text-lg '>Smart Education</h1>
        <p className='text-gray-100  opacity-80 lg:text-4xl lg:mt-6 sm:mt-3 x-sm:mt-3 x-sm:text-lg sm:text-lg'>Elevate your Education Institution</p>
      </div>
      <div className='flex items-center justify-center gap-x-3 w-full flex-wrap h-20'>
        <p className='bg-white pl-2 pr-2 pt-1 pb-1 rounded-lg w-fit '>Learning Management</p>
        <p className='bg-white pl-2 pr-2 pt-1 pb-1 rounded-lg w-fit'>Course offering</p>
        <p className='bg-white pl-2 pr-2 pt-1 pb-1 rounded-lg w-fit '>Professional Training</p>
      </div>
        <p className='text-left mt-6 mb-6 text-zinc-50 text-base paragraph'>
            Elevate your education institution with our comprehensive software solutions.
             Learning management, course offerings, professional training, certification, 
            and school management tools to streamline your operations and enhance your students' 
            learning experience. Trust us to provide the cutting-edge technology and support you
            need to thrive in the ever-evolving education industry.
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

export default Card2
