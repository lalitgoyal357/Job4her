import React from 'react'
import { NavLink} from "react-router-dom";
import Scroll from './Scroll';


const Routing = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light" position="static">
       <div className="col-2" id="menusideupper">  
      <NavLink to ="/Bodyside2"><i class="bi bi-microsoft"> </i></NavLink>
      <NavLink to=""> TEST UI </NavLink>
      <NavLink to=""> <i className=" col-5 bi bi-chevron-left " ></i> </NavLink>
      <NavLink to=""> MY ACCOUNT </NavLink>
      </div>
     

      <div className="col-3 offset-7" id="menusideupperright">
      <Scroll/>
           
       
      
        
        
      <NavLink to ="/Bodyside2" > <i class="bi bi-arrows-angle-expand"></i></NavLink>
      <NavLink to ="" ><i class="bi bi-question-circle-fill"></i></NavLink>
      <NavLink to ="" > Sign In</NavLink>
      </div>
      </nav> 
      </div>
      
  )
}

export default Routing