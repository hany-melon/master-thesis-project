import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

import { Heading } from '../components/Heading';
import firebase from '../firebase/config';
import { ReleaseCard } from '../components/ReleaseCard';


export const Protal = () => {

  const [duplicate, setDuplicate] = React.useState([])
  const [values, setValues] = React.useState({
    OCID: ''
  });

  useEffect(() => {
    getProfile()
  }, [])


  const getProfile = async () => {
    const list = await firebase.getProfileInfo(values.OCID)
    setDuplicate(list)
  }

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return <>
    <Heading />

    <React.Fragment>
      <CssBaseline />
      <Container>
        <Typography
          component="div"
          role="tabpanel"
        >
          {/* {value === index && <Box p={3}>{children}</Box>} */}
          <Box p={2}></Box>
          <TextField fullWidth
            id="OCID"
            label="OCID"
            value={values.OCID}
            onChange={handleChange('OCID')}
            variant="outlined"

          />
          <Box p={2}></Box>
          <Button variant="contained" color="primary" onClick={getProfile}>
            Submit
        </Button>
        </Typography>
        <Box></Box>
        <Grid container>

          <Box
            boxShadow={0}
            bgcolor="background.paper"
            mt={5}
            p={0}
            style={{ width: '50%' }}
          >
            {ReleaseCard([values.OCID])}
          </Box>
          <Box
            boxShadow={0}
            bgcolor="background.paper"
            mt={5}
            p={0}
            style={{ width: '50%' }}
          >
            {ReleaseCard(duplicate)}
          </Box>
        </Grid>
      </Container>
    </React.Fragment>

  </>;
}