import React from 'react';

import {Link} from 'gatsby';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import withRoot from '../withRoot';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const brand = 'kiran'
const Navigation = (props) => {
  const {classes} = props
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {brand.toUpperCase()}
        </Typography>
        <Link to='/Blogs'>Blogs</Link>
        <Button color="inherit">My work</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
  </AppBar> 
  );
}

export default withRoot(withStyles(styles)(Navigation));