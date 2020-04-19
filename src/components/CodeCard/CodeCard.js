import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import SubCard from '../SubCard/SubCardContainer'


const useStyles = makeStyles({
    card: {
      minWidth: 275,
      marginBottom: 35,
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

const CodeCard = (props) => {
    const classes = useStyles();
    const datoItem = props.controleNavegation !== 'addbundle' ? props.itemsCode : props.bundles
    const handleCant = (cant, id) =>{
      let item = {
          'id': id,
          'cant': cant,
          'patter': 'patter'
      }
      props.cantItem(item)
    }

    return (
     <div>
        {
          datoItem.map((i, index)=>(
            <Card className={classes.card} key={index}>
              <CardContent>
                <div className={ classes.headerCard}>
                    <Typography variant="h5" component="h2" >
                      {i.code}
                    </Typography>
                    { 
                      props.controleNavegation === 'createitems' ?
                      <Button variant="contained" color="secondary" onClick={() => props.deleteItem(i.id)}>Delete</Button> :
                      props.controleNavegation === 'createbundle' ? 
                      <Button variant="contained" color="primary" onClick={() => props.addBundle(i)}>Add to Bundle</Button>:
                      <Button variant="contained" color="secondary" onClick={() => props.deleteBundle(i.id)}>Delete</Button>
                    }
                </div>
                <Typography className={classes.pos} component="p" color="textSecondary">
                  {i.description}
                </Typography>
                <Typography className={classes.pos} component="p" color="textSecondary">
                  {`$${i.price}`}
                </Typography>
                <Typography className={classes.pos} component="p" color="textSecondary">
                  {i.radioType}
                </Typography>
                {
                  props.controleNavegation === 'addbundle' && i.radioType === 'Multiple' ? 
                  <div>
                    <TextField type="number" inputProps={{ min: "1", step: "1" }} onChange={(e) => handleCant(e.target.value, i.id)} />
                    <Typography className={classes.pos} component="p" color="textSecondary"></Typography>
                  </div> : null
                }
              </CardContent>
              {/*i.subItem.length !== 0 ? <h4>Sub-Items</h4>:''*/}
              {
                i.subItem.map((sub, index)=>(
                  <SubCard 
                    key={index}
                    subItem={sub}
                    deleteSubItem={props.controleNavegation}
                  />
                ))
              }
            </Card>
          ))
        }
     </div>
  );
}


export default CodeCard;