import React, { useEffect, useState } from 'react'
import '../../Styles/card.css'
function Card() {

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

  const shouldApplyTransition = scrollPosition >= 133 ;

  return (
  <div className='flex gap-x-7  items-center justify-around w-80  m-auto card_maincontainer h-94 pt-20  ' 
   >

    <div className={` m-auto flex flex-col items-start p-8 lg:w-1/2   ${shouldApplyTransition ? 'apply-transition' : 'hidecont'}`}>

      <div className='mb-8 lg:w-3/4 sm:w-full x-sm:w-full '>
        <h1 className='text-white font-semibold lg:text-5xl sm:text-5xl x-sm:text-3xl'>Fintech Solution</h1>
        <p className='text-gray-100  opacity-80 lg:text-3xl lg:mt-6 sm:mt-3 x-sm:mt-3 x-sm:text-lg sm:text-lg'>Transforming Fintech with AI</p>
      </div>

      <div className=' flex items-center justify-center gap-x-3 w-full flex-wrap h-20   '>
        <p className='bg-white pl-3 pr-3 pt-1 pb-1 rounded-lg w-fit '>Fraud detection</p>
        <p className='bg-white pl-2 pr-2 pt-1 pb-1 rounded-lg w-fit'>Transaction categorisation</p>
        <p className='bg-white pl-2 pr-2 pt-1 pb-1 rounded-lg w-fit '>Risk Scoring</p>
      </div>
        <p className='   text-left mt-6 mb-6 text-zinc-50 text-base paragraph' >
            Empower your financial institution with our advanced fintech solutions.
            From real-time fraud detection to easy bookkeeping, 
            our software development services provide credit risk scoring for
            accurate lending eligibility, 
            transaction categorization for seamless organization,
            and anomaly detection to safeguard your assets
        </p>
     
        <div className='btn-outer'>
           <div className='btn-cont border-2 border-l-white'> 
           <button className='btn-full'>See full case study {"->"}</button>
           </div>
        </div>
    </div>

    <div className=' lg:w-1/2 max-lg:w-1/2 sm:w-full x-sm:w-full ' id='img-cont'>
    
        <img src="https://geeksinvention.com/assets/v3/industry-fintech.svg" alt="svg-1" id='img'  />
    </div>
  </div>
  )
}

export default Card
