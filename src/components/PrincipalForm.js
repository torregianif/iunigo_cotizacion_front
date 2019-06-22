import React, { Component } from 'react';
import CarYearForm from './CarYearForm';

export class PrincipalForm extends Component {

    state = {
        step: 1,
        carYear: null
    }

    // Go to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1,
            carYear: ''
        })
    }

    // Go to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    // Handle fields Change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    render() {
        const { step } = this.state;
        const { carYear } = this.state;
        const values = { carYear };
        switch(step){
            case 1:
                return(
                    <div>
                         <CarYearForm nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>
                    </div>
                )
            case 2:
                return(
                    <div>
                        CASE 2
                    </div>
                )
            case 3:
                return(
                    <div>
                        CASE 3
                    </div>
                )
        }
    }
}

export default PrincipalForm
