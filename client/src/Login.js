import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
    const[email ,setEmail]=useState();
    const[password ,setPassword]=useState();
    const Navigate=useNavigate();
    const chech=()=>{
        console.log(email ,password)
        axios.post('http://localhost:3000/check',{email,password})
        .then((res)=>{
           console.log(res.data)
            if(res.data=='success'){
                
                Navigate('/welcome')
            }
            if(res.data=='incorrect password'){
              alert('incorrect password')
            }
            if(res.data=='no such record'){
             alert('no such record')
           }
 
        })
        .catch((error)=>{console.log('somethig went wrong');})
    }
   
   
  return (
    <div>
      <h1 className='head' align='center' >WELCOME TO THE LOGIN PAGE</h1>
      <div className='outside'>
      <div className='inside' >
    <form>
      <table  className='table' cellPadding={'20px'}> 
        <tr>
            <td><label>Email</label></td>
            <td><input type='text' placeholder='enter email' id='email' onChange={(e)=>{
                setEmail(e.target.value);
            }}></input></td>
        </tr>
        <tr>
            <td><label>Password</label></td>
            <td><input type='text' placeholder='enter password' id='password' onChange={(e)=>{
                setPassword(e.target.value)
            }}></input></td>
        </tr>
        <tr>
            <td>
            </td>
            <td><input onClick={chech} type='button' value={'login'}></input></td>
        </tr>
        <tr>
            <td>
            <label style={{color:'white'}}>Dont have an accound?</label>
            </td>
            <td>
               
                <Link to='/signin'>
                <input type='button' value={'Sign in'}></input>
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

export default Login
