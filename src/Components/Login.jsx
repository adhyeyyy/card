import React from 'react'
import { Button, TextField } from '@mui/material';
const   Login = () => {
  return (
    <div>
        <br></br> <br></br> <br></br> <h1>Facebook</h1>
     {/* <input  placeholder='Username' ></input><br></br>
       <input type='password' placeholder='password'/> <br></br>
       <br></br>  */}
       <TextField label='Username' variant='outlined'></TextField><br></br><br></br>
       <TextField label='Password' variant='outlined' type='password'></TextField>
       <br></br><br></br><Button variant='contained'>Log in</Button>
      
    </div>
  )
}

export default Login
