import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {fetchReleases} from '../services/ocds'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  text: {
    overflow: 'auto',
  }
}));

export const ReleaseCard = (ocid)=> {

//   const [loading, setLoading] = useState(false)
  const classes = useStyles();
  const [activitystring, setActivitystring] = useState([])
//   React.useEffect(() => {
//     getFact();
//     console.log('caooooo')
//   }, []);

  const getFact = async (id) => {
    // setLoading(true)
    console.log('ccccccnm ',id)
        console.log("cao ",id)
        let activityString = await fetchReleases(id);
        console.log('as', activityString.uri)
        setActivitystring(JSON.stringify(activityString,null,1)) 
}
  return (
    <div className={classes.root}>
      {ocid.map((id) => (
       <Accordion  onChange = {(e,expanded) => {
         if(expanded){
          getFact(id)
         }
        }}>
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel1a-content"
         id="panel1a-header"
       >
         <Typography className={classes.heading}>{id}</Typography>
       </AccordionSummary>
       <AccordionDetails>
         <Typography className={classes.text}>
         <pre style={{ wordWrap: 'break-word',
            whiteSpace: 'pre-wrap'}}>{activitystring}</pre>
         </Typography>
       </AccordionDetails>
     </Accordion>
    ))
    }
    </div>
  );
}