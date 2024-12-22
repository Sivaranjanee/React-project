import React from 'react'
import a from '../../assets/my photo.jpeg'
import "./Home.css"


function Home() {
  return (
    <>
    <div className="one">
     <div className="card">
        <img src={a} className="car-img-top" alt="picture" />
      </div>
    <div className="jan">
      <i class="fa-solid fa-house fa-2xl"></i>
      <h1>Hi! I am K. Sivaranjane. 
        Python Full Stack Developer and also Data Analyst</h1>
        <h1><p>This is My Portfolio</p></h1>
        <p><a href="mailto:someone@example.com"><h4><button>Send Mail</button></h4></a></p>
        <p><a href="Sivaranjane Resume.pdf" download ="Sivaranjane Resume.pdf"><h2><button>My Resume</button></h2></a></p>
    </div>
    </div>
    <div className="breadcrumb" >
      <li class="breadcrumb-item"><a href="#">Preview</a></li>
      <li class="breadcrumb-item"><a href="About">1</a></li>
      <li class="breadcrumb-item"><a href="Experience">2</a></li>
      <li class="breadcrumb-item"><a href="Skills">3</a></li>
      <li class="breadcrumb-item"><a href="Education">4</a></li>
      </div>
    </>
  )
}
// style={{width:100,height:100}}
// style={{width:800,height:100000}}

export default Home