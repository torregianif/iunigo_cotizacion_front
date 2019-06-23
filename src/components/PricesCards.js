import React, { Component } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { Container, Grid, Checkbox, FormControlLabel } from '@material-ui/core';

export default class PricesCards extends Component {

    constructor(props){
        super(props);

        this.state = {
            price: 0,
            checked: true,
            checkedItems: new Map(),
        }

        this.handleChange = this.handleChange.bind(this);
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    handleChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        const { price } = this.state;
        const cantIndividual = this.props.maxPrice / this.props.products.length;
        if(isChecked){
            this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked), price: price + cantIndividual }));
        }
        else{
            this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked), price: price - cantIndividual }));
        }
        
      }

    render() {

        if(this.props.customizable == 1){
            return (
                <Grid item xs={3}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>iúnigo<b style={{textTransform: "uppercase"}}>CUSTOM</b></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><b>${this.state.price.toFixed(2)}</b></Card.Subtitle>
                        <Card.Text>
                        <b>Plan Customizable</b>
                        </Card.Text>
                        <Button variant="primary" onClick={this.continue}>Elegir</Button>
                    </Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item><b>Beneficios:</b></ListGroup.Item>
                        {this.props.products.map(product => (
                            <ListGroup.Item>
                                {product} 
                                <Checkbox 
                                    color="primary" name={product} checked={this.state.checkedItems.get(product)} onChange={this.handleChange}
                                />
                            </ListGroup.Item>
                        ))}
                        
                    </ListGroup>
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
                        <Button variant="primary" onClick={this.continue}>Elegir</Button>
                    </Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item><b>Beneficios:</b></ListGroup.Item>
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
