import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Container from '../../../components/Container';
import { ButtonContainer } from '../form/styles';
import Grid from '@material-ui/core/Grid';
import { Form } from '@rocketseat/unform';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '../../../components/Button/ButtonDefault';
import { useDispatch } from 'react-redux';
import {
  editUserRequest,
  deleteUser,
} from '../../../store/modules/user/actions';
import Gravatar from 'react-gravatar';
import { AvatarContainer } from '../form/styles';
import Dialog from '../../../components/Dialog';
import { withRouter } from 'react-router-dom';

function ViewUser(props) {
  const user = useSelector((state) => state.user.userSelected);
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = useState(true);
  const {
    name,
    email,
    bond_type,
    phone,
    registration,
    address,
    course,
    university,
    department,
    rg,
    cpf,
    cnh,
    date_joined,
    date_fired,
    is_active,
    scholarship,
    scholarship_type,
    on_duty,
    id,
  } = user;

  const [state, setState] = useState({
    name,
    email,
    bond_type,
    phone,
    registration,
    address,
    course,
    university,
    department,
    rg,
    cpf,
    cnh,
    date_joined,
    date_fired,
    is_active,
    scholarship,
    scholarship_type,
    on_duty,
    id,
  });

  if (state.address == null) {
    setState({
      ...state,
      address: {
        street: '',
        number: null,
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
      },
    });
  }

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [bondTypeError, setBondTypeError] = useState('');
  const [rgError, setRgError] = useState('');
  const [cpfError, setCpfError] = useState('');

  const validate = () => {
    let isError = false;
    const errors = {};

    /* Name validation */
    if (state.name.length === 0) {
      isError = true;
      setNameError('O Nome é obrigatório');
    } else {
      setNameError('');
    }

    /* Email validation */
    const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!expression.test(String(state.email).toLowerCase())) {
      isError = true;
      setEmailError('Email Inválido');
    } else if (state.email.lenght === 0) {
      isError = true;
      setEmailError('E-mail obrigatório');
    } else {
      setEmailError('');
    }

    /* Bond Type validation */
    if (state.bond_type.length === 0) {
      isError = true;
      setBondTypeError('Tipo de vínculo é obrigatório');
    } else {
      setBondTypeError('');
    }

    if (state.rg.length === 0) {
      isError = true;
      setRgError('N° do RG obrigatório');
    } else {
      setRgError('');
    }

    if (state.cpf.length === 0) {
      isError = true;
      setCpfError('N° do CPF obrigatório');
    } else {
      setCpfError('');
    }

    return isError;
  };

  const handleEdit = () => {
    setIsDisabled(!isDisabled);
  };

  const handleDelete = () => {};

  const handleSubmitEdit = (e) => {
    const err = validate();
    if (!err) {
      dispatch(editUserRequest(state));

      /** When updating your own user in users, update header
       *
       * const authenticatedUser = useSelector((state) => state.auth.user);
       * if (state.id == authenticatedUser.id) {
       *   dispatch(saveAuthenticatedUser(state));
       * }
       */
    }
  };

  const handleChange = (input) => (event) => {
    setState({ ...state, [input]: event.target.value });
  };

  const handleChangeAddress = (input) => (event) => {
    const newAddress = { ...state.address, [input]: event.target.value };
    setState({ ...state, address: newAddress });

    console.log(state);
  };

  let buttonAreaContent;

  if (isDisabled) {
    buttonAreaContent = (
      <Button
        className="buttonDefault"
        text="Editar"
        icon="edit"
        clickEvent={handleEdit}
      ></Button>
    );
  } else {
    buttonAreaContent = (
      <>
        <Button
          className="buttonDefault"
          text="Salvar"
          icon="save"
          clickEvent={handleSubmitEdit}
        ></Button>
        <Dialog
          name={state.name}
          id={state.id}
          functionDelete={deleteUser}
          history={props.history}
          url="/usuarios"
        />
      </>
    );
  }

  return (
    <>
      <AvatarContainer>
        <Gravatar
          email={state.email}
          default="https://community.intersystems.com/sites/default/files/pictures/picture-default.jpg"
          rating="pg"
          size={130}
        />
      </AvatarContainer>
      <ButtonContainer>
        <Grid className="buttonContainer" item xs={12}>
          {buttonAreaContent}
        </Grid>
      </ButtonContainer>
      <Container>
        <Form>
          <Grid justify="space-around" container spacing={3}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                name="name"
                disabled={isDisabled}
                display="none"
                onChange={handleChange('name')}
                label="Nome Completo"
                value={state.name}
              />
              <FormHelperText>{nameError}</FormHelperText>
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                label="E-mail"
                name="email"
                disabled={isDisabled}
                onChange={handleChange('email')}
                value={state.email}
                type="email"
              />
              <FormHelperText>{emailError}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                label="Tipo de Vínculo"
                name="bond_type"
                disabled={isDisabled}
                onChange={handleChange('bond_type')}
                value={state.bond_type}
              />
              <FormHelperText>{bondTypeError}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                label="Telefone"
                name="phone"
                disabled={isDisabled}
                onChange={handleChange('phone')}
                value={state.phone}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                label="Nº Identidade"
                name="rg"
                disabled={isDisabled}
                onChange={handleChange('rg')}
                value={state.rg}
              />
              <FormHelperText>{rgError}</FormHelperText>
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                label="Nº do CPF"
                name="cpf"
                disabled={isDisabled}
                onChange={handleChange('cpf')}
                value={state.cpf}
              />
              <FormHelperText>{cpfError}</FormHelperText>
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                label="Nº da CNH"
                name="cnh"
                disabled={isDisabled}
                placeholder="Nº da CNH"
                onChange={handleChange('cnh')}
                value={state.cnh}
              />
            </Grid>

            <Grid item xs={11}>
              <div style={{ borderBottom: '1px #d1e1e6 dashed' }} />
            </Grid>

            <Grid item xs={8}>
              <TextField
                variant="outlined"
                size="small"
                name="street"
                label="Rua"
                disabled={isDisabled}
                onChange={handleChangeAddress('street')}
                value={state.address ? state.address.street : ''}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="number_address"
                label="Número"
                disabled={isDisabled}
                onChange={handleChangeAddress('number')}
                value={state.address ? state.address.number : ''}
                type="number"
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="complement"
                label="Complemento"
                disabled={isDisabled}
                onChange={handleChangeAddress('complement')}
                value={state.address ? state.address.complement : ''}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="neighborhood_address"
                label="Bairro"
                disabled={isDisabled}
                onChange={handleChangeAddress('neighborhood')}
                value={state.address ? state.address.neighborhood : ''}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="city_address"
                label="Cidade"
                disabled={isDisabled}
                onChange={handleChangeAddress('city')}
                value={state.address ? state.address.city : ''}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="state_address"
                label="Estado"
                disabled={isDisabled}
                onChange={handleChangeAddress('state')}
                value={state.address ? state.address.state : ''}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="date_joined"
                disabled={isDisabled}
                label="Data de Entrada na CDH"
                onChange={handleChange('date_joined')}
                value={state.date_joined}
              />
            </Grid>

            <Grid item xs={11}>
              <div style={{ borderBottom: '1px #d1e1e6 dashed' }} />
            </Grid>

            <Grid item xs={8}>
              <TextField
                variant="outlined"
                size="small"
                name="course"
                label="Curso"
                disabled={isDisabled}
                onChange={handleChange('course')}
                value={state.course}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="university"
                label="Universidade"
                disabled={isDisabled}
                onChange={handleChange('university')}
                value={state.university}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="department"
                label="Departamento"
                disabled={isDisabled}
                onChange={handleChange('department')}
                value={state.department}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="scholarship"
                label="Escolaridade"
                disabled={isDisabled}
                onChange={handleChange('scholarship')}
                value={state.scholarship}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="scholarship_type"
                disabled={isDisabled}
                label="Tipo de escolaridade"
                onChange={handleChange('scholarship_type')}
                value={state.scholarship_type}
              />
            </Grid>

            <Grid item xs={11}>
              <div style={{ borderBottom: '1px #d1e1e6 dashed' }} />
            </Grid>
          </Grid>
        </Form>
      </Container>
    </>
  );
}
export default withRouter(ViewUser);
