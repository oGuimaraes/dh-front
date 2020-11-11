import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Form } from '@rocketseat/unform';
import Grid from '@material-ui/core/Grid';
import { Container, ButtonContainer } from './styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import Checkbox from '@material-ui/core/Checkbox';

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

  return (
    <>
      <Container>
        <Form onSubmit={saveAndContinue}>
          <Grid justify="space-around" container spacing={3}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="mother_name"
                onChange={props.handleChange('mother_name')}
                value={values.mother_name}
                label="Nome da Mãe"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="schooling"
                onChange={props.handleChange('schooling')}
                value={values.schooling}
                label="Escolaridade"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="birthday"
                onChange={props.handleChange('birthday')}
                value={values.birthday}
                label="Data de Nascimento"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="birth_city"
                onChange={props.handleChange('birth_city')}
                value={values.birth_city}
                label="Cidade do Nascimento"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="birth_state"
                onChange={props.handleChange('birth_state')}
                value={values.birth_state}
                label="Estado do Nascimento"
              />
            </Grid>

            <Grid item xs={6} className="checkboxSection">
              <span>Possui algum problema de sáude?</span>
              <Checkbox
                defaultChecked
                color="primary"
                checked={values.has_health_problem}
                onChange={props.handleChange('has_health_problem')}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>

            <ButtonContainer>
              <Grid className="buttonContainer" item xs={12}>
                <button className="buttonDefault" icon="back" onClick={back}>
                  Voltar
                </button>
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
