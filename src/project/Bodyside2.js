import React from 'react'

const Bodyside2 = () => {
  return (
   
        <div className="row" id="rowrow">
            <div className="col-2 " id="rowrowcol">

            <div  id="bodyside">
            <div className="row" id="bodysiderow">
             
            <div className="col-4 offset-6" id="bodysidecol4">
                <h2>Heloo,</h2>
                </div>
               <div className="row offset-4" >
                <h5 className="hewlett">Hewlett Packard E...</h5>
                </div>
           
            </div>
            <div className="row" id="menulistrow" >
            <ul className="menulist">
                <li className="menulistli"><span className="menulistlispan"><i class="bi bi-motherboard"></i></span>Dashbord</li>
                <li className="menulistli"><span className="menulistlispan"><i class="bi bi-briefcase"></i></span>Jobs</li>
                <li className="menulistli"><span className="menulistlispan"> <i class="bi bi-card-list"></i></span>Application</li>
                <li className="menulistli"><span className="menulistlispan"><i class="bi bi-people-fill"></i></span>Followers</li>
                <li className="menulistli"><span className="menulistlispan"><i class="bi bi-journal-album"></i></span>My Inventory</li>
                <li className="menulistli"><span className="menulistlispan"><i class="bi bi-building"></i></span>Company Profile</li>
                <li className="menulistli"><span className="menulistlispan"><i class="bi bi-people"></i></span>All User</li>
                <li className="menulistli"><span className="menulistlispan"><i class="bi bi-person"></i></span>My Account</li>

            </ul>
            </div>
           
              
            </div>
         
            </div>
            

           
            <div className="col-7 offset-1 " >
            <div className="row" id="rowrowcol">
                <div classsName="col-12" id="account">
                    <ul className="accountsetting">
                        <li className="accountsettingli"><i className=" bi bi-chevron-left " ></i></li>
                        <li className="accountsettingli">MY ACCOUNT</li>
                    </ul>
                      

            </div>
             
  
            </div>
            <div className="row" id="myprofilerow">
                <h5 className="myprofile" >My Profile</h5>
                  <p className="pencil offset-10"><i className="bi bi-pencil-square"></i></p>  
                </div>  
                <div className="row" id="photo">
                <div className="col-4" id="photo1">
                    <img src="./image.jpg" className="image" alt="..."/>
                </div>
                <div>
                <ul className="profiledivya">
                    <li className="font"> Divya Chatergy</li>
                    <li className="font1">Designation </li><span className="span1">Assistant Manager HR</span>
                    <li className="font1">Company Name </li><span className="span1">XYZ Company Name </span>
                
                </ul>
                </div>
                 </div>

            <div className="row" id="aboutme">
                <div className="col-4 w-100" id="aboutme1"> About me</div>
                <div className="col-10"><p>Microsoft Corporation is an American multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services. Wikipedia
                    </p></div>
                      
                </div>
                <div claswName="row " id="lastrow">
                    <div className="col-5 " id="col5">
                    <div className="row">
                    <div className="col-10">My Account Setting</div>
                    <div className="col-2"> <i className="bi bi-pencil-square"></i></div>
                </div>
                      <ul className="list_1">
                    
                    <li className="font1">Full Name* <span className="span1">Divya Chatergy</span> </li>
                    <li className="font1">Designation*<span className="span1">Assistant-Manager HR </span> </li>
                    <li className="font1">Phone/LandLine*<span className="span1">7012248563 </span> </li>
                    <li className="changepass">Change Password  </li>
                </ul>
                    </div>
                    <div className="col-5 " id="col6">
                    <div className="row">
                    <div className="col-10">My Application Setting</div>
                    <div className="col-2"> <i className="bi bi-pencil-square"></i></div>
                </div>
                <div className="row" id="rowlast">
                    <div className="col-6 w-100">Receive job Application via</div>
                    <ul className="end">
                        <li>* only on my dashbord</li>
                        <li>* Email and on my mobile</li>
                    </ul>
                    <div className="row col-12" id="lastline">*Please Note this setting will not impact
                    your old job posting</div>
                </div>
                    </div>

                </div>
                
                </div>
                </div>
  )
}

export default Bodyside2