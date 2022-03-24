import React from 'react'

const MyAccount = () => {
  return (
 
        <div className="container" id="mainContainer">
            <div className="row" id="firstdiv" >  
                <div className="col-4"> <i className="bi bi-list"></i> </div>    
                <div className="col-4"> JOBS FOR HER</div>   
                <div className="col-4"> CIRCLE </div>   
            </div>
            <div className="row row-col-md-12" >  
                <div className="col-md-3 "> My Inventry </div>    
                <div className="col-md-3"> Company Profile </div>   
                <div className="col-md-3"> All Users </div> 
                <div className="col-md-3"> My Accounts </div>   
            </div>
            <div className="container_1">
            <div className="row_1 row-col-md-12">
            <div className="col"> <i className="bi bi-arrow-left"></i>My Account</div></div>
            <div className="row_1">
            <div className="col-md-10">My Profile </div>
            <div className="col-md-2"> <i className="bi bi-pencil-square"></i></div>
            </div>
            <div className="row_2">
                <div className="col-7">    <img src="./image.jpg" className="image" alt="..."/></div>
                <ul className="list">
                    <li className="font"> Divya Chatergy</li>
                    <li className="font1">Designation </li><span className="span1">Assistant Manager HR</span>
                    <li className="font1">Company Name </li><span className="span1">XYZ Company Name </span>
                
                </ul> </div>

            <div className="row_about">
                <div className="col-2"> About me</div>
                <div className="col-10"><p>Microsoft Corporation is an American multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services. Wikipedia
                    </p></div>
            </div>


        </div>
    </div>
    
  )
}

export default MyAccount