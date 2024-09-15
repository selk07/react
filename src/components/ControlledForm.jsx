import React, {useState} from 'react'

function ControlledForm () {
   const [value, setValue]=useState('')
   const handleChange=(e)=> {setValue (e.target.value)
   console.log(e.target.value)}
   return (
      <form>
         <label style={{fontSize:"24px"}}> Ім'я:
            <input style={{ width:"200px", padding: "10px", margin:"20px", fontSize:"18px"}} type="text" value={value} onChange={handleChange} />
         </label>
      </form>
   )
}
export default ControlledForm