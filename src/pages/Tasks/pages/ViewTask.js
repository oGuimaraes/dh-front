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
  editTaskRequest,
  deleteTask,
} from '../../../store/modules/task/actions';
import Dialog from '../../../components/Dialog';
import { withRouter } from 'react-router-dom';

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
      dispatch(editTaskRequest(state));
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
            <TextField
              variant="outlined"
              size="small"
              name="responsible"
              disabled={isDisabled}
              onChange={handleChange('responsible')}
              value={state.responsible}
              label="Responsável (MtM tipo bloquinho)"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="documents"
              disabled={isDisabled}
              onChange={handleChange('documents')}
              value={state.documents}
              label="Documentos (MtM tipo bloquinho)"
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
              label="Casos (MtM tipo bloquinho)"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default withRouter(ViewTask);
