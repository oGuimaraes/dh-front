import React, { Component } from 'react';
import Part1 from './_01_part';

class MainForm extends Component {
  state = {
    step: 1,
    law_suit_number: '',
    action_type: '',
    open_mandate: false,
    district: '',
    law_area: '',
    latest_moves: '',
    has_lawyer: false,
    lawyer_name: '',
    lawyer_contact: '',
    followed_by_daj: false,
    minhadaj_number: '',
    start_date: null,
    transit_date: null,
    related_person: [],
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
      law_suit_number,
      action_type,
      open_mandate,
      district,
      law_area,
      latest_moves,
      has_lawyer,
      lawyer_name,
      lawyer_contact,
      followed_by_daj,
      minhadaj_number,
      start_date,
      transit_date,
      related_person,
      cases,
    } = this.state;

    const values = {
      law_suit_number,
      action_type,
      open_mandate,
      district,
      law_area,
      latest_moves,
      has_lawyer,
      lawyer_name,
      lawyer_contact,
      followed_by_daj,
      minhadaj_number,
      start_date,
      transit_date,
      related_person,
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
