import React, { Component } from 'react'
import CoffeeCard from './components/Card'
import SearchBar from './components/SearchBar'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

export class App extends Component {
  state = {
    coffee: [
      {
        title: '',
        description: '',
        ingredients: []
      }
    ],
    icedCoffee: [
      {
        title: '',
        description: '',
        ingredients: []
      }
    ],
  }

  componentDidMount = async () => {
    this.getCoffeeData();
  }

  getCoffeeData = async () => {
    const response = await fetch('https://api.sampleapis.com/coffee/hot');
    const data = await response.json();
    console.log(data)
    this.setState({
      coffee: data,
    })
  }

  getIcedCoffeeData = async () => {
    const response = await fetch('https://api.sampleapis.com/coffee/iced');
    const data = await response.json();
    console.log(data)
  }

  render() {
    const { title, description, ingredients } = this.state.coffee;
    return (
      <>
      <CssBaseline />
      <Box m={2} pt={3}>
        <Container maxWidth="lg">
        <h1>Popular coffee drinks ☕</h1>
        <SearchBar />
        <Stack spacing={2} direction="row">
          <Button variant="outlined">Hot Drinks</Button>
          <Button variant="outlined">Iced Drinks</Button>
        </Stack>
        <br />
        <div>
        </div>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop: '10px' }}>
        {this.state.coffee.map(({ title, ingredients, description }, idx) => {
          return (
            <CoffeeCard
            key={idx}
            titleProp={title}
            ingredientsProp={ingredients}
            descriptionProp={description}
            />
          )
        })}
        </Grid>
        <button onClick={this.getIcedCoffeeData}>Click</button>
        </Container>
      </Box>
      </>
    )
  }
}

export default App