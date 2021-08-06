import React,{useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'; 
import { Redirect } from 'react-router-dom'; 

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: "white",
      '&:hover': {
        textDecoration: "none",
      },
    },
    login: {
      backgroundColor: 'white',
      color: '#2E73AC',
      fontWeight: '600',
      '&:hover': {
        background: "#c7cfdf",
      },
    },
    signup: {
      color: "white",
      fontWeight: '600',
      border: '0',
    },
  }));

export const Heading = (props) => {
    const classes = useStyles();
    
    return <>

            <AppBar position="static" style={{ backgroundColor: '#2E73AC' }}>
                <Toolbar>
                <Typography variant="h6" className={classes.title} >
                    <Link className={classes.link} href="/" >MasterProject</Link>
                </Typography>
                <Button variant="outlined" className={classes.signup} href='/Signup'>Join now</Button>
                <Button variant="outlined" className={classes.login} href='/Login'>Sign in</Button>
                </Toolbar>
            </AppBar>

    </>
}
