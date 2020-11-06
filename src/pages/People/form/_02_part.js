import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Form } from '@rocketseat/unform';
import Grid from '@material-ui/core/Grid';
import { Container, ButtonContainer } from './styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#c7e3ea',
    border: '1px solid #a4a4a4',
    fontSize: 14,
    padding: '9px 26px 9px 12px',
    color: '#093239',
    transition: theme.transitions.create(['border-color', 'box-shadow']),

    fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

export default function _02_part(props) {
  const { values } = props;

  const validate = () => {
    let hasError = false;

    /*
    if (values.full_name.length === 0) {
      hasError = true;
      setNameError('O nome é obrigatório');
    } else setNameError('');
    */

    return hasError;
  };

  const saveAndContinue = (e) => {
    const err = validate();
    console.log(props);
    if (!err) {
      props.nextStep();
    }
  };

  const back = (e) => {
    props.prevStep();
  };

  const genderChoices = [
    { key: 1, value: 'Agênero' },
    { key: 2, value: 'Cisgênero' },
    { key: 3, value: 'Gênero Fluido' },
    { key: 4, value: 'Transgênero' },
    { key: 5, value: 'Crossdresser' },
    { key: 6, value: 'Drag Queen' },
    { key: 7, value: 'Não-binário' },
  ];

  return (
    <>
      <Container>
        <Form onSubmit={saveAndContinue}>
          <Grid justify="space-around" container spacing={3}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="email"
                onChange={props.handleChange('email')}
                value={values.email}
                label="E-mail"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="phone"
                onChange={props.handleChange('phone')}
                value={values.phone}
                label="Telefone"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={5}>
              <TextField
                variant="outlined"
                size="small"
                name="street"
                onChange={props.handleChange('street')}
                value={values.street}
                label="Rua"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={3}>
              <TextField
                variant="outlined"
                size="small"
                name="number"
                onChange={props.handleChange('number')}
                value={values.number}
                label="Número"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="complement"
                onChange={props.handleChange('complement')}
                value={values.complement}
                label="Complemento"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="neighborhood"
                onChange={props.handleChange('neighborhood')}
                value={values.neighborhood}
                label="Bairro"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="city"
                onChange={props.handleChange('city')}
                value={values.city}
                label="Cidade"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="estado"
                onChange={props.handleChange('state')}
                value={values.state}
                label="Estado"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="reference_regional_administration"
                onChange={props.handleChange(
                  'reference_regional_administration'
                )}
                value={values.reference_regional_administration}
                label="Regional Administrativa de Referência"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={6}>
              <FormControl>
                <InputLabel id="demo-customized-select-label">
                  Identidade de gênero
                </InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={values.gender_identity}
                  name="gender_identity"
                  onChange={props.handleChange('gender_identity')}
                  input={<BootstrapInput />}
                >
                  <MenuItem value="">
                    <em style={{ color: '#a1a1a1' }}>vazio</em>
                  </MenuItem>
                  {genderChoices.map((area) => (
                    <MenuItem value={area.key}>{area.value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="preferred_pronouns"
                onChange={props.handleChange('preferred_pronouns')}
                value={values.preferred_pronouns}
                label="Pronomes que prefere usar"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="self_identification"
                onChange={props.handleChange('self_identification')}
                value={values.self_identification}
                label="Auto-identificação raça/cor"
              />
            </Grid>

            <ButtonContainer>
              <Grid className="buttonContainer" item xs={12}>
                <button className="buttonDefault" icon="right" type="submit">
                  Próximo
                </button>
              </Grid>
            </ButtonContainer>
          </Grid>
        </Form>
      </Container>
    </>
  );
}
