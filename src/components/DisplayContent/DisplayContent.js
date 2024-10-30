import React from 'react'
import RightSidePanel from '../RightSide/RightSidePanel'
import LeftSidePanel from '../LeftSide/LeftSidePanel'
function DisplayContent(props) {
  return (
    <div style={{display:'flex'}}>
         <div> 
         <RightSidePanel />
           
         </div>
         <div>
           <LeftSidePanel />
         </div>
    </div>
  )
}

export default DisplayContent
