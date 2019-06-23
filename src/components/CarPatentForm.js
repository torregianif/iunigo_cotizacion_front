import React, {  Component } from 'react';
import { Container, Grid, TextField, Button, FormHelperText } from '@material-ui/core';

export default class CarPatentForm extends Component {

    constructor(props){
        super(props);
        console.log(props)
    }

    continue = e => {
        console.log("Entro")
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { handleChange } = this.props
        return (
            <Container>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    item xs={12}
                    style={{marginTop:35}}
                >
                    <h3>Última info sobre tu auto...</h3>
                    <Grid style={{ width: "50%" }}>
                        <TextField
                        style={{ width: "100%" }}
                        id="patent"
                        label="Patente"
                        margin="normal"
                        onChange={handleChange('carPatent')}
                        />
                        <FormHelperText>Ejemplo: AAA111 o A003946RN (nuevas)</FormHelperText>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={this.continue}>
                            Continuar
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}
