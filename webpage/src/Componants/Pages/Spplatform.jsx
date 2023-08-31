import React, {useEffect, useState} from 'react'
import '../Styles/card.css'
function Spplatform() {
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
  
    const shouldApplyTransition = scrollPosition >= 2664 ;
  return (
    <div className={`mt-10 lg:w-90 max-lg:w-90 m-auto `}>
      <div className='m-auto text-center flex flex-col gap-y-7 items-center justify-center'>
        <h1 className='text-7 text-5xl text-zinc-50'>Software for modern platforms</h1>
        <p className='text-zinc-50 text-base x-sm:text-2xl mt-7 mb-7 '>We develop applications for mobile, web, wearables, and TV.</p>
      </div>
      <div className={`   mt-12  lg:flex  justify-center sm:w-full x-sm:w-fulljustify-around gap-y-14 sm:grid x-sm:grid-cols-2 sm:grid-cols-2 grid items-center m-auto ${shouldApplyTransition ? 'appclint' : ''}`}>
        <div className='flex flex-col items-center justify-center gap-y-5  text-zinc-50 font-semibold text-base x-sm:w-36 sm:w-40'>
            <img src="https://geeksinvention.com/assets/software-platforms/web-45bb148b27e8f57f2af5936654ab0d96.svg" alt="" />
            <p>Web</p>
        </div>
        <div className='flex flex-col gap-y-5 items-center justify-center text-zinc-50 font-semibold text-base x-sm:w-36 sm:w-40'>
            <img src="https://geeksinvention.com/assets/software-platforms/web-45bb148b27e8f57f2af5936654ab0d96.svg" alt="" />
            <p>iOS</p>
        </div>
        <div className='flex flex-col gap-y-5 items-center justify-center text-zinc-50 font-semibold text-base x-sm:w-36 sm:w-40'>
            <img src="	https://geeksinvention.com/assets/software-platforms/android-163d4b8d487bb2c3ade6e7aad7dda588.svg" alt="" />
            <p>Andriod</p>
        </div>
        <div className='flex flex-col gap-y-5 items-center justify-center text-zinc-50 font-semibold text-base x-sm:w-36 sm:w-40'>
            <img src="		https://geeksinvention.com/assets/software-platforms/hybrid-b835b200edfc426c9f5a6ef76412aff6.svg" alt="" />
            <p>Hybrid</p>
        </div >
        <div className='flex flex-col gap-y-5 items-center justify-center text-zinc-50 font-semibold text-base x-sm:w-36 sm:w-40'>
            <img src="https://geeksinvention.com/assets/software-platforms/wear-6f1886d1d03002e8fe1d04e499125d00.svg" alt="" />
            <p>Wearable</p>
        </div>
        <div className='flex flex-col gap-y-5 items-center justify-center text-zinc-50 font-semibold text-base x-sm:w-36 sm:w-40'>
            <img src="https://geeksinvention.com/assets/software-platforms/tv-f6c551eb20333d6604e9fff685c392d1.svg" alt="" />
            <p>TV</p>
        </div>
      </div>
      
      <div className='w-fit m-auto mt-20 border-2 border-orange-400 pl-5 pr-5 pt-3 pb-3 rounded-2xl hover:bg-orange-400 text-orange-400 hover:text-white mb-14'>
              <button className='btn-full '>See full case study {"->"}</button>
           </div>
        
        {/*  */}
      <div className=' lg:w-68 m-auto text-center flex flex-col gap-y-7 items-center justify-center '>
        <h1 className='text-7 text-5xl text-zinc-50'>Only dedicated teams</h1>
        <p className='text-zinc-50 text-base x-sm:text-2xl mt-7 mb-7'>Our team is 100% concentrated on your project and you have full control over management of the 
                                        dedicated team members.</p>
      </div>

      <div className='lg:grid lg:grid-cols-3 x-sm:grid-cols-1 gap-x-10 mt-12  '>
        <div className='flex flex-col justify-center items-center gap-y-5 text-zinc-50 font-semibold text-base w-34 p-5'>
            <img src="https://geeksinvention.com/assets/dedicated-teams/agile-0aab98f2053db8490987560a2e9f37fe.svg" width="60px" alt="" />
            <p className='text-2xl'>Agile approach</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-y-5 text-zinc-50 font-semibold text-base w-34 p-5'>
            <img src="	https://geeksinvention.com/assets/dedicated-teams/deep-tech-7f909bfebb1eebf6eda5832f658cbbaa.svg" width="60px" alt="" />
            <p className='text-2xl'>Deep tech expertise</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-y-5 text-zinc-50 font-semibold text-base w-34 p-5'>
            <img src="	https://geeksinvention.com/assets/dedicated-teams/pc-293103263e599a94d7a2d886fab89b42.svg" width="60px" alt="" />
            <p className='text-2xl'>Personal commitment</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-y-5 text-zinc-50 font-semibold text-base w-34 p-5'>
            <img src="	https://geeksinvention.com/assets/dedicated-teams/reg-rep-732453cad7b07eb4cc4147fa41423c4a.svg" width="60px" alt="" />
            <p className='text-2xl'>Regular reporting</p>
        </div >
        <div className='flex flex-col justify-center items-center gap-y-5 text-zinc-50 font-semibold text-base w-34 p-5'>
            <img src="	https://geeksinvention.com/assets/dedicated-teams/time-track-d7afee36956a4a6c0bb1e734af7909fc.svg" width="60px" alt="" />
            <p className='text-2xl'>Time tracking</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-y-5 text-zinc-50 font-semibold text-base w-34 p-5'>
            <img src="	https://geeksinvention.com/assets/dedicated-teams/scale-33474d0929577c56ca4d116820e24ee8.svg" width="60px" alt="" />
            <p className='text-2xl'>Scalability</p>
        </div>
      </div>
      
      <div className='w-fit m-auto mt-16  border-2 border-orange-400 pl-5 pr-5 pt-3 pb-3 rounded-2xl hover:bg-orange-400 text-orange-400 hover:text-white '>
              <button className='btn-full '>See full case study {"->"}</button>
          </div>
       
    </div>
  )
}

export default Spplatform
