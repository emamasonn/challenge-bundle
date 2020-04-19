import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardBundle from '../CardBundle/CardBundleContainer'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: '50px',
    },
  })); 

const ListBundles = (props) => {
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                <CardBundle />
            </Grid>
        </div>
    );
}


export default ListBundles;