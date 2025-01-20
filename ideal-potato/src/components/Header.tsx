import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavLinkWrapper = React.forwardRef<HTMLAnchorElement, { to: string } & React.ComponentPropsWithoutRef<typeof NavLink>>(
  (props, ref) => <NavLink {...props} ref={ref} />
);

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Box>
          <Button color="inherit" component={NavLinkWrapper} to="/" sx={{ mx: 1 }}>
            Home
          </Button>
          <Button color="inherit" component={NavLinkWrapper} to="/login" sx={{ mx: 1 }}>
            Login
          </Button>
          <Button color="inherit" component={NavLinkWrapper} to="/profile" sx={{ mx: 1 }}>
            Profile
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
