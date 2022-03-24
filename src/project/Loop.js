import React from 'react'

const Loop = ({enter}) => {
  return (
    <div>
        <div className="col-12">
                
                
                {
                    enter.map((e)=>
                        ( <>
                        <p className="maping">{e}</p>
                        </>)
                    )
                  
                }
              
            
        </div>
        </div>
    
  )
}

export default Loop