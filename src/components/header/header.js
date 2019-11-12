import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
  link: {
    textDecoration: 'none' 
  },
  btns: {
    position: 'absolute',
    right: '0px',
    marginRight: '40px'
  },
  bar: {
    backgroundColor:'white',
    color: 'black'
  }
}));


export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <nav>
        <AppBar position="static" className={classes.bar}>
          <Toolbar>
            <Typography gutterBottom variant="h6" component="h2">
              LOGO    
            </Typography>
       
            <div className = {classes.btns}>
              <Link to="/" className={classes.link}>
                <Button className={classes.button}>
                  HOME
                </Button>
              </Link>
              <Link to="/about" className={classes.link}>
                <Button className={classes.button}>
                  ABOUT
                </Button>
              </Link>
              <Link to="/contact" className={classes.link}>
                <Button className={classes.button}>
                  CONTACT
                </Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </nav>
    </div>
  );
}
