import React, { Component } from 'react';
import Part1 from './_01_part';

class MainForm extends Component {
  state = {
    step: 1,
    name: '',
    address: '1',
    entity_liked: '',
    description: '',
    contact: '',
    reference_person: '',
    reference_person_contact: '',
    comments: '',
    people: [],
    axis: [],
    cases: [],

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
    this.setState({ [input]: event.target.value });
  };

  render() {
    const {
      step,
      name,
      address,
      entity_liked,
      description,
      contact,
      reference_person,
      reference_person_contact,
      comments,
      people,
      axis,
      cases,
    } = this.state;

    const values = {
      name,
      address,
      entity_liked,
      description,
      contact,
      reference_person,
      reference_person_contact,
      comments,
      people,
      axis,
      cases,
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
      default:
        return;
    }
  }
}

export default MainForm;
