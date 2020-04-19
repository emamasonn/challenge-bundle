import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SubCard from '../SubCard/SubCardContainer'


const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    heardBundle: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    card: {
      minWidth: '100%',
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
    },
    buttomPrint:{
      marginRight: 20,
    }
})

const CardBundle = (props) => {
    const classes = useStyles();
    let listbundles = ''
    let allBundles = []
    if(localStorage.getItem("Bundles") !== null){
      listbundles = localStorage.getItem("Bundles");
      allBundles = JSON.parse(listbundles)
    }

    useEffect(()=>{
      props.loadListBundles(allBundles);
    },[]);
    
    const totalPrice = (bundle) => {
      const sumBundles = bundle.map((item) => {
        let subPrice = item.subItem.map((s) => (parseFloat(s.price) * s.cant))
        let value = subPrice.reduce((a, price) => a + parseFloat(price), 0);
        return parseFloat(value) + (parseFloat(item.price)*item.cant)
      })
      let sum = sumBundles.reduce((a, b) => a + parseFloat(b), 0)
      return parseFloat(sum)
    }

    return(
     <div className={classes.root}>
        { 
          props.listBundles.map((bundle, index)=>(
            <React.Fragment key={index}>
              <div className={classes.heardBundle}>
                <Typography variant="h5" component="h2" >
                    {bundle.title}
                </Typography>
                <div>
                    <Button className={classes.buttomPrint} variant="contained" color="primary" onClick={() => console.log('print')}>Print</Button>
                    <Button variant="contained" color="secondary" onClick={() => props.deleteListBundle(bundle.id)}>Delete</Button>
                </div>
              </div>
            {
              bundle.bundle.map((itemBundle)=>(
                <React.Fragment>
                <Card className={classes.card}>
                  <CardContent>
                    <div className={ classes.headerCard}>
                      <Typography variant="h5" component="h2" >
                        {itemBundle.code}
                      </Typography>
                      <Typography>{ `$ ${totalPrice(bundle.bundle)}`}</Typography>
                    </div>
                    <Typography className={classes.pos} component="p" color="textSecondary">
                      {itemBundle.description}
                    </Typography>
                    <Typography className={classes.pos} component="p" color="textSecondary">
                      { itemBundle.price}
                    </Typography>
                    <Typography className={classes.pos} component="p" color="textSecondary">
                    {itemBundle.radioType}
                    </Typography>
                    {itemBundle.radioType === 'Multiple' ? <Typography className={classes.pos} component="p" color="textSecondary"> {`$ ${parseFloat(itemBundle.price)*itemBundle.cant} (x${itemBundle.cant})`} </Typography>: null}
                    
                  </CardContent>
                  {/*i.subItem.length !== 0 ? <h4>Sub-Items</h4>:''*/}
                  {
                    itemBundle.subItem.map((sub)=>(
                        <SubCard 
                          key={sub.id}
                          subItem={sub}
                          deleteSubItem={false}
                          detailMul={true}
                        />
                      ))
                  }
                </Card>
                </React.Fragment>
              ))
              
            }
            </React.Fragment>
          ))
          
        }
      </div>
    );
}


export default CardBundle;