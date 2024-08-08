import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import About from './components/About/About';



function App() {
  const [count, setCount] = useState(0)

let x= createBrowserRouter([
  {path:"",element:<Layout/>, children:[
    {path:"",element:<Home/>},
    {path:"/Portfolio",element:<Portfolio/>},
    {path:"/Contact",element:<Contact/>},
    {path:"/About",element:<About/>}]
  },
  
])

  return (
   <RouterProvider router={x}>
   </RouterProvider>
  )
}

export default App
