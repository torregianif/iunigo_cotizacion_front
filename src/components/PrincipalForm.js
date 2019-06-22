import React, { Component } from 'react';
import CarYearForm from './CarYearForm';
import UserNameForm from './UserNameForm';
import PricesForm from './PricesForm';

class PrincipalForm extends Component {

    state = {
        step: 3,
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
        switch (step) {
            case 1:
                return (
                    <div>
                        <UserNameForm nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                    </div>
                );
                
            case 2:
                return (
                    <div>
                        <CarYearForm nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                    </div>
                );

            case 3:
                return (
                    <div>
                        <PricesForm nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                    </div>
                );

            case 4:
                return (
                    <div>
                        <PricesForm nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                    </div>
                );

            case 5:
                return (
                    <div>
                        <PricesForm nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                    </div>
                );

            case 6:
                return (
                    <div>
                        <PricesForm nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                    </div>
                );

            default:
                return
        }

    }
}

export default PrincipalForm;
