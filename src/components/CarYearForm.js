import React, { PureComponent } from 'react';
import { Container, TextField, Button, Grid } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';


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

class CarYearForm extends PureComponent {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {

        const { values, handleChange } = this.props;
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
                                onChange={handleChange('carYear')}
                                margin="normal"
                                defaultValue={values.carYear}
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
    }
}


export default CarYearForm;