import React, { useState ,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Signin() {
    const[email ,setEmail]=useState();
    const[password ,setPassword]=useState();
    const Navigate = useNavigate();
   const add=(e)=>{
    console.log(email);
    axios.post('http://localhost:3000/register',{email,password});
    alert('successfully registered');
    Navigate('/')
   }
  return (
    <div>
      <h1 className='head' align='center' >WELCOME TO THE SIGN IN PAGE</h1>
      <div className='outside'>
      <div className='inside' >
    <form>
      <table  className='table' cellPadding={'20px'}> 
        <tr>
            <td><label>Email</label></td>
            <td><input type='text' placeholder='enter email' id='email'onChange={(e)=>setEmail( e.target.value)}></input></td>
        </tr>
        <tr>
            <td><label>Password</label></td>
            <td><input type='text' placeholder='enter password' id='password' onChange={(e)=>setPassword( e.target.value)}></input></td>
        </tr>
        <tr>
            <td>

            </td>
            <td>
               
                   <input onClick={add} type='button' value={'Sign in'}></input>
            
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
            <Link to='/'>
                <input type='button' value={'login'}></input>
            </Link>
            </td>
            
            
        </tr>
        
      </table>
      </form>
      </div>
    </div>
    </div>
  )
}

export default Signin
