import React, { Component } from 'react';
import CarYearBrandModelForm from './CarYearBrandModelForm';
import UserNameForm from './UserNameForm';
import PricesForm from './PricesForm';

class PrincipalForm extends Component {

    state = {
        step: 2,
        carYear: null,
        carBrand: null,
        carModel: null
    }

    // Go to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1,
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
    handleChange = (input, value) => {
        //debugger
        this.setState({
            [input]: value
        })
    }
    

    render() {
        const { step } = this.state;
        const { carYear, carBrand, carModel } = this.state;
        const values = { carYear, carBrand,carModel };
        switch(step){
            case 1:
                return(
                    <div>
                         <UserNameForm nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>
                    </div>
                )
            case 2:
                return(
                    <div>
                        <CarYearBrandModelForm nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>
                    </div>
                )
            case 3:
                return(
                    <div>
                        <PricesForm nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>
                    </div>
                )
        }

    }
}

export default PrincipalForm;
