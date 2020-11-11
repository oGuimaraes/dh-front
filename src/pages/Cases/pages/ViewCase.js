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
  editCaseRequest,
  deleteCase,
} from '../../../store/modules/case/actions';
import Dialog from '../../../components/Dialog';
import { withRouter } from 'react-router-dom';

function ViewCase(props) {
  console.log(props);
  const aCase = useSelector((state) => state.cases.caseSelected);
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = useState(true);
  const {
    id,
    related_areas,
    reference_contacts,
    daj_number,
    daj_advisor,
    daj_intern,
    report,
    registration_date,
    solution_date,
    documents,
    tasks,
    law_suits,
    entities,
    intern,
    advisor,
    assisted_person,
    axis,
  } = aCase;

  const [state, setState] = useState({
    id,
    related_areas,
    reference_contacts,
    daj_number,
    daj_advisor,
    daj_intern,
    report,
    registration_date,
    solution_date,
    documents,
    tasks,
    law_suits,
    entities,
    intern,
    advisor,
    assisted_person,
    axis,
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
      dispatch(editCaseRequest(state));
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
          name={`caso ${state.id}`}
          id={state.id}
          functionDelete={deleteCase}
          history={props.history}
          url="/casos"
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
              name="related_areas"
              disabled={isDisabled}
              onChange={handleChange('related_areas')}
              value={state.related_areas}
              label="Áreas Relacionadas"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="assisted_person"
              disabled={isDisabled}
              onChange={handleChange('assisted_person')}
              value={state.assisted_person}
              label="Pessoa Assistida"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="advisor"
              disabled={isDisabled}
              onChange={handleChange('advisor')}
              value={state.advisor}
              label="Orientador Responsável"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="intern"
              disabled={isDisabled}
              onChange={handleChange('intern')}
              value={state.intern}
              label="Estagiário Responsável"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
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

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="reference_contacts"
              disabled={isDisabled}
              onChange={handleChange('reference_contacts')}
              value={state.reference_contacts}
              label="Contatos de Referência"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="daj_number"
              disabled={isDisabled}
              onChange={handleChange('daj_number')}
              value={state.daj_number}
              label="Número do caso no MinhaDAJ"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="daj_advisor"
              disabled={isDisabled}
              onChange={handleChange('daj_advisor')}
              value={state.daj_advisor}
              label="Orientador no DAJ"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="daj_intern"
              disabled={isDisabled}
              onChange={handleChange('daj_intern')}
              value={state.daj_intern}
              label="Estagiário no DAJ"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="law_suits"
              disabled={isDisabled}
              onChange={handleChange('law_suits')}
              value={state.law_suits}
              label="Processos"
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

          <Grid item xs={12} sm={6}>
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

          {/* TextArea */}
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              size="small"
              name="report"
              disabled={isDisabled}
              onChange={handleChange('report')}
              value={state.report}
              label="Relatório"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="entities"
              disabled={isDisabled}
              onChange={handleChange('entities')}
              value={state.entities}
              label="Entidades"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="registration_date"
              disabled={isDisabled}
              onChange={handleChange('registration_date')}
              value={state.registration_date}
              label="Data de Cadastro"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="solution_date"
              disabled={isDisabled}
              onChange={handleChange('solution_date')}
              value={state.solution_date}
              label="Data de Solução"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default withRouter(ViewCase);
