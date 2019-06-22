import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Container, Grid } from '@material-ui/core';

export default class PricesCards extends Component {

    constructor(props){
        super(props);
    }

    render() {

        

        return (
            <Grid item xs={3}>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>iunigo{this.props.plan.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">${this.props.plan.price}</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                </Card>
            </Grid>
        )
    }
}
