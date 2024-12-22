import React from 'react'
import { Link } from 'react-router-dom'
import "./All.css"

function All() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-dark bg-dark  ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse  navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto  mb-2 mb-lg-0 ">
        

        <li class="nav-item c">
          <Link to="/" className='nav-link'>Home</Link>
        </li>
        <li class="nav-item ">
          <Link to="/About" className='nav-link'>About</Link>
        </li>
        <li class="nav-item">
          <Link to="/Experience" className='nav-link'>Experience</Link>
        </li>
        <li class="nav-item">
          <Link to="/Skills" className='nav-link'>Skills</Link>
        </li>
        <li class="nav-item">
          <Link to="/Education" className='nav-link'>Education</Link>
        </li>
        </ul>
   </div></div>
</nav>
    </>
  )
}

export default All

