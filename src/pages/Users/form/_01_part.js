import React, { useState } from 'react';
import { Form } from '@rocketseat/unform';
import Grid from '@material-ui/core/Grid';
import { Container, ButtonContainer } from './styles';
import FormHelperText from '@material-ui/core/FormHelperText';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
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

const _01_part = (props) => {
  const { values } = props;

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [bondTypeError, setBondTypeError] = useState('');
  const [rgError, setRgError] = useState('');
  const [cpfError, setCpfError] = useState('');

  const validate = () => {
    let isError = false;

    /* Name validation */
    if (values.name.length === 0) {
      isError = true;
      setNameError('O Nome é obrigatório');
    } else setNameError('');

    /* Email validation */
    const expression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!expression.test(String(values.email).toLowerCase())) {
      isError = true;
      setEmailError('Email Inválido');
    } else if (values.email.length === 0) {
      isError = true;
      setEmailError('E-mail obrigatório');
    }

    /* Password validation */
    if (values.password.length === 0) {
      isError = true;
      setPasswordError('Senha obrigatória');
    } else if (values.password.length < 6) {
      isError = true;
      setPasswordError('A senha deve ter no mínimo 6 dígitos');
    } else {
      setPasswordError('');
    }

    /* Bond Type validation */
    if (values.bond_type.length === 0) {
      isError = true;
      setBondTypeError('Tipo de vínculo é obrigatório');
    } else {
      setBondTypeError('');
    }

    if (values.rg.length === 0) {
      isError = true;
      setRgError('N° do RG obrigatório');
    } else {
      setRgError('');
    }

    if (values.cpf.length === 0) {
      isError = true;
      setCpfError('N° do CPF obrigatório');
    } else {
      setCpfError('');
    }

    return isError;
  };

  const saveAndContinue = (e) => {
    const err = validate();
    console.log(props);
    if (!err) {
      props.nextStep();
    }
  };

  const bond_type_choices = [
    { id: 1, value: 'Colaborador eventual' },
    { id: 2, value: 'Coordenador' },
    { id: 3, value: 'Estagiário' },
    { id: 4, value: 'Orientador' },
  ];

  const intern_type_choices = [
    { key: 1, value: 'Bolsista' },
    { key: 2, value: 'Voluntário' },
  ];

  const { bond_type } = values;

  const [isIntern, setIsIntern] = useState('');

  /*
  if (values.bond_type === 3) {
    setIsIntern(true);
  } else {
    setIsIntern(false);
  }
  */

  return (
    <>
      <Container>
        <Form onSubmit={saveAndContinue}>
          <Grid justify="space-around" container spacing={3}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="name"
                onChange={props.handleChange('name')}
                value={values.name}
                label="Nome Completo"
              />
              <FormHelperText>{nameError}</FormHelperText>
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                label="E-mail"
                name="email"
                onChange={props.handleChange('email')}
                value={values.email}
                type="email"
              />
              <FormHelperText>{emailError}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                label="Senha"
                name="password"
                type="password"
                onChange={props.handleChange('password')}
                defaultValue={values.password}
                value={values.password}
              />
              <FormHelperText>{passwordError}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <FormControl>
                <InputLabel id="demo-customized-select-label">
                  Tipo de Vínculo
                </InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={values.bond_type}
                  name="bond_type"
                  onChange={props.handleChange('bond_type')}
                  input={<BootstrapInput />}
                >
                  {bond_type_choices.map((area) => (
                    <MenuItem value={area.id}>{area.value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {Boolean(isIntern) && (
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  size="small"
                  label="Telefone"
                  name="phone"
                  onChange={props.handleChange('phone')}
                  defaultValue={values.phone}
                />
              </Grid>
            )}

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                label="Telefone"
                name="phone"
                onChange={props.handleChange('phone')}
                defaultValue={values.phone}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                label="Nº Identidade"
                name="rg"
                onChange={props.handleChange('rg')}
                defaultValue={values.rg}
                helperText={values.rgError}
              />
              <FormHelperText>{rgError}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                label="Nº do CPF"
                name="cpf"
                onChange={props.handleChange('cpf')}
                defaultValue={values.cpf}
                helperText={values.cpfError}
              />
              <FormHelperText>{cpfError}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                label="Nº da CNH"
                name="cnh"
                placeholder="Nº da CNH"
                onChange={props.handleChange('cnh')}
                defaultValue={values.cnh}
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
};

export default _01_part;
