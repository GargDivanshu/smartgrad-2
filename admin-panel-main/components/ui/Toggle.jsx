import React from 'react'

const Toggle = ({disable}) => {
    var notAllow = ""
     if (disable === true) {
        notAllow="hover:cursor-not-allowed"
     } else {
        notAllow=""
     }

     if(disable) {
      return (
         <label class={`switch ${notAllow}`} disabled>
         <input type="checkbox" disabled/>
         <span class={`slider round ${notAllow}`} disabled></span>
       </label>
       )
     }


  return (
   <>
 
    <label class={`switch`}>
    <input type="checkbox"/>
    <span class={`slider round`}></span>
  </label>

  </>
  )
}

export default Toggle