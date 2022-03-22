import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const CoffeeCard = (props) => {
  return (
    <Grid item xs={8} sm={4} md={3}>
      <Card variant="outlined">
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Hot Coffee
        </Typography>
        <Typography variant="h5" component="div">
          {props.titleProp}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.ingredientsProp}
        </Typography>
        <Typography variant="body2">
          {props.descriptionProp}
        </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default CoffeeCard