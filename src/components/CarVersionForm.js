import React, { PureComponent } from 'react';
import { Container, Button, Grid, FormControl, Select, InputLabel, FormHelperText } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import endpoint from '../constants/endpoint';
import logo from '../img/JonathanLeibiusky.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 900,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


class CardVersionForm extends PureComponent {

    continue = e => {
        e.preventDefault();
        if(this.props.values.carDoors >0 && this.props.values.carGNC < 9){
            this.props.nextStep();
        }
    }
    

    previous = e => {
        e.preventDefault();
        this.props.prevStep();
        }
        
    

    state = {
        puertas: [],
        gnc: false
    }


    componentWillMount() {
        const { carYear, carBrand, carModel, car0km } = this.props.values 
        const endpoint_back = `${endpoint.url}?brand=${carBrand}&model=${carModel}&year=${carYear}&okm=${car0km}`;

        console.log(endpoint_back);
        

        fetch(endpoint_back, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        },
        ).then(response => {
            if (response.ok) {
                response.json().then(resp => {
                    const puertas = [...new Set(resp.map(x => x.doors))] || [];
                    this.setState(
                        { puertas }
                    )
                });
            }
        });
    }


    render() {
        const { handleChange, values } = this.props;
        const classes = useStyles;

        return (
            <Container maxWidth="sm" className={classes.container}>
             <Grid container justify="center" alignItems="center">
                 <img src={logo} alt="logo" style={{
                margin:10,width:100,height: 100,borderRadius: 50,

                 }}>

                 </img>
              </Grid>
            <h3>Terminemos con los ultimos detalles del Auto</h3>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl required className={classes.formControl}>
                                <InputLabel htmlFor="doors">Cuantas puertas tiene tu auto?</InputLabel>
                                <Select 
                                    value={values.carDoors}
                                    onChange={handleChange('carDoors')}
                                    inputProps={{
                                        name: 'doors',
                                        id: 'doors',
                                    }}
                                    style={{width:300}}
                                >
                                    <MenuItem value="0">
                                        <em>Seleccione una opcion</em>
                                    </MenuItem>
                                    {this.state.puertas.map(option => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText>Necesitamos este dato.</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl required className={classes.formControl}>
                                <InputLabel htmlFor="gnc">Tenes gnc instalado en tu auto?</InputLabel>
                                <Select
                                    value={values.carGNC}
                                    onChange={handleChange('carGNC')}
                                    inputProps={{
                                        name: 'gnc',
                                        id: 'gnc',
                                    }}
                                    style={{width:300}}
                                >
                                    <MenuItem value="9">
                                        <em>Seleccione una opcion</em>
                                    </MenuItem>
                                    <MenuItem key="0" value='0'>No</MenuItem>
                                    <MenuItem key="1" value='1'>Si</MenuItem>
                                </Select>
                                <FormHelperText>Necesitamos este dato.</FormHelperText>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" onClick={this.continue}>
                                Continuar
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button  onClick={this.previous}>
                                volver
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </Container>
        )
    }
}

export default CardVersionForm;