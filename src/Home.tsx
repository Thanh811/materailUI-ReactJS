import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ImageUpload from './ImageUpload';
import Information from './Information';

const Home = () => {
  return (
<Box>
<Typography variant="h5" gutterBottom>
    2. Create a display page to show uploaded image with the accompanying data. Do some simple formatting to make it look good
  </Typography>
  <Grid container>
    <Grid item xs={6}>
      <ImageUpload />
    </Grid>
    <Grid item xs={6}>
      <Information />
    </Grid>
  </Grid>
</Box>
  )
}

export default Home
