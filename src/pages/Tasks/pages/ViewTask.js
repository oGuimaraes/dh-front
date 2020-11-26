import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Container from '../../../components/Container';
import { ButtonContainer } from '../form/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '../../../components/Button/ButtonDefault';
import { useDispatch } from 'react-redux';
import {
  editTaskRequest,
  deleteTask,
} from '../../../store/modules/task/actions';
import Dialog from '../../../components/Dialog';
import { withRouter } from 'react-router-dom';
import InputAutoComplete from '../../../components/InputAutocomplete';

import { updateResponsible } from '../../../store/modules/task/actions';

/* Imports Select Default */

import api from '../../../services/api';

function ViewTask(props) {
  const aTask = useSelector((state) => state.tasks.taskSelected);
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = useState(true);
  const {
    id,
    title,
    deadline,
    description,
    responsible,
    documents,
    cases,
  } = aTask;

  const [state, setState] = useState({
    id,
    title,
    deadline,
    description,
    responsible,
    documents,
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
      const values = { ...state };
      values.responsible = aTask.responsible;
      console.log(values);
      dispatch(editTaskRequest(values));
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
          name={`tarefa ${state.id}`}
          id={state.id}
          functionDelete={deleteTask}
          history={props.history}
          url="/tarefas"
        />
      </>
    );
  }

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      await api
        .get('/accounts/')
        .then((res) =>
          setAllResponsibleState(
            res.data.results
              .map(({ id, name }) => ({ id, name }))
              .sort((a, b) => a.name.localeCompare(b.name))
          )
        );
    }

    loadUsers();
  }, []);

  const responsibleState = aTask.responsible
    .map(({ id, name }) => ({ id, name }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const [allResponsibleState, setAllResponsibleState] = useState([
    { name: '', id: 0 },
  ]);

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
              name="title"
              disabled={isDisabled}
              onChange={handleChange('title')}
              value={state.title}
              label="Título"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="deadline"
              disabled={isDisabled}
              onChange={handleChange('deadline')}
              value={state.deadline}
              label="Prazo"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              size="small"
              name="description"
              multiline
              rows={3}
              disabled={isDisabled}
              onChange={handleChange('description')}
              value={state.description}
              label="Descrição"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputAutoComplete
              label={'Responsável'}
              isDisabled={isDisabled}
              defaultValue={responsibleState}
              data={allResponsibleState.filter(
                (o) => !responsibleState.find((o2) => o.id === o2.id)
              )}
              id={'id'}
              value={'name'}
              dispatchAction={updateResponsible}
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} className="brotherOfAutoselect">
            <TextField
              variant="outlined"
              size="small"
              name="documents"
              disabled={isDisabled}
              onChange={handleChange('documents')}
              value={state.documents}
              label="Documentos"
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
              label="Casos"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default withRouter(ViewTask);
