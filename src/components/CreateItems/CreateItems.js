import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import CodeCard from '../CodeCard/CodeCardContainer'



const useStyles = makeStyles({
    root: {
        flexGrow: '1',
        margin: 50
    },
    code: {
        width: '80%'
    },
    styleForm: {
      textAlign: 'center',
    },
    descrption: {
      width: '80%',
      marginTop: 45,
      borderRadius: 5,
      fontSize: 18,
      font: 'inherit',
    },
    price: {
      width: '80%',
      marginTop: 45
    },
    radio: {
      display: 'flex',
      flexDirection: 'unset',
      justifyContent: 'center'
    },
    margin45: {
      marginTop: 45
  }
})


function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="$"
      />
    );
  }


const CreateItems = (props) => {
    const classes = useStyles();
    const [values, setValues] = useState();

    let code = useRef();
    let description = useRef();
    let price = useRef();
    let radioType = useRef();
    let patter = useRef();

    const loadItems = (event) => {
        if(patter.current.value === 'patter'){
            let dataItem = {
                id:  Math.random().toString(36).substr(2, 9),
                code: code.current.value,
                description: description.current.value,
                price: Number(price.current.value.replace(',', '').replace('$','')),
                radioType: radioType.current.value,
                cant: 1,
                subItem:[],
                
            }
            props.loadItem(dataItem);
        }else{
            let subItem = {
                id:  Math.random().toString(36).substr(2, 9),
                code: code.current.value,
                description: description.current.value,
                price:  Number(price.current.value.replace(',', '').replace('$','')),
                radioType: radioType.current.value,
                cant: 1,
                patter: patter.current.value,
                
            }
            props.loadItem(subItem);
        }
        document.getElementById("price-id").value = ''
        document.getElementById("create-items").reset();
        event.preventDefault()
    }

    const validateCode = (event) => {
        var noValido = /\s/;
        let elemet = event.target.value
        if(noValido.test(elemet)){ 
            event.target.value = elemet.replace(' ', '');  
        }
    }

    const handleChangePrice = (event) => {
        setValues(event.target.value);
    };

    const handleChange = (event) => {
        radioType.current.value = event.target.value
    };
    
    return(
        <div className={classes.root}>
            <Grid   container 
                    spacing={2} 
                    direction="row"
                    justify="center"
                >
                <Grid item xs={6} className={classes.styleForm}>
                <form onSubmit={loadItems} id="create-items">
                    <TextField 
                        className={classes.code} 
                        id="code-id" 
                        label="Code" 
                        variant="outlined" 
                        inputRef = {code}
                        defaultValue=""
                        required
                        onChange={(event) => validateCode(event)}
                        />                    
                    <TextField
                        id="description-id"
                        className={classes.descrption} 
                        label="Description"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="outlined"
                        inputRef={description}
                        required
                    />
                    <TextField
                        variant="outlined" 
                        className={classes.price}
                        label="Price"
                        inputRef={price} 
                        value={values}
                        onChange={handleChangePrice}
                        name="numberformat"
                        id="price-id"
                        InputProps={{
                            inputComponent: NumberFormatCustom,
                        }}
                    />
                    <div className={classes.margin45}>
                        <FormLabel component={classes.legend}>Type</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" ref={radioType} className={classes.radio} onChange={handleChange} >
                            <FormControlLabel  value="Multiple" control={<Radio />} label="Multiple" />
                            <FormControlLabel value="Single" control={<Radio />} label="Single" />
                        </RadioGroup>
                    </div>
                    <div className={classes.margin45}>
                        <FormLabel component="legend">Parent</FormLabel>
                        <Select inputRef={patter} defaultValue={'patter'}>
                            <MenuItem value={'patter'} selected>Patter</MenuItem>
                            { 
                                props.items.map((item, index) => (
                                    <MenuItem value={item.id} key={index}>{item.code}</MenuItem>
                                ))
                            }
                        </Select>
                    </div>
                    <Button type="submit" variant="contained" color="primary" className={classes.margin45}>
                        Create Item
                    </Button>
                </form>
                </Grid>
                <Grid item xs={6}>
                    <CodeCard controleNavegation='createitems'/>  
                </Grid>
            </Grid>
        </div>
    )
}

export default CreateItems;