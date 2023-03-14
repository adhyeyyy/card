import { Card } from '@mui/material'
import CardHeader from '@mui/material'
import CardMedia from '@mui/material'
import { Typography } from '@mui/material/styles/createTypography'
import React from 'react'

const Card = () => {
  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader> <title>="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"</title> </CardHeader>
                
                <CardMedia
                  component="img"
                  height="194"
                  image="D:\image\paella.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </Typography>
                </CardContent>
                </Card>
          
        
    </div>
  )
}

export default Card
