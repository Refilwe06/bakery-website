import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

const pastries = [
  { name: 'Pastry 1', image: '/images/pastry1.jpg', description: 'Description of Pastry 1' },
  { name: 'Pastry 2', image: '/images/pastry2.jpg', description: 'Description of Pastry 2' },
  { name: 'Pastry 3', image: '/images/pastry3.jpg', description: 'Description of Pastry 3' },
  { name: 'Bread 1', image: '/images/bread1.jpg', description: 'Description of Bread 1' },
  { name: 'Bread 2', image: '/images/bread2.jpg', description: 'Description of Bread 2' },
];

const MenuPage = () => (
  <Container>
    <Box my={4}>
      <Typography variant="h3" component="h1" gutterBottom>
        Our Menu
      </Typography>
      <Grid container spacing={4}>
        {pastries.map((pastry, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box>
              <Typography variant="h5" component="h2" gutterBottom>
                {pastry.name}
              </Typography>
              <img src={pastry.image} alt={pastry.name} style={{ maxWidth: '100%', height: 'auto' }} />
              <Typography variant="body1" component="p">
                {pastry.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);

export default MenuPage;
