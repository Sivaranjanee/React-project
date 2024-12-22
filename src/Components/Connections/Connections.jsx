import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import All from '../../all'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import Education from '../Education/Education'





function Connections() {
  return (
    <>
    <BrowserRouter>
    <All />
    
    
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Experience' element={<Experience />}/>
        <Route path='/Skills' element={<Skills />}/>
        <Route path='/Education' element={<Education />}/>
        {/* <Route path='/All' element={<All />}/> */}
        </Routes></BrowserRouter>
        </>
  )
}

export default Connections