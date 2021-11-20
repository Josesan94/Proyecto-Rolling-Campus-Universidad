import React, {useState,useEffect} from "react";

import axios from 'axios'

const URL = 'http://localhost:3001/api'
let token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk4MWVkMmQzNDYwYTc5MzIwMDUzMGMiLCJuYW1lIjoibWFyaWEiLCJzdXJuYW1lIjoiamltZW5leiIsImlkIjoxNDc4NTI0NiwiZW1haWwiOiJtYXJpYWpAaG90bWFpbC5jb20iLCJkaXIiOiJiZWxncmFubyIsImRpcl9udW0iOjE0ODksInJvbGUiOiJTVFVERU5UX1JPTEUiLCJfX3YiOjAsImlhdCI6MTYzNzQ0ODY0MiwiZXhwIjoxNjM3NDUyMjQyfQ.kL55sOW09hSAi96GzTJD9wnQklu6aDsX1O9iSQDoZo2q5_zGWJp2BIK5etFsj1mHjwnuBhlVZWuYR3CtbBQL5A"

function Users() {

    const users2 = [
        {email:"mariaj@hotmail.com",
         password:"alfabeta", 
    }
    ]

    const [users, setUsers] = useState(users2);




const handleGetUsers = () => {
  axios.get(`${URL}/users`,{
      headers: {
          
        Authorization: token
      }
  })
  .then(response => {
      console.log(response.data)

  })
  .catch(err => {
      console.log('el error es',err)
  })
  
};

useEffect(() => {
    handleGetUsers()
}, []);


return (
    <>
    <h1>Users</h1>

    {users.map((user) => {
        return (
            <>
            <p>
             {user.email}
             <span> </span>
             {user.password}
            </p>
            </>
        )
    })}
    </>
)
}


export default Users;
