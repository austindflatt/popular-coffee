import React, { Component } from 'react'
import CoffeeCard from './components/Card'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { TextField, Pagination } from '@mui/material'

let type = 'hot';

export class App extends Component {
  state = {
    coffee: [
      {
        title: '',
        description: '',
        ingredients: []
      }
    ],
    search: '',
    page: 1,
  }

  componentDidMount = async () => {
    this.getCoffeeData();
  }

  getCoffeeData = async () => {
    const response = await fetch(`https://api.sampleapis.com/coffee/${type}`);
    const data = await response.json();
    console.log(data)
    this.setState({
      coffee: data,
    })
  }

  render() {
    return (
      <>
      <CssBaseline />
      <Box m={2} pt={3}>
        <Container maxWidth="lg">

        <h1>Popular coffee drinks ☕</h1>

        <TextField
        fullWidth
        id="fullWidth"
        color="primary"
        label="Search for a coffee drink"
        onChange={(e) => this.setState({
          search: e.target.value
        })}
        style={{ marginBottom: 20, marginTop: 20 }}
        />

        <Stack spacing={2} direction="row">
          <Button
          variant={type === 'hot' && "contained"}
          onClick={() => {type = 'hot'
          this.getCoffeeData()}}>
            Hot Drinks
          </Button>
          <Button
          variant={type === 'iced' && "contained"}
          onClick={() => {type = 'iced'
          this.getCoffeeData()}}>
            Iced Drinks
          </Button>
        </Stack>

        <br />
        <div>
        </div>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop: '10px' }}>
        {this.state.coffee.filter((coffees) => {
          if(this.state.search === '') {
            return coffees
          } else if (coffees.title.toLowerCase().includes(this.state.search.toLowerCase())) {
            return coffees
          }
        })
        .slice((this.state.page - 1) * 16, (this.state.page - 1) * 16 + 16)
        .map(({ title, ingredients, description }, idx) => {
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

        <Pagination
        count={(this.state.coffee.length / 16).toFixed(0)}
        onChange={(_, value) => {
        this.setState({
          page: value,
        })
        window.scroll(0, 450);
        }}
        style={{ padding: 20, width: '100%', display: 'flex', justifyContent: 'center' }}
        />

        </Container>
      </Box>
      </>
    )
  }
}

export default App