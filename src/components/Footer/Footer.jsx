import React from 'react'
import './Footer.css'

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCopy, faQuestionCircle, faQrcode } from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (
    <>
  <div className="w-full bg-2C3E50  mt-auto footer px-8 py-6">
    <div className="  flex flex-col justify-between items-center m-5 py-10 sm:flex-row">
      <div className="card-body   w-full sm:w-2/6 sm:py-1 py-5">
        <div className=" text-center ">
          <h3 className='text-center text-3xl font-semibold py-2'>LOCATION</h3>
          <p className='text-center py-3'>2215 John Daniel Drive</p>
          <p className='text-center'>Clark, MO 65243</p>
        </div>
      </div>
      <div className=" text-white  card-body w-full sm:w-2/6 sm:py-1 py-5">
        <div className=" text-center">
          <h3 className='text-center text-3xl font-semibold py-2'>AROUND THE WEB</h3>
          <div className="icons gap-2 flex justify-center items-center">
            <div className='circle'>
            <i
            
              className="fa-brands fa-facebook mx-1 icon scale-110"
            />
            </div>
            <div className='circle'>
            <i
            
              className="fa-brands fa-twitter mx-1 icon scale-110"
            />
            </div>
            <div className='circle'>
            <i
            
              className="fa-brands fa-linkedin-in mx-1 icon scale-110"
            />
            </div>
            <div className='circle'>
            <i className="fa-solid fa-globe mx-1 icon scale-110" />
            </div>
          </div>
        </div>
      </div>
      <div className="card-body w-full  sm:w-2/6 sm:py-1 py-5">
        <div className=" text-center ">
          <h3 className='text-center text-3xl font-semibold py-2'>ABOUT FREELANCER</h3>
          <p className='text-center'>
            {" "}Freelance is a free to use, licensed Bootstrap theme created by route{" "}
          </p>
          
        </div>
      </div>
    </div>
  </div>
  <div className=" bg-1A252F w-full py-6">
    <p className='bg-1A252F'>Copyright © Your Website 2024</p>
  </div>

    
    
    
    
    </>
  )
}

export default Footer