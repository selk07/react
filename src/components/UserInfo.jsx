import React, { useState, useEffect } from 'react';

function UserData() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/7')
            .then(response => response.json())
            .then(data => {
                setUser(data);
            })
            .catch((error) => {
               console.log(error)
           });
    }, []); 

    return (
        <div>
            {user ? (
                <div style={{textAlign:'left'}}>
                    <p>Ім'я: <span style={{backgroundColor:'white',color:"black", padding:"5px"}}>{user.name}</span></p>
                    <p>Email: <span style={{backgroundColor:'white',color:"black", padding:"5px"}}>{user.email}</span></p>
                </div>
            ) : (
                <p>Завантаження даних...</p>
            )}
        </div>
    );
}
export default UserData