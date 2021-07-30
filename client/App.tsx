import { useState } from 'react';
import axios from 'axios';
import './styles.css';
import IMAGE from './assets/Pierres_shop.png';

// export interface user {
//   username: string
// }

export const App:React.FC = () => {
  
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [loggedIn, setLoggedIn] = useState(false);

   const login = (e:any) => {
     e.preventDefault();
     if(loggedIn){
       console.log('You are already logged in!');
       return;
     }
     axios.post("/api/login", {
      data: {
        username: username,
        password: password,
      },
    })
    .then((res) => {
      console.log(res.data);
      if(res.data.message === 'You successfully logged in!'){
        setLoggedIn(true);
      }
    })
    .catch((err) => console.log(err));
   }

   const register = (e:any) => {
    e.preventDefault();
    axios.post("/api/register", {
     data: {
       username: username,
       password: password,
     },
   })
   .then((res) => {
     console.log(res.data);
     
   })
   .catch((err) => console.log(err));
  }


    return (
    <>
      <h1>Pierre's Store</h1>
      <img src={IMAGE} alt="Pierre's Store" width="300" height="200" />
        <form>
        <input
          id="taskForm"
          type="form"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          id="taskForm"
          type="form"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        /> 
        <button id="loginBtn" className="submitTask" onClick={login}>Login</button>
        <button id="registerBtn" className="submitTask" onClick={register}>Register</button>
      </form>
      <img src="https://pierresstore.s3.us-east-2.amazonaws.com/Grass_Starter.png"/>
       
    </>
  )
}
