import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Triall = () => {
    var [pagename,setpagename]=useState("Home Page")
    const Home=()=>{
        setpagename("Home")}
        const Gallery=()=>{
            setpagename("Gallery")}
            const Contact=()=>{
                setpagename("Contact")  
    }
  return (
    <div>
       <Button variant='contained' color='secondary' onClick={Home}>Home</Button>
        <Button variant='contained' color='error' onClick={Gallery}>Gallery</Button>
        <Button variant='contained' color='warning' onClick={Contact}>Contact</Button>
        <Typography>Welcome to {pagename}</Typography>
    </div>
  )
}

export default Triall
