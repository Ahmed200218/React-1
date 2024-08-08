import React from 'react'
import './Home.css'


function Home() {
  return (
    <>
    <div className=' mt-86 pt-36 bg-1ABC9C w-full py-36 sm:pb-0'>
    <div className='flex flex-col justify-center items-center pt-10 pb-20'> 
      <div><img className='w-250' src='https://routeegy.github.io/startFramework/assets/images/avataaars.svg'></img></div>
      <p className='font-bold text-white pt-2 mt-6 text-4-5xl'>START FRAMEWORK</p>
      <div className='flex justify-center items-center'>
      <div className='white-line mr-3'></div>
      <i className='fa-solid fa-star mt-3 text-center pb-3'></i>
      <div className='white-line ml-3'></div>
      </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </div>
    
    </>
  )
}

export default Home