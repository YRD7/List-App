import React from 'react'

function Options({data}) {
  return (<>
    <option > </option>
    {
      // creating options through iterations
        data.range.map((dat)=>{
            return(
                
                     <option key={dat} >{dat}</option>
                
            )
        })
    }
    </>
  )
}

export default Options