import React, { PureComponent } from 'react';
import { Container, TextField, Button, Grid } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../img/JonathanLeibiusky.jpg';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 500,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

class UserLocationForm extends PureComponent {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  previous = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props;
    const { name } = this.props.values;
    const classes = useStyles;
    const locations = [
      {
        value: 'CABA',
        label: 'CAPITAL FEDERAL',
      },
      {
        value: 'bsasNorte',
        label: 'BS. AS. Norte',
      },
      {
        value: 'bsasOeste',
        label: 'BS. AS. Oeste',
      },
      {
        value: 'bsasSur',
        label: 'BS. AS. Sur',
      },
      {
        value: 'laPlata',
        label: 'La Plata',
      },
    ];

    return (
      <Container maxWidth="sm" className={classes.container}>
        <Grid container justify="center" alignItems="center">
          <img src={logo} alt="logo" style={{
            margin: 10, width: 100, height: 100, borderRadius: 50,

          }}>

          </img>
        </Grid>
        <h2>{name}</h2>
        <h3> Ya casi terminamos!!! </h3>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="standard-select-currency"
                select
                label="Localidad"
                helperText="Selecciona la localidad donde vivis"
                className={classes.textField}
                onChange={handleChange('userLocation')}
                margin="normal"
                value={values.userLocation}
              >
                <MenuItem value="0">
                  <em>Seleccione una opcion</em>
                </MenuItem>
                {locations.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={this.continue}>
                Continuar
                            </Button>
            </Grid>
            <Grid item xs={12}>
              <Button onClick={this.previous}>
                Volver
                            </Button>
            </Grid>
          </Grid>
        </form>
        <div></div>
      </Container>

    )
  }
}


export default UserLocationForm;
