import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Container from '../../../components/Container';
import { ButtonContainer } from '../form/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '../../../components/Button/ButtonDefault';
import { useDispatch } from 'react-redux';
import {
  editEntityRequest,
  deleteEntity,
} from '../../../store/modules/entity/actions';
import Dialog from '../../../components/Dialog';
import { withRouter } from 'react-router-dom';

function ViewEntity(props) {
  console.log(props);
  const aEntity = useSelector((state) => state.entities.entitySelected);
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = useState(true);
  const {
    id,
    name,
    address,
    entity_liked,
    description,
    contact,
    reference_person,
    reference_person_contact,
    comments,
    people,
    axis,
    cases,
  } = aEntity;

  const [state, setState] = useState({
    id,
    name,
    address,
    entity_liked,
    description,
    contact,
    reference_person,
    reference_person_contact,
    comments,
    people,
    axis,
    cases,
  });

  const validate = () => {
    let isError = false;
    return isError;
  };

  const handleEdit = () => {
    setIsDisabled(!isDisabled);
  };

  const handleDelete = () => {};

  const handleSubmitEdit = (e) => {
    const err = validate();
    if (!err) {
      dispatch(editEntityRequest(state));
    }
  };

  const handleChange = (input) => (event) => {
    setState({ ...state, [input]: event.target.value });
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
          name={`entityo ${state.id}`}
          id={state.id}
          functionDelete={deleteEntity}
          history={props.history}
          url="/entityos"
        />
      </>
    );
  }

  return (
    <>
      <ButtonContainer>
        <Grid className="buttonContainer" item xs={12}>
          {buttonAreaContent}
        </Grid>
      </ButtonContainer>
      <Container>
        <Grid justify="space-around" container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="name"
              disabled={isDisabled}
              onChange={handleChange('name')}
              value={state.name}
              label="Nome"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="address"
              disabled={isDisabled}
              onChange={handleChange('address')}
              value={state.address}
              label="Endereço"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="entity_liked"
              disabled={isDisabled}
              onChange={handleChange('entity_liked')}
              value={state.entity_liked}
              label="Ente Administrativo a que se vincula"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="description"
              disabled={isDisabled}
              onChange={handleChange('description')}
              value={state.description}
              label="Descrição da atuação"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="contact"
              disabled={isDisabled}
              onChange={handleChange('contact')}
              value={state.contact}
              label="Telefone ou Email Institucional"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="reference_person"
              disabled={isDisabled}
              onChange={handleChange('reference_person')}
              value={state.reference_person}
              label="Pessoa de referência"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="reference_person_contact"
              disabled={isDisabled}
              onChange={handleChange('reference_person_contact')}
              value={state.reference_person_contact}
              label="Contato da pessoa de referência"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="comments"
              disabled={isDisabled}
              onChange={handleChange('comments')}
              value={state.comments}
              label="Observação"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="people"
              disabled={isDisabled}
              onChange={handleChange('people')}
              value={state.people}
              label="Pessoas relacionadas"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="axis"
              disabled={isDisabled}
              onChange={handleChange('axis')}
              value={state.axis}
              label="Eixos relacionados"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="cases"
              disabled={isDisabled}
              onChange={handleChange('cases')}
              value={state.cases}
              label="Casos relacionados"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default withRouter(ViewEntity);
