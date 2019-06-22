import React, { Component } from 'react';
import CarYearBrandModelForm from './CarYearBrandModelForm';
import UserNameForm from './UserNameForm';
import PricesForm from './PricesForm';
import UserLocationForm from './UserLocationForm';
import MailForm from './MailForm';
import CardVersionForm from './CarVersionForm';

class PrincipalForm extends Component {

    state = {
        step: 1,
        carYear: null,
        carBrand: null,
        carModel: null,
        carGNC: "9",
        carDoors: 0
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

    // Handle fields Change from change
    handleChange = input => e => {
        //debugger
        this.setState({
            [input]: e.target.value
        })
    }

    // Handle fields Change
    handleChangeFromChild = (input, value) => {
        //debugger
        this.setState({
            [input]: value
        })
    }
    


    render() {
        const { step } = this.state;
        const { carYear, carGNC, carDoors, carBrand, carModel, name } = this.state;
        const values = { carYear, carGNC, carDoors, carBrand, carModel, name};
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
                        <CarYearBrandModelForm nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChangeFromChild} values={values}/>
                    </div>
                );

            case 3:
                return (
                    <div>
                        <CardVersionForm nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                    </div>
                );

            case 4:
                return (
                    <div>
                        <UserLocationForm nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                    </div>
                );

            case 5:
                return (
                    <div>
                        <MailForm nextStep={this.nextStep} prevStep={this.prevStep}  handleChange={this.handleChange} values={values} />
                    </div>
                );

            case 6:
                return (
                    <div>
                        <PricesForm nextStep={this.nextStep} prevStep={this.prevStep}  handleChange={this.handleChange} values={values} />
                    </div>
                );

            default:
                return
        }

    }
}

export default PrincipalForm;
