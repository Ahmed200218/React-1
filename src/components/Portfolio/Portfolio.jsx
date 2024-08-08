import React from 'react'
import './Portfolio.css'


let dimg = document.getElementsByClassName("dimg")
let container = document.getElementsByClassName("img-container")


function display(img){
container[0].classList.remove("hidden")
container[0].classList.add("flex")
dimg[0].setAttribute("src",img)
dimg[0].addEventListener("click" ,function stop(e) {
  e.stopPropagation();
})
}
function hide(){
  container[0].classList.add("hidden")
  container[0].classList.remove("flex")
}

export default  function Portfolio() {
  return (
    <>
    <div className=' mt-86 bg-white w-full pt-16'>
    <div className='flex flex-col justify-center items-center'> 
      <p className='font-bold text-2C3E50 pt-12 mt-6 text-4-5xl'>PORTFOLIO COMPONENT</p>
      <div className='flex justify-center items-center'>
      <div className='white-line mr-3 bg-2C3E50'></div>
      <i className='fa-solid fa-star mt-3 text-center pb-3 text-2C3E50'></i>
      <div className='white-line ml-3 bg-2C3E50'></div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center flex-wrap md:px-10 lg:px-16'>
        <div className='cardx' ><div className='plus' onClick={()=>display("https://routeegy.github.io/startFramework/assets/images/poert1.png")}><i className="text-white fa-solid fa-plus fa-6x"></i></div><img className='rounded-05  w-full' src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="img 1" /></div>
        <div className='cardx' ><div className='plus' onClick={()=>display("https://routeegy.github.io/startFramework/assets/images/port2.png")}><i className="text-white fa-solid fa-plus fa-6x"></i></div><img className='rounded-05  w-full' src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="img 2" /></div>
        <div className='cardx' ><div className='plus' onClick={()=>display("https://routeegy.github.io/startFramework/assets/images/port3.png")}><i className="text-white fa-solid fa-plus fa-6x"></i></div><img className='rounded-05  w-full'  src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="img 3" /></div>
        <div className='cardx' ><div className='plus' onClick={()=>display("https://routeegy.github.io/startFramework/assets/images/poert1.png")}><i className="text-white fa-solid fa-plus fa-6x"></i></div><img className='rounded-05  w-full' src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="img 4" /></div>
        <div className='cardx' ><div className='plus' onClick={()=>display("https://routeegy.github.io/startFramework/assets/images/port2.png")}><i className="text-white fa-solid fa-plus fa-6x"></i></div><img className='rounded-05  w-full' src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="img 5" /></div>
        <div className='cardx' ><div className='plus' onClick={()=>display("https://routeegy.github.io/startFramework/assets/images/port3.png")}><i className="text-white fa-solid fa-plus fa-6x"></i></div><img className='rounded-05  w-full' src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="img 6" /></div>
        </div>
      </div>
      <div className='pop-img img-container hidden hide' onClick={()=>hide()}><img className='scale-75 dimg'/></div>
      </div>
      </div>
      </>
  )
  
}