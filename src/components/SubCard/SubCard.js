import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
    card: {
      minWidth: 275,
      marginBottom: 23,
      marginLeft: 20,
      marginRight: 20,
      boxShadow: 'unset',
      border: '1px solid aliceblue',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      
    },
    headerCard: {
        display: 'flex',
        justifyContent: 'space-between', 
    },
    cardSub: {
        paddingLeft: 35,
    }
})

const SubCard = (props) => {
    const classes = useStyles();
    const subItem = props.subItem
    const handleCant = (cant, id) => {

      console.log('subitemhggv')
      let item = {
        'id': id,
        'cant': cant,
        'patter': 'children'
      }
      props.cantItem(item)
    }

    return (   
    <Card className={classes.card}>
      <CardContent>
        <div className={ classes.headerCard}>
            <Typography variant="h5" component="h2" >
                {subItem.code}
            </Typography>
            {props.deleteSubItem === 'createitems' ? <Button variant="contained" color="secondary" onClick={() => props.deleteItem(subItem.id)}>Delete</Button> : null }
            
        </div>
        <Typography className={classes.pos} component="p" color="textSecondary">
          {subItem.description}
        </Typography>
        <Typography className={classes.pos} component="p" color="textSecondary">
          {`$${subItem.price}`}
        </Typography>
        <Typography className={classes.pos} component="p" color="textSecondary">
          {subItem.radioType}
        </Typography>
        {
          (props.deleteSubItem === 'addbundle' && subItem.radioType === 'Multiple') ? 
          <div>
            <TextField type="number" inputProps={{ min: "1", max: "10", step: "1" }} onChange={(e) => handleCant(e.target.value, subItem.id)} />
            <Typography className={classes.pos} component="p" color="textSecondary">
              
            </Typography>
          </div> : null
        }
        {(subItem.radioType === 'Multiple' && props.detailMul) ? <Typography className={classes.pos} component="p" color="textSecondary"> {`$ ${parseFloat(subItem.price)*subItem.cant} (x${subItem.cant})`} </Typography>: null}
      </CardContent>
    </Card>
  );
}

export default SubCard;