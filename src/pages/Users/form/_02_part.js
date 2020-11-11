import React, { Component } from 'react';
import { Form } from '@rocketseat/unform';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { ButtonContainer } from './styles';

class _02_part extends Component {
  saveAndContinue = (e) => {
    this.props.nextStep();
  };

  back = (e) => {
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;

    return (
      <Form onSubmit={this.saveAndContinue}>
        <Grid justify="space-around" container spacing={3}>
          <Grid item xs={12} sm={12} md={8}>
            <TextField
              variant="outlined"
              size="small"
              name="street_address"
              label="Rua"
              onChange={this.props.handleChange('street_address')}
              defaultValue={values.street_address}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="number_address"
              label="Número"
              onChange={this.props.handleChange('number_address')}
              defaultValue={values.number_address}
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="complement_address"
              label="Complemento"
              onChange={this.props.handleChange('complement_address')}
              defaultValue={values.complement_address}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="neighborhood_address"
              label="Bairro"
              onChange={this.props.handleChange('neighborhood_address')}
              defaultValue={values.neighborhood_address}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="city_address"
              label="Cidade"
              onChange={this.props.handleChange('city_address')}
              defaultValue={values.city_address}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="state_address"
              label="Estado"
              onChange={this.props.handleChange('state_address')}
              defaultValue={values.state_address}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="date_joined"
              label="Data de Entrada na CDH"
              onChange={this.props.handleChange('date_joined')}
              defaultValue={values.date_joined}
            />
          </Grid>
        </Grid>
        <ButtonContainer>
          <Grid className="buttonContainer" item xs={12}>
            <button className="buttonDefault" icon="back" onClick={this.back}>
              Voltar
            </button>
            <button className="buttonDefault" type="submit">
              Próximo
            </button>
          </Grid>
        </ButtonContainer>
      </Form>
    );
  }
}

export default _02_part;
