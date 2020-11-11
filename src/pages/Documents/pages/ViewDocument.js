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
  editDocumentRequest,
  deleteDocument,
} from '../../../store/modules/document/actions';
import Dialog from '../../../components/Dialog';
import { withRouter } from 'react-router-dom';

function ViewDocument(props) {
  console.log(props);
  const aDocument = useSelector((state) => state.documents.documentSelected);
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = useState(true);
  const {
    id,
    type,
    date,
    prepared_by,
    recipients,
    axis,
    link,
    tasks,
  } = aDocument;

  const [state, setState] = useState({
    id,
    type,
    date,
    prepared_by,
    recipients,
    axis,
    link,
    tasks,
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
      dispatch(editDocumentRequest(state));
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
          name={`documento ${state.id}`}
          id={state.id}
          functionDelete={deleteDocument}
          history={props.history}
          url="/documentos"
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
              name="type"
              disabled={isDisabled}
              onChange={handleChange('type')}
              value={state.type}
              label="Tipo de Documento"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="date"
              disabled={isDisabled}
              onChange={handleChange('date')}
              value={state.date}
              label="Data"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="prepared_by"
              disabled={isDisabled}
              onChange={handleChange('prepared_by')}
              value={state.prepared_by}
              label="Elaborado por"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="recipients"
              disabled={isDisabled}
              onChange={handleChange('recipients')}
              value={state.recipients}
              label="Destinatários"
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
              label="Eixos"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="link"
              disabled={isDisabled}
              onChange={handleChange('link')}
              value={state.link}
              label="Link"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="tasks"
              disabled={isDisabled}
              onChange={handleChange('tasks')}
              value={state.tasks}
              label="Tarefas"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default withRouter(ViewDocument);
