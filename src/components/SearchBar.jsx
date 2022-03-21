import { TextField, LinearProgress } from '@mui/material';

import React from 'react'

const SearchBar = () => {
  return (
	<>
	<TextField
	fullWidth
	id="fullWidth"
	color="primary"
	label="Search for a coffee drink"
	value={null}
	onChange={null}
	style={{ marginBottom: 20, marginTop: 20 }}
	/>
	</>
  )
}

export default SearchBar