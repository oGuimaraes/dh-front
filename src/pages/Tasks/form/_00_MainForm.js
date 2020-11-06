import React, { Component } from 'react';
import Part1 from './_01_part';

class MainForm extends Component {
  state = {
    step: 1,
    title: '',
    deadline: '2020-03-12',
    description: '',
    responsible: [],
    document_task: [],
    case_tasks: [],
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
      title,
      deadline,
      description,
      responsible,
      document_task,
      case_tasks,
    } = this.state;

    const values = {
      title,
      deadline,
      description,
      responsible,
      document_task,
      case_tasks,
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
