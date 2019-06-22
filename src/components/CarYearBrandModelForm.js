import React, { PureComponent } from 'react';
import { Container, Button, Grid, FormControl, Select, InputLabel, TextField } from '@material-ui/core';
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

  constructor(props) {
    super(props);
    this.state = {
      miStep: 1,
      brands: [],
      models: [],
      flag:false
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
    let flag = false;
    let newYear = e.target.value;
    if (input === "carYear") {
      
      if (e.target.value === "20190") {
        flag = true;
        newYear = "2019"
      }
      console.log(newYear);
      this.setState({
        miStep: 2,
        carYear: newYear,
        flag
      })

      const endpoint_back = `${endpoint.url}/brands?year=${newYear}&0km=${flag}`;
      fetch(endpoint_back)
        .then((response) => {
          return response.json();
        }).then(data => {
          this.setState({
            brands: data
          });
        })
    } else {
      if (input === "carBrand") {

        this.setState({
          miStep: 3,
        })
        
        const endpoint_back = `${endpoint.url}/models?brand=${e.target.value}&year=${this.state.carYear}&0km=${this.state.flag}`;
        fetch(endpoint_back)
          .then((response) => {
            return response.json();
          }).then(data => {
            //console.log(data);
            this.setState({
              models: data
            });
          })
      }
    }
    handleChange(input, newYear, this.state.flag)
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

    switch (miStep) {
      case 1:
        return (
          <Container maxWidth="sm" className={classes.container}>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField 
                    style={{width:"100%"}}
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
                  <Button onClick={this.continue}>
                    Continue
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
                    style={{width:"100%"}}
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
                    style={{width:"100%"}}
                    id="standard-select-currency"
                    select
                    label="Marca"
                    helperText="Selecciona la Marca del vehículo"
                    className={classes.textField}
                    onChange={this.changeMiStep("carBrand", handleChange)}
                    margin="normal"
                    value={values.carBrand}
                  >
                    {this.state.brands.map(option => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12}>
                  <Button onClick={this.continue}>
                    Continue
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
                    style={{width:"100%"}}
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
                    style={{width:"100%"}}
                    id="standard-select-currency"
                    select
                    label="Marca"
                    helperText="Selecciona la Marca del vehículo"
                    className={classes.textField}
                    onChange={this.changeMiStep("carBrand", handleChange)}
                    margin="normal"
                    value={values.carBrand}
                  >
                    {this.state.brands.map(option => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    style={{width:"100%"}}
                    id="standard-select-currency"
                    select
                    label="Modelo"
                    helperText="Selecciona el Modelo del vehículo"
                    className={classes.textField}
                    onChange={this.changeMiStep("carModel", handleChange)}
                    margin="normal"
                    value={values.carModel}
                  >
                    {this.state.models.map(option => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <Button onClick={this.continue}>
                    Continue
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