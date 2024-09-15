import React, {useRef} from "react";

function UncontrolledForm(){
   const inputRef=useRef(null);
   const handleSubmit = (event) => {
      alert(`Ви ввели: ${inputRef.current.value}`);
      event.preventDefault();
    };
    return (
      <form onSubmit={handleSubmit}>
        <label style={{fontSize:"24px"}}>
          Ім'я:
          <input style={{ width:"200px", padding: "10px", margin:"20px", fontSize:"18px"}} type="text" ref={inputRef} />
        </label>
        <button style={{width:"120px", padding: "10px",fontSize:"18px"}}type="submit">Надіслати</button>
      </form>
    );
}
export default UncontrolledForm