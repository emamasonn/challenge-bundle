import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import CodeCard from '../CodeCard/CodeCardContainer'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: '50px',
    },
    marginbottom20: {
        marginBottom: 20
    },
  }));


const CreateBundle = (props) => {
    const classes = useStyles();
    let valueTitle = ''
    const sumBundles = props.selectedBundle.map((bundle) => {
        let subPrice = bundle.subItem.map((s) => s.price*s.cant)
        let value = subPrice.reduce((a, price) => a + parseFloat(price), 0);
        return parseFloat(value) + (parseFloat(bundle.price)*bundle.cant)
    })
    let sum = sumBundles.reduce((a, b) => a + parseFloat(b), 0)
    const handleTitleBundle = (event) => {
        valueTitle = event.target.value
    }

    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <h2>Available Items</h2>
                    <CodeCard controleNavegation='createbundle'/>
                </Grid>
                <Grid item xs={6}>
                    <h2>Currently Bundled</h2>
                    {props.selectedBundle.length > 0 ? <TextField onChange={handleTitleBundle} id="title-id" className={classes.marginbottom20} label="Title" variant="outlined" required/> : null}
                    <CodeCard controleNavegation='addbundle'/>
                    <div>
                        <p>{`$ ${sum}`}</p>
                        <Button variant="contained" color="secondary" onClick={() => props.recordMemory({
                            id: Math.random().toString(36).substr(2, 9),
                            title: valueTitle,
                            bundle: props.selectedBundle
                        })}>Accept Bundle</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}


export default CreateBundle;