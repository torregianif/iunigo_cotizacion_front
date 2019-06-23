import React, { Component } from 'react';
import { Container, TextField, Button, Grid } from '@material-ui/core';
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
  logo: {
    width: 10,
  },
}));


export default class UserNameForm extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {

    const classes = useStyles;
    const { handleChange, values } = this.props

    return (

      <Container maxWidth="sm" className={classes.container}>


        <Grid container justify="center" alignItems="center">
          <img src={logo} alt="logo" style={{
            margin: 35, width: 160, borderRadius: 100,

          }}>

          </img>
        </Grid>

        <h2>Hola! Soy Jonathan. Tengo 30 años.</h2>
        <p style={{ fontSize: "1.5rem" }}>Asesor Oficial de Iunigo!</p>
        <h3>Contame sobre vos...</h3>
        <form className={classes.form} noValidate>
          <Grid container spacing={6}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              item xs={12}>
              <Grid style={{ width: "100%" }}>
                <TextField
                  style={{ width: "100%" }}
                  id="name"
                  label="Nombre"
                  margin="normal"
                  onChange={handleChange('name')}
                  value={values.name}
                />
              </Grid>
              <Grid style={{ width: "100%" }}>
                <TextField
                  style={{ width: "100%" }}
                  id="lastname"
                  label="Apellido"
                  margin="normal"
                  onChange={handleChange('lastName')}
                  value={values.lastName}
                />
              </Grid>
              <Grid style={{ width: "100%" }}>
                <TextField
                  style={{ width: "100%" }}
                  id="standard-number"
                  label="Edad"
                  type="number"
                  margin="normal"
                  onChange={handleChange('age')}
                  value={values.age}
                />
              </Grid>


            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={this.continue}>
                Continuar
                            </Button>
            </Grid>
          </Grid>
        </form>
        <div></div>

      </Container>

    )
  }
}
