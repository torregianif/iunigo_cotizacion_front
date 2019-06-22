import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Container, Grid } from '@material-ui/core';
import PricesCards from './PricesCards';
import endpoint from '../constants/endpoint';

class PricesForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            plans: null
        }
    }

    componentDidMount(){

        let data = { 
            car_id: "460823",
            car_year: 2019,
            gnc: false,
            okm: false,
            person_age: 24,
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
            console.log(results);

            results.forEach( (plan) => {
                const planDetails = <PricesCards plan={plan}/>
                plans.push(planDetails);
            })  
            this.setState({plans: plans})
        });
    }

    render() {
        return (
            <Container >
                <Grid container spacing={3}>
                    {this.state.plans}
                </Grid>
            </Container>
        );
    }
}


export default PricesForm;