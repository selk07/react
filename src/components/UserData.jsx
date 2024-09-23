import './../App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


function UserData() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);


  async function getData (){

      await axios.get('https://jsonplaceholder.typicode.com/users/3')
        .then(response => {
          setTimeout(() => {
              setUser(response.data);
             
              setError(false);
          }, 1000)
        })
        .catch(function (error) {
          setError(true);
          console.log(error);
          })
  }
    useEffect(() => {getData()}, []); 

  return (
      <div>
          {user ? (
              <div style={{textAlign:'center'}}>
                  <p>Ім'я: <span style={{backgroundColor:'white',color:"black", padding:"5px"}}>{user.name}</span></p>
                  <p>Email: <span style={{backgroundColor:'white',color:"black", padding:"5px"}}>{user.email}</span></p>
              </div>
          ) : (
             <p>Завантаження даних...</p>
          )}
          
          {error && <p style={{fontSize:'52px',color:"red"}}>Виникла помилка!</p>}
      </div>
  );
}

export default UserData;