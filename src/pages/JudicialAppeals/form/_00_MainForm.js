import React, { Component } from 'react';
import Part1 from './_01_part';

class MainForm extends Component {
  state = {
    step: 1,
    type: '',
    judicial_appeal_number: '',
    plenary: '',
    report: '',
    resume: '',
    law_suit: [1],
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
      type,
      judicial_appeal_number,
      plenary,
      report,
      resume,
      law_suit,
    } = this.state;

    const values = {
      type,
      judicial_appeal_number,
      plenary,
      report,
      resume,
      law_suit,
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
