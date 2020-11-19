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

  const case_bond_choices = [
    { id: 1, value: 'Assistido' },
    { id: 2, value: 'Jurisdicionado' },
    { id: 3, value: 'Atingido' },
    { id: 4, value: 'Terceiro' },
    { id: 5, value: 'Interessado' },
    { id: 6, value: 'Outro' },
  ];

  const law_suit_choices = [
    { id: 1, value: 'Parte Autora' },
    { id: 2, value: 'Parte Ré' },
    { id: 3, value: 'Terceiro' },
    { id: 4, value: 'Interessado' },
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
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="birthday"
                onChange={props.handleChange('birthday')}
                value={values.birthday}
                label="Data de Nascimento"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="birth_city"
                onChange={props.handleChange('birth_city')}
                value={values.birth_city}
                label="Cidade do Nascimento"
              />
            </Grid>
            <Grid item xs={4}>
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
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="which_health_problem"
                onChange={props.handleChange('which_health_problem')}
                value={values.which_health_problem}
                label="Se sim, qual problema de saúde?"
              />
            </Grid>

            <Grid item xs={6} className="checkboxSection">
              <span>Recebe algum auxílio?</span>
              <Checkbox
                defaultChecked
                color="primary"
                checked={values.receives_assistance}
                onChange={props.handleChange('receives_assistance')}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="which_assistance"
                onChange={props.handleChange('which_assistance')}
                value={values.which_assistance}
                label="Se sim, qual auxílio?"
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                variant="outlined"
                size="small"
                name="case_people"
                onChange={props.handleChange('case_people')}
                value={values.case_people}
                label="Caso Relacionado"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <FormControl>
                <InputLabel id="demo-customized-select-label">
                  Vinculo do caso
                </InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={values.related_case_bond}
                  name="related_case_bond"
                  onChange={props.handleChange('related_case_bond')}
                  input={<BootstrapInput />}
                >
                  {case_bond_choices.map((area) => (
                    <MenuItem value={area.id}>{area.value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <TextField
                variant="outlined"
                size="small"
                name="related_law_suit"
                onChange={props.handleChange('related_law_suit')}
                value={values.related_law_suit}
                label="Processo Relacionado"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <FormControl>
                <InputLabel id="demo-customized-select-label">
                  Vinculo do processo
                </InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={values.law_suit_choices}
                  name="law_suit_choices"
                  onChange={props.handleChange('law_suit_choices')}
                  input={<BootstrapInput />}
                >
                  {law_suit_choices.map((area) => (
                    <MenuItem value={area.id}>{area.value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="related_person"
                onChange={props.handleChange('related_person')}
                value={values.related_person}
                label="Pessoa Relacionada"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="contact_email"
                onChange={props.handleChange('contact_email')}
                value={values.contact_email}
                label="Email (Pessoa Relacionada)"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="contact_phone"
                onChange={props.handleChange('contact_phone')}
                value={values.contact_phone}
                label="Telefone (Pessoa Relacionada)"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="contact_phone"
                onChange={props.handleChange('contact_phone')}
                value={values.contact_phone}
                label="Rua (Pessoa Relacionada)"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="contact_phone"
                onChange={props.handleChange('contact_phone')}
                value={values.contact_phone}
                label="Numero (Pessoa Relacionada)"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="contact_phone"
                onChange={props.handleChange('contact_phone')}
                value={values.contact_phone}
                label="Complemento (Pessoa Relacionada)"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="contact_phone"
                onChange={props.handleChange('contact_phone')}
                value={values.contact_phone}
                label="Bairro (Pessoa Relacionada)"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="contact_phone"
                onChange={props.handleChange('contact_phone')}
                value={values.contact_phone}
                label="Cidade (Pessoa Relacionada)"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="contact_phone"
                onChange={props.handleChange('contact_phone')}
                value={values.contact_phone}
                label="Estado (Pessoa Relacionada)"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="contact_phone"
                onChange={props.handleChange('contact_phone')}
                value={values.contact_phone}
                label="Documento Relacionado"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="axis"
                onChange={props.handleChange('axis')}
                value={values.axis}
                label="Eixo"
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
