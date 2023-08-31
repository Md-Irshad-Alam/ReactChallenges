import React from 'react'

function Footer() {
  return (
    <div className='pos fixed bottom-0 w-90 h-434 mt-96'>
      <div className='flex flex-col items-center justify-center  gap-y-7 mb-10 '>
        <h1 className='text-3xl font-medium text-zinc-50'>Only dedicated teams</h1>
        <p className='text-zinc-50 '>Our team is 100% concentrated on your project and you have full control over management of the 
                                        dedicated team members.</p>
      </div>
     <div className='bg-orange-600 text-zinc-50 w-44 m-auto rounded-lg'>
        <button className='w-full rounded-lg pl-3 pr-3 pt-2 pb-2'>Drop us a message</button>
     </div>
    </div>
  )
}

export default Footer
