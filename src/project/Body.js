import React from 'react'



const Body = () => {
  return (
    <div>
        <div className="container" id="mainContainer">
            <div className="row" id="firstdiv" >  
                <div className="col-4 P-2"> <i className="bi bi-list"></i> </div>    
                <div className="col-4"> JOBS FOR HER</div>   
                <div className="col-4"> CIRCLE </div>   
            </div>
            <ul className="row" id="seconddiv" >  
                <li className="li" > My Inventry </li>    
                <li className="li"> Company Profile </li>   
                <li className="li"> All Users </li> 
                <li className="li"> My Accounts </li>   
            </ul>
            <div className="container_1">
            <div className="row row-col-md-12">
            <div className="col"> <i className="bi bi-arrow-left"></i>My Account</div></div>
            <div className="row">
            <div className="col-md-10">My Profile </div>
            <div className="col-md-2"> <i className="bi bi-pencil-square"></i></div>
            </div>
            <div className="row" id="photo">
                <div className="col-4" id="photo1">
                    <img src="./image.jpg" className="image" alt="..."/>
                </div>
                <div>
                <ul className="list">
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


        </div>
                <div className="row">
                    <div className="col-10">My Account Setting</div>
                    <div className="col-2"> <i className="bi bi-pencil-square"></i></div>
                </div>

                <div className="col-12 offset-0" id="accountsetting" >
                <ul className="list_1">
                    
                    <li className="font1">Full Name* <span className="span1">Divya Chatergy</span> </li>
                    <li className="font1">Designation*<span className="span1">Assistant-Manager HR </span> </li>
                    <li className="font1">Phone/LandLine*<span className="span1">7012248563 </span> </li>
                    <li className="changepass">Change Password  </li>
                </ul>
               
                </div>
                <div className="row">
                    <div className="col-10">My Application Setting</div>
                    <div className="col-2"> <i className="bi bi-pencil-square"></i></div>
                </div>
                <div className="row">
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
  )
}

export default Body