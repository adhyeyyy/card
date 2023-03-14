import {Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counterr = () => {
    var [n,setn]=useState(0)
    const add=()=>{
        setn(++n)
    }
    const min =()=>{
        setn(--n)
    }
  return (
    <div>
      <Typography>{n}</Typography>
      <Button variant='contained' color='success' onClick={add}>+</Button>
      <Button variant='contained' color='error' onClick={min}>-</Button>
    </div>
  )
}

export default Counterr
