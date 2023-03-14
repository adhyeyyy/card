import {Button , Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
    var [fname,setfname] = useState("Tiya")
    const changename=()=>{
        setfname('Mridula')
    }
  return (
    <div>
        <Typography variant='h4'>Welcome {fname}</Typography>
        <Button variant='contained' color='primary' onClick={changename}>Change name</Button><br></br>
    </div>
  )
}

export default Statebasic
