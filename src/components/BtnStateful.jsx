import React, { useState } from 'react';

function Stateful (props) {
   const [text, setText]=useState("Alex")
   const {name}=props

   function ChangeInput(e){
      setText(e.target.value);
   }
   return (
      <> 
         <input style={{ width:"200px", padding: "10px", textAlign: "center"}} type="text" value={text} onChange={ChangeInput} />
         <p>Ваше ім'я {text}</p>
         <button style={{ width:"200px", padding: "20px", textAlign: "center", color: "blue", fontSize:"20px"}} onClick={() => setText('Олександр')}>
           {name}
         </button>
      </>
   )
}
export default Stateful
