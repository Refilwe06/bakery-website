import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Image from 'mui-image'; 

const AboutPage = () => (
  <Container>
    <Box my={4}>
      <Typography variant="h3" component="h1" gutterBottom>
        About Us
      </Typography>
      <Box mb={4}>
        <Image 
          src="../images/bakery1.jpg"
          alt="Bakery"
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} 
        />
      </Box>
      <Typography variant="body1" component="p" paragraph>
        Our bakery was established in 1990 with the mission to bring joy through our delicious pastries.
      </Typography>
      <Typography variant="body1" component="p" paragraph>
        We value quality, tradition, and community, and strive to use the best ingredients in all our products.
      </Typography>
    </Box>
  </Container>
);

export default AboutPage;
