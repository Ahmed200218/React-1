import React from 'react'
import './About.css'

function About() {
  return (
    <>
    <div className=' mt-86 py-36 bg-1ABC9C w-full '>
    <div className='flex flex-col justify-center items-center pt-16 pb-20'> 
      <p className='font-bold text-white pt-12 mt-6 text-4-5xl'>ABOUT COMPONENT</p>
      <div className='flex justify-center items-center'>
      <div className='white-line mr-3'></div>
      <i className='fa-solid fa-star mt-3 text-center pb-3'></i>
      <div className='white-line ml-3'></div>
      </div>
     <div className='flex flex-col justify-center items-center ml-10 sm:flex-row'>
      <p className='w-full sm:w-5/12 text-left mr--3 px-4 sm:px-0'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      <p className='w-full sm:w-5/12 text-left ml-48px px-4 sm:px-0'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
     </div>
    </div>
    </div>
    
    </>
  )
}

export default About