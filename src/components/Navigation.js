import React from 'react';

import {Link} from 'gatsby';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import withRoot from '../withRoot';

const styles = {
  grow: {
    flexGrow: 1,
  },
};

const brand = 'kiran'
const Navigation = (props) => {
  const {classes} = props
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          <Link to="/">{brand.toUpperCase()}</Link>
        </Typography>
        <Typography variant="h4" color="inherit">
          <Link to='/blog'>Blogs</Link>
        </Typography>
        <Typography variant="h4" color="inherit">
          <Link to='/projects'>My work</Link>
        </Typography>
        <Typography variant="h4" color="inherit">
          <Link to='/contact'>Contact</Link >
        </Typography>
      </Toolbar>
  </AppBar> 
  );
}

export default withRoot(withStyles(styles)(Navigation));