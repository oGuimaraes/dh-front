import React, { Component } from 'react';
import Part1 from './_01_part';
import Part2 from './_02_part';
import Part3 from './_03_part';
import Part4 from './_04_part';

export default class MainForm extends Component {
  state = {
    step: 3,
    street: '1',
    number: 2,
    complement: '3',
    neighborhood: '4',
    city: '5',
    state: '6',
    related_case: [],
    assisted: true,
    first_appointment_date: '',
    full_name: '7',
    mother_name: '8',
    civil_registry: '9',
    civil_status: '',
    schooling: '25',
    rg: '10',
    cpf: '11',
    cnh: '12',
    email: '13',
    phone: '14',
    reference_regional_administration: '15',
    gender_identity: '',
    preferred_pronouns: '16',
    self_identification: '17',
    birthday: '26',
    birth_city: '18',
    birth_state: '19',
    has_health_problem: false,
    which_health_problem: '20',
    receives_assistance: false,
    which_assistance: '21',
    related_person_bond: '22',
    contact_email: '23',
    contact_phone: '24',
    related_case_bond: '',
    related_law_suit_bond: '',
    related_person: '',
    contact_address: {},
    responsible_advisor: [],
    responsible_intern: [],
    document: [],
    case_people: [],
    related_law_suit: [],
    axis: '',
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
    if (typeof this.state[input] === 'boolean') {
      this.setState({ [input]: !this.state[input] });
    } else {
      this.setState({ [input]: event.target.value });
    }
  };

  render() {
    const {
      step,
      related_case,
      assisted,
      first_appointment_date,
      full_name,
      mother_name,
      civil_registry,
      civil_status,
      schooling,
      rg,
      cpf,
      cnh,
      email,
      phone,
      reference_regional_administration,
      gender_identity,
      preferred_pronouns,
      self_identification,
      birthday,
      birth_city,
      birth_state,
      has_health_problem,
      which_health_problem,
      receives_assistance,
      which_assistance,
      related_person_bond,
      contact_email,
      contact_phone,
      related_case_bond,
      related_law_suit_bond,
      related_person,
      contact_address,
      responsible_advisor,
      responsible_intern,
      document,
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
      case_people,
      related_law_suit,
      axis,
    } = this.state;

    const values = {
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
      step,
      related_case,
      assisted,
      first_appointment_date,
      full_name,
      mother_name,
      civil_registry,
      civil_status,
      schooling,
      rg,
      cpf,
      cnh,
      email,
      phone,
      reference_regional_administration,
      gender_identity,
      preferred_pronouns,
      self_identification,
      birthday,
      birth_city,
      birth_state,
      has_health_problem,
      which_health_problem,
      receives_assistance,
      which_assistance,
      related_person_bond,
      contact_email,
      contact_phone,
      related_case_bond,
      related_law_suit_bond,
      related_person,
      contact_address,
      responsible_advisor,
      responsible_intern,
      document,
      case_people,
      related_law_suit,
      axis,
    };

    switch (step) {
      case 1:
        return (
          <Part1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleChangeBool={this.handleChangeBool}
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
      case 4:
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
