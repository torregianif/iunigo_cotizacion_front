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
  }));


export default class UserNameForm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    previous = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {

        const classes = useStyles;


        return (

            <Container maxWidth="sm" className={classes.container}>
              <Grid container justify="center" alignItems="center">
                 <img src={logo} alt="logo" style={{
                margin:35,width:100,height: 100,borderRadius: 50,

                 }}>

                 </img>
              </Grid>
            
            <h3>Último Paso !!!</h3>
            <p>Dejanos Tu e-mail</p>
                <form className={classes.form} noValidate>
                    <Grid container spacing={6}>
                        <Grid 
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        item xs={12}>
                    <Grid  style={{width:"100%"}}>
                    <TextField
                        style={{width:"100%"}}
                        id="outlined-email-input"
                        label="Email"
                        className={classes.textField}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        />
                        </Grid>
                  
                     
                       
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" onClick={this.continue}>
                                Ver Precios
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
