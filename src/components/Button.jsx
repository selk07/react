function Button(props){
   const {text}=props
   return <button onClick={()=>console.log(text)}>{text}</button>
}

export default Button