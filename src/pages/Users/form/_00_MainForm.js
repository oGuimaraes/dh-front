import React, { Component } from 'react';
import Part1 from './_01_part';
import Part2 from './_02_part';
import Part3 from './_03_ part';

class MainForm extends Component {
  state = {
    step: 1,
    name: '',
    email: '',
    bond_type: '',
    phone: '',
    registration: '',
    street_address: '',
    number_address: '',
    complement_address: '',
    neighborhood_address: '',
    city_address: '',
    state_address: '',
    course: '',
    university: '',
    department: '',
    rg: '',
    rgError: '',
    cpf: '',
    cpfError: '',
    cnh: '',
    date_joined: '2020-10-01',
    date_fired: '',
    is_active: true,
    scholarship: '',
    scholarship_type: '',
    on_duty: '',
    password: '',
    isIntern: true,
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (event) => {
    console.log(input);
    if (typeof this.state[input] === 'boolean') {
      console.log(typeof this.state[input]);
      this.setState({ [input]: !this.state[input] });
    } else {
      this.setState({ [input]: event.target.value });
    }
  };

  render() {
    const {
      step,
      name,
      email,
      bond_type,
      phone,
      registration,
      street_address,
      number_address,
      complement_address,
      neighborhood_address,
      city_address,
      state_address,
      course,
      university,
      department,
      rg,
      cpf,
      cnh,
      date_joined,
      date_fired,
      is_active,
      scholarship,
      scholarship_type,
      on_duty,
      password,
      isIntern,
    } = this.state;

    const values = {
      name,
      email,
      bond_type,
      phone,
      registration,
      street_address,
      number_address,
      complement_address,
      neighborhood_address,
      city_address,
      state_address,
      course,
      university,
      department,
      rg,
      cpf,
      cnh,
      date_joined,
      date_fired,
      is_active,
      scholarship,
      scholarship_type,
      on_duty,
      password,
      isIntern,
    };

    switch (step) {
      case 1:
        return (
          <Part1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Part2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Part3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      default:
        return;
    }
  }
}

export default MainForm;
