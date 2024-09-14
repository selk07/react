import React from "react";


class ButtonComponent extends React.Component{
   constructor(){
      super()
      this.state={name:'Alex'};
   }
   NameChange=()=>{this.setState({ name: this.state.name='Олександр' })
   }
   
   render() {
      return(
      <> 
         <input style={{ width:"200px", padding: "10px", textAlign: "center"}} value={this.state.name}  />
         <p>Ваше ім'я {this.state.name}</p>
         <button style={{ width:"200px", padding: "20px", textAlign: "center", color: "blue", fontSize:"20px"}}
               onClick={this.NameChange}>
           Оновити
         </button>
      </>)
   }
}
export default ButtonComponent
