import React from 'react'
import './Contact.css'

function create1(){

let userName = document.getElementsByClassName("userName")
let userNamelabel = document.getElementsByClassName("userNamelabel")

userName[0].addEventListener("input", function input() {
  if(userName[0].value!=""){
    userNamelabel[0].classList.add("top-0")
  }
    else{
      userNamelabel[0].classList.remove("top-0")
    }
  }
)
}
function create2(){

  let userAge = document.getElementsByClassName("userAge")
  let userAgelabel = document.getElementsByClassName("userAgelabel")
  
  userAge[0].addEventListener("input", function input() {
    if(userAge[0].value!=""){
      userAgelabel[0].classList.add("top-0")
    }
      else{
        userAgelabel[0].classList.remove("top-0")
      }
    }
  )
  }
  function create3(){

    let userEmail = document.getElementsByClassName("userEmail")
    let userEmaillabel = document.getElementsByClassName("userEmaillabel")
    
    userEmail[0].addEventListener("input", function input() {
      if(userEmail[0].value!=""){
        userEmaillabel[0].classList.add("top-0")
      }
        else{
          userEmaillabel[0].classList.remove("top-0")
        }
      }
    )
    }
    function create4(){

      let userPassword = document.getElementsByClassName("userPassword")
      let userPasswordlabel = document.getElementsByClassName("userPasswordlabel")
      
      userPassword[0].addEventListener("input", function input() {
        if(userPassword[0].value!=""){
          userPasswordlabel[0].classList.add("top-0")
        }
          else{
            userPasswordlabel[0].classList.remove("top-0")
          }
        }
      )
      }





function Contact() {
  return (
    <>
      <div className=' mt-86 bg-white w-full pt-16 pb-10'>
        <div className='flex flex-col justify-center items-center'>
          <p className='font-bold text-2C3E50 pt-12 mt-6 text-4-5xl'>CONTACT SECTION</p>
          <div className='flex justify-center items-center'>
            <div className='white-line mr-3 bg-2C3E50'></div>
            <i className='fa-solid fa-star mt-3 text-center pb-3 text-2C3E50'></i>
            <div className='white-line ml-3 bg-2C3E50'></div>
          </div>
        </div>
        <div className='w-full flex justify-center items-center'>
          <div className='w-full px-5 md:w-6/12 flex flex-col justify-center items-center bg-white pt-12 mt-7 outline-nonex'>
            <label className='relative self-start color-1ABC9C text-lx top-hidden userNamelabel' id='userNamelabel'>userName :</label>
            <input onClick={()=>create1()} type="text" placeholder='userName' className='bg-white m-2 border-b-1 w-full p-4 outline-nonex text-black z-30 userName' id='userName' />
            <label className='relative self-start color-1ABC9C text-lx top-hidden userAgelabel' id="userAgelabel">userAge :</label>
            <input onClick={()=>create2()} type="text" placeholder='userAge' className='bg-white m-2 border-b-1 w-full p-4 outline-nonex text-black z-30 userAge' id="userAge" />
            <label className='relative self-start color-1ABC9C text-lx top-hidden userEmaillabel' id='userEmaillabel'>userEmail :</label>
            <input onClick={()=>create3()} type="text" placeholder='userEmail' className='bg-white m-2 border-b-1 w-full p-4 outline-nonex text-black z-30 userEmail' id='userEmail' />
            <label className='relative self-start color-1ABC9C text-lx top-hidden userPasswordlabel' id='userPasswordlabel'>userPassword :</label>
            <input onClick={()=>create4()} type="text" placeholder='userPassword' className='bg-white m-2 border-b-1 w-full p-4 outline-nonex text-black z-30 userPassword' id='userPassword' />
            <button className='bg-1ABC9C text-white self-start border-transparent outline-nonex box-border button-sub mt-3'>Send message</button>
          </div>
        </div>
      </div>


    </>
  )
}

export default Contact