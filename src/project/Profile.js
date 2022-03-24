import React from 'react'
import "./App.css"
import Bodyside from './Bodyside'

const Profile = () => {
  return (
    <>

    <div className="row " id="routing">

      <div className="col-2">
        <p className="jobsforher">JOBSFOR HER</p>
        </div>
        <div className="col-2 P-2"> 
        <i className="bi bi-list"></i> 
        </div>    
      <div className="col-4">

        <ul className="navmenu">
          <li className="navmenuli">DASHBORD</li>
          <li className="navmenuli">PACKAGE</li>
          <li className="navmenuli"> EVENT</li>
          <li className="navmenuli">BLOGS</li>
        </ul>
      </div>
      <div className="col-2 offset-2">
        color
      </div>

    </div>
    <Bodyside/>
    </>
  )
}

export default Profile