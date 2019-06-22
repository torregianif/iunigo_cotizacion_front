import React, { PureComponent } from 'react';
import { Container, TextField, Button, Grid } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import endpoint from '../constants/endpoint';

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

class CarYearBrandModelForm extends PureComponent {

  constructor(props){
    super(props);
    this.state={
      miStep: 1,
      
    }

    this.changeMiStep = this.changeMiStep.bind(this);
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  previous = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  changeMiStep = (input, handleChange) => e => {
    if([input] == "carYear"){
      this.setState({
        miStep: 2,
      })
      let flag= false;    
    if(e.target.value===20190){
      flag=true;
    }
    
    const endpoint_back = `${endpoint.url}/brands?year=${e.target.value}&0km=${flag}`;
          fetch(endpoint_back)
          .then((response) => {
                console.log(response)
                console.log("status; "+ response.status)
                if(response.status === 200){
                  alert("Se ha creado correctamente el usuario.")
                }
                else{
                  alert("No se ha podido crear el usuario.")
                }        
              }
          );  
    }else{
      if([input] == "carBrand"){
        this.setState({
          miStep: 3,
        })  
      }
    }
    handleChange(input, e.target.value)
  }
  


  render() {

    const { values, handleChange } = this.props;
    const { miStep } = this.state;
    const classes = useStyles;
    const years = [
        {
          value: '20190',
          label: '2019 0Km',
        },
        {
          value: '2019',
          label: '2019',
        },
        {
          value: '2018',
          label: '2018',
        },
        {
          value: '2017',
          label: '2017',
        },
    ];

    switch(miStep){
      case 1:
        return (
            <Container maxWidth="sm" className={classes.container}>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                id="standard-select-currency"
                                select
                                label="Año"
                                helperText="Selecciona el año del vehículo"
                                className={classes.textField}
                                onChange={this.changeMiStep("carYear", handleChange)}
                                margin="normal"
                                value={values.carYear}
                            >
                                {years.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="secondary" onClick={this.previous}>
                                Volver
                            </Button>
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
            case 2:
            return (
              <Container maxWidth="sm" className={classes.container}>
                  <form className={classes.form} noValidate>
                      <Grid container spacing={2}>
                          <Grid item xs={12}>
                              <TextField
                                  id="standard-select-currency"
                                  select
                                  label="Año"
                                  helperText="Selecciona el año del vehículo"
                                  className={classes.textField}
                                  onChange={this.changeMiStep("carYear", handleChange)}
                                  margin="normal"
                                  value={values.carYear}
                              >
                                  {years.map(option => (
                                      <MenuItem key={option.value} value={option.value}>
                                          {option.label}
                                      </MenuItem>
                                  ))}
                              </TextField>
                          </Grid>
                          <Grid item xs={12}>
                              <TextField
                                  id="standard-select-currency"
                                  select
                                  label="Marca"
                                  helperText="Selecciona la Marca del vehículo"
                                  className={classes.textField}
                                  onChange={this.changeMiStep("carBrand", handleChange)}
                                  margin="normal"
                                  value={values.carBrand}
                              >
                                  {years.map(option => (
                                      <MenuItem key={option.value} value={option.value}>
                                          {option.label}
                                      </MenuItem>
                                  ))}
                              </TextField>
                          </Grid>
                          
                          <Grid item xs={12}>
                            <Button onClick={this.previous}>
                                Volver
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={this.continue}>
                                Continuar
                            </Button>
                        </Grid>
                      </Grid>
                  </form>
                  <div></div>
              </Container>
            )
            case 3:
            return (
              <Container maxWidth="sm" className={classes.container}>
                  <form className={classes.form} noValidate>
                      <Grid container spacing={2}>
                          <Grid item xs={12}>
                              <TextField
                                  id="standard-select-currency"
                                  select
                                  label="Año"
                                  helperText="Selecciona el año del vehículo"
                                  className={classes.textField}
                                  onChange={this.changeMiStep("carYear", handleChange)}
                                  margin="normal"
                                  value={values.carYear}
                              >
                                  {years.map(option => (
                                      <MenuItem key={option.value} value={option.value}>
                                          {option.label}
                                      </MenuItem>
                                  ))}
                              </TextField>
                          </Grid>
                          <Grid item xs={12}>
                              <TextField
                                  id="standard-select-currency"
                                  select
                                  label="Marca"
                                  helperText="Selecciona la Marca del vehículo"
                                  className={classes.textField}
                                  onChange={this.changeMiStep("carBrand", handleChange)}
                                  margin="normal"
                                  value={values.carBrand}
                              >
                                  {years.map(option => (
                                      <MenuItem key={option.value} value={option.value}>
                                          {option.label}
                                      </MenuItem>
                                  ))}
                              </TextField>
                          </Grid>
                          <Grid item xs={12}>
                              <TextField
                                  id="standard-select-currency"
                                  select
                                  label="Modelo"
                                  helperText="Selecciona el Modelo del vehículo"
                                  className={classes.textField}
                                  onChange={this.changeMiStep("carModel", handleChange)}
                                  margin="normal"
                                  value={values.carModel}
                                >
                                  {years.map(option => (
                                      <MenuItem key={option.value} value={option.value}>
                                          {option.label}
                                      </MenuItem>
                                  ))}
                              </TextField>
                          </Grid>
                          <Grid item xs={12}>
                            <Button onClick={this.previous}>
                                Volver
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={this.continue}>
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
}


export default CarYearBrandModelForm;