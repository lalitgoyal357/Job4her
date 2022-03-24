import React,{useState} from 'react'
import "./App.css"
import Loop from './Loop';


const Input = () => {

    const [data,setData]=useState();
    const [enter,setEnter]=useState([]);
    
    const Submit=(()=>{
        if(data!==""){
        setEnter((array)=>{
            return [...array,data]
        })
        setData("");
    }})

  return (
    <div  id="input">
        <div className="row" >
            <div className="col-12">
        <input id="input1" type="text" placeholder='make a comment' onChange={(e)=>setData(e.target.value)}  value={data}></input>
        </div> 
        </div>
        <div className='col-12'>
        <div className="button">
        <div className="col-6"><button onClick={Submit}>SUBMIT</button></div>
        <div className="col-6"><button>Cancel</button></div>
        </div>   
        </div>
      
        <div className="row" id="map">
            <p className="col" id="mapings">My Account </p>
            </div>
            <Loop enter={enter}/>
            
            </div>
            
        

    
  )
}

export default Input