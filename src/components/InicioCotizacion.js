import React, { Component } from 'react';
import { Container, Grid} from '@material-ui/core';
import { Button } from 'react-bootstrap'

export default class InicioCotizacion extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        return (
            <Container>
                <Grid>
                    <h2>El mejor seguro de auto, 
                    al mejor precio.</h2>
                    <h4>Contratá en 2’ sin costo alguno y empeza a disfrutar de nuestros beneficios!</h4>
                </Grid>
                <Grid>
                    <Button variant="primary" onClick={this.continue}>Cotizar Ahora</Button>
                </Grid>
                <Grid style={{marginTop:50}}>
                    O sino tambien:
                </Grid>
                <Grid style={{marginTop:10}}>
                    <Button variant="success">Cotizar por WhatsApp</Button>
                    <Button variant="info" style={{marginLeft:20}}>Cotizar por VideoLlamada</Button>
                </Grid>
            </Container>
        )
    }
}
