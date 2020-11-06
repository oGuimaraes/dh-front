import React, { Component } from 'react';
import Part1 from './_01_part';

class MainForm extends Component {
  state = {
    step: 1,
    document_number: null,
    type: null,
    date: '2020-05-06',
    prepared_by: [],
    recipients: '',
    link: 'www.googledocs.com',
    axis: [1],
    tasks: [1],
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
      date,
      prepared_by,
      recipients,
      axis,
      link,
      tasks,
    } = this.state;

    const values = {
      type,
      date,
      prepared_by,
      recipients,
      axis,
      link,
      tasks,
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
