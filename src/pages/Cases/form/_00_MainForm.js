import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import Part1 from './_01_part';

class MainForm extends Component {
  state = {
    step: 1,
    case_number: null,
    related_areas: '',
    reference_contacts: '',
    daj_number: '',
    daj_advisor: '',
    daj_intern: '',
    report: '',
    registration_date: '01',
    solution_date: null,
    documents: [],
    tasks: [],
    law_suits: [],
    entities: [],
    intern: [],
    advisor: [],
    assisted_person: '',
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
    this.setState({ [input]: event.target.value });
  };

  render() {
    const {
      step,
      related_areas,
      reference_contacts,
      daj_number,
      daj_advisor,
      daj_intern,
      report,
      registration_date,
      solution_date,
      documents,
      tasks,
      law_suits,
      entities,
      intern,
      advisor,
      assisted_person,
      axis,
    } = this.state;

    const values = {
      related_areas,
      reference_contacts,
      daj_number,
      daj_advisor,
      daj_intern,
      report,
      registration_date,
      solution_date,
      documents,
      tasks,
      law_suits,
      entities,
      intern,
      advisor,
      assisted_person,
      axis,
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
