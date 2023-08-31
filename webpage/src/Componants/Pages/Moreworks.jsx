import React from 'react'
import '../Styles/card.css'
function Moreworks() {
  return (
    <div className=' lg:w-68 sm:w-full max-lg:68 m-auto pl-5 pr-5 mt-7  '>
      <div className=' m-auto text-center flex flex-col gap-y-7 items-center justify-center'>
        <h1 className='text-7 text-5xl text-zinc-50'>Check out more works by Geeks Invention</h1>
        <p className='text-zinc-50 text-base x-sm:text-2xl mt-7 mb-7'>Our case studies describe design and development solutions implemented at our 
            Geeks Invention projects. The stories are a 
            valuable resource for those looking to develop their 
            own mobile apps.</p>

           <div className='border-2 border-orange-400 pl-5 pr-5 pt-3 pb-3 rounded-2xl hover:bg-orange-400 text-orange-400 hover:text-white'>
              <button className='btn-full '>See full case study {"->"}</button>
           </div>
      </div>
    </div>
  )
}

export default Moreworks
