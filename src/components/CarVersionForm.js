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



class CarVersionForm extends PureComponent {

    obtainMyInfo = (input, handleChangeFromChild) => e => {
        let incomingValue;
        switch(input){
            case "carDoors":
                    incomingValue = e.target.value;
                    const { carYear, carBrand, carModel, car0km } = this.props.values
                    const endpoint_back = `${endpoint.url}?brand=${carBrand}&model=${carModel}&year=${carYear}&okm=${car0km}&door=${incomingValue}`;
                    fetch(endpoint_back, {
                        method: 'GET',
                        headers: {
                            Accept: 'application/json',
                        },
                    },
                    ).then(response => {
                        if (response.ok) {
                            response.json().then(resp => {
                                const version = [...new Set(resp.map(x => x = {
                                    ver: x.version,
                                    carId: x.car_id
                                }))] || [];
                                this.setState(
                                    { version }
                                )
                            });
                        }
                    });
            break;
            case "carVersion":
                    incomingValue = e.target.value;
            break;
            default:
        }
        handleChangeFromChild(input, incomingValue)
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    previous = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    state = {
        puertas: [],
        gnc: false,
        version: []
    }

    componentWillMount() {
        const { carYear, carBrand, carModel, car0km } = this.props.values
        const endpoint_back = `${endpoint.url}?brand=${carBrand}&model=${carModel}&year=${carYear}&okm=${car0km}`;
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
        const { handleChange, values, handleChangeFromChild } = this.props;
        const classes = useStyles;

        return (
            <Container maxWidth="sm" className={classes.container}>
                <Grid container justify="center" alignItems="center">
                    <img src={logo} alt="logo" style={{
                        margin:35, width: 100, height: 100, borderRadius: 50,

                    }}>

                    </img>
                </Grid>
                <h3>Terminemos con los ultimos detalles del Auto</h3>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <FormControl required className={classes.formControl} style={{ width: "100%" }}>
                                
                                <Select
                                    style={{ width: "100%" }}
                                    value={values.carDoors}
                                    onChange={this.obtainMyInfo("carDoors", handleChangeFromChild)}
                                    inputProps={{
                                        name: 'doors',
                                        id: 'doors',
                                    }}
                                
                                >
                                    <MenuItem value="0" style={{ color: "#0000008a" }}>
                                        Cuantas puertas tiene tu auto?
                                    </MenuItem>
                                    {this.state.puertas.map(option => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Select>
                                
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl required className={classes.formControl}  style={{ width: "100%" }}>
                                
                                <Select
                                     style={{ width: "100%" }}
                                    value={values.carGNC}
                                    onChange={handleChange('carGNC')}
                                    inputProps={{
                                        name: 'gnc',
                                        id: 'gnc',
                                    }}
                                >
                                    <MenuItem value="9"  style={{ width: "100%", color:"grey" }}>
                                        Tenes gnc instalado en tu auto?
                                    </MenuItem>
                                    <MenuItem key="0" value='0'>No</MenuItem>
                                    <MenuItem key="1" value='1'>Si</MenuItem>
                                </Select>
                                
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl required className={classes.formControl} style={{ width: "100%" }}>
                                <InputLabel htmlFor="carVersion">Selecciona la version exacta de tu auto</InputLabel>
                                <Select
                                    value={values.carVersion}
                                    onChange={this.obtainMyInfo("carVersion", handleChangeFromChild)}
                                    inputProps={{
                                        name: 'carVersion',
                                        id: 'carVersion',
                                    }}
                                    style={{ width: "100%" }}
                                >
                                    
                                    {this.state.version.map(option => (
                                        <MenuItem key={option.carId} value={option.carId}>
                                            {option.ver}
                                        </MenuItem>
                                    ))}
                                </Select>
                                
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" onClick={this.continue}>
                                Continuar
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={this.previous}>
                                volver
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </Container>
        )
    }
}

export default CarVersionForm;