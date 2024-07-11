import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const HomePage = () => (
  <Container>
    <Box >
      <Carousel  autoPlay interval={3000} infiniteLoop >
        <div>
          <img src="../images/bakery1.jpg" alt="Bakery 1" />
          <p className="legend">Fresh Bread</p>
        </div>
        <div>
          <img src="../images/bakery2.jpg" alt="Bakery 2" />
          <p className="legend">Delicious Pastries</p>
        </div>
        <div>
          <img src="../images/bakery3.jpg" alt="Bakery 3" />
          <p className="legend">Tasty Cakes</p>
        </div>
      </Carousel>
      <Typography variant="h5" component="p" className="carousel-text">
          We bake fresh bread and pastries daily!
        </Typography>
    </Box>
  </Container>
);

export default HomePage;
