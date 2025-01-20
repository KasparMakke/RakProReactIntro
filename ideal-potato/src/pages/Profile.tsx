import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Profile = () => {
  const [name, setName] = useState('');
  const [hobbies, setHobbies] = useState('');

  const handleSubmit = () => {
    console.log({ name, hobbies });
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <TextField
        fullWidth
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Hobbies"
        variant="outlined"
        value={hobbies}
        onChange={(e) => setHobbies(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Save
      </Button>
    </Box>
  );
};

export default Profile;
