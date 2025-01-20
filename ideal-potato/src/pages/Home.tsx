import React from 'react';
import { Typography, Box } from '@mui/material';
import Counter from '../components/Counter';
import UserAccount from '../components/UserAccount';

const hobbies = ["Reading", "Coding", "Gaming", "Traveling"]

const Home = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Counter />
        <UserAccount
          name="Kaspar"
          hobbies={hobbies}
        />
    </Box>
  );
};

export default Home;
