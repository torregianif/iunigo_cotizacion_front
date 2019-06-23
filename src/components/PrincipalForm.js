import React, { Component } from 'react';
import CarYearBrandModelForm from './CarYearBrandModelForm';
import UserNameForm from './UserNameForm';
import PricesForm from './PricesForm';
import UserLocationForm from './UserLocationForm';
import MailForm from './MailForm';
import CarVersionForm from './CarVersionForm';
import CarPatentForm from './CarPatentForm';
import CheckOutForm from './CheckOutForm';
import SimpleAppBar from './AppBar';
import InicioCotizacion from './InicioCotizacion';

class PrincipalForm extends Component {

    state = {
        step: 0,
        carYear: null,
        carBrand: null,
        carModel: null,
        carGNC: "9",
        carDoors: 0,
        carVersion: '',
        car0km: false,
        name: '',
        lastName: '',
        age: '',
        userLocation: ''
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
    handleChangeFromChild = (input, value, km) => {
        //debugger
        this.setState({
            [input]: value,
            car0km: km
        })
    }



    render() {
        const { step } = this.state;
        const { name, lastName, age, carYear, carGNC, carDoors, carBrand, carModel, carId, car0km, carVersion, userLocation } = this.state;
        const values = { name, lastName, age, carYear, carGNC, carDoors, carBrand, carModel, carId, car0km, carVersion, userLocation};
        switch (step) {

            case 0:
                return (
                    <div>
                        <SimpleAppBar/>
                        <InicioCotizacion nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                    </div>
                );

            case 1:
                return (
                    <div>
                        <SimpleAppBar/>
                        <UserNameForm nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                    </div>
                );

            case 2:
                return (
                    <div>
                        <SimpleAppBar />
                        <CarYearBrandModelForm nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChangeFromChild} values={values} />
                    </div>
                );

            case 3:
                return (
                    <div>
                        <SimpleAppBar />
                        <CarVersionForm nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} handleChangeFromChild={this.handleChangeFromChild} values={values} />
                    </div>
                );

            case 4:
                return (
                    <div>
                        <SimpleAppBar />
                        <UserLocationForm nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                    </div>
                );

            case 5:
                return (
                    <div>
                        <SimpleAppBar />
                        <MailForm nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                    </div>
                );

            case 6:
                return (
                    <div>
                        <SimpleAppBar />
                        <PricesForm nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                    </div>
                );

            case 7:
                return (
                    <div>
                        <SimpleAppBar />
                        <CarPatentForm nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                    </div>
                );

            case 8:
                return (
                    <div>
                        <SimpleAppBar />
                        <CheckOutForm prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                    </div>
                );

            default:
                return
        }

    }
}

export default PrincipalForm;
