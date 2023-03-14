import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography variant='h4'>Facebook</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
