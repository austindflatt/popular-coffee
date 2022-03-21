import React, { Component } from 'react'
import Card from './components/Card'
import SearchBar from './components/SearchBar'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export class App extends Component {
  state = {
    title: '',
    description: '',
    ingredients: [],
    id: ''
  }
  render() {
    return (
      <>
      <CssBaseline />
      <Box m={2} pt={3}>
        <Container maxWidth="lg">
        <h1>Random Coffee Data ☕</h1>
        <SearchBar />
        <Card />
        </Container>
      </Box>
      </>
    )
  }
}

export default App