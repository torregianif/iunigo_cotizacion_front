import React, { Component } from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import PricesCards from './PricesCards';
import endpoint from '../constants/endpoint';

class PricesForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            plans: null,
            allProducts:[],
            maxPrice: null
        }
    }

    previous = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    componentDidMount(){

        // let data = { 
        //     car_id: "460823",
        //     car_year: 2019,
        //     gnc: false,
        //     okm: false,
        //     person_age: 24,
        //     state_code: "ar-b",
        //     zone: "12"
        // }

        console.log(this.props.values);

        let data = { 
            car_id: parseInt(this.props.values.carVersion),
            car_year: parseInt(this.props.values.carYear),
            gnc: parseInt(this.props.values.carGNC),
            okm: false,
            person_age: this.props.values.age,
            state_code: "ar-b",
            zone: "12"
        }

        const endpoint_back = `${endpoint.url_precios}`;

        fetch(endpoint_back,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        ).then(
        (response) => {
            return response.json();
        }
        ).then(responseDataBack => {
            const results = responseDataBack.packages;
            var plans = [];

            results.forEach( (plan) => {
                const planDetails = <PricesCards plan={plan} nextStep={this.props.nextStep}/>
                plans.push(planDetails);
                if(plan.name === "full"){
                    this.setState({
                        allProducts: plan.products,
                        maxPrice: plan.price
                    })
                }
            })  
            this.setState({plans: plans})
        });
    }

    render() {
        return (
            <Container style={{marginTop:10}}>
                <Button onClick={this.previous}>Volver</Button>
                <Grid container spacing={3} style={{marginTop:5}}>
                    {this.state.plans}
                    <PricesCards customizable={1} products={this.state.allProducts} maxPrice={this.state.maxPrice} nextStep={this.props.nextStep}/>
                </Grid>
            </Container>
        );
    }
}


export default PricesForm;