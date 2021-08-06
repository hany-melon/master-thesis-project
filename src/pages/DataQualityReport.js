import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';


export const DataQualityReport = () => {

  return <>

    <React.Fragment>   
      <CssBaseline />
      <Container>
        <Grid container>
          <Box
            boxShadow={0}
            bgcolor="background.paper"
            m={1}
            mt={5}
            p={3}
            style={{ width: '50%', fontFamily: 'Roboto', color: '#707070' }}
          >
            <h1>Welcome to the investment community</h1>
            <h1>Connect with your potential investors</h1>
            <h1>Find interesting project in the early phases</h1>
          </Box>
          <Box
            boxShadow={2}
            bgcolor="background.paper"
            m={1}
            mt={5}
            p={0}
            style={{ width: '45%', boxShadow: '0 5px 15px 0 #a3baec' }}
          >
            
          </Box>
        </Grid>
      </Container>
    </React.Fragment>
  </>;
}