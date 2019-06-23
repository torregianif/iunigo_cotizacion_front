import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Container, Grid } from '@material-ui/core';

export default class PricesCards extends Component {

    constructor(props){
        super(props);
        this.state = {
            price: 0
        }
    }

    render() {

        if(this.props.customizable == 1){
            return (
                <Grid item xs={3}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>iúnigo<b style={{textTransform: "uppercase"}}>CUSTOM</b></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><b>Custom</b></Card.Subtitle>
                        <Card.Text>
                        <b>Plan Customizable</b>
                        </Card.Text>
                    </Card.Body>
                
                    </Card>
                </Grid>
            )
        }
        else{
            return (
                <Grid item xs={3}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>iúnigo<b style={{textTransform: "uppercase"}}>{this.props.plan.name}</b></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><b>${this.props.plan.price.toFixed(2)}</b></Card.Subtitle>
                        <Card.Text>
                        <b>{this.props.plan.description}</b>
                        </Card.Text>
                    </Card.Body>
                    <ListGroup variant="flush">
                        {this.props.plan.products.map(product =>(
                            <ListGroup.Item>{product}</ListGroup.Item>
                        ))}
    
                    </ListGroup>
                    </Card>
                </Grid>
            )
        }

       
    }
}
