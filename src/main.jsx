import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
//import './index.css'
// import Navbar from './Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
// import Hook1 from './Hooks/Hook1'
// import Hook2 from './Hooks/Hook2'
import Connections from './Components/Connections/Connections'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'



createRoot(document.getElementById('root')).render( 
  <StrictMode>
    
    
    <Connections />
    {/* <Hook1 /> */}
    {/* <Hook2 /> */}
      

  </StrictMode>,
)
