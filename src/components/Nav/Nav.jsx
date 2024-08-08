import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/outline'

import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

let nav = document.getElementsByClassName('scroll')
{window.addEventListener('scroll',function(e){
  let scroll=window.scrollY
  if(scroll>0){
nav[0].classList.add("py-2")
nav[0].classList.remove("py-6")


  }
  else{
    nav[0].classList.remove("py-2")
  nav[0].classList.add("py-6")
  }
})}

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-2C3E50 fixed top-0 left-0 right-0 py-6 scroll z-40" id="nav">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between media-footer ">
        <Link to=""  className='text-4xl font-bold cursor-pointer'>START FRAMEWORK</Link>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
           
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:bg-gray-700 focus:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white font-bold'  : 'text-gray-300 focus:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300  focus:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

