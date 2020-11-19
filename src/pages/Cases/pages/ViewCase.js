import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Container from '../../../components/Container';
import { ButtonContainer } from '../form/styles';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '../../../components/Button/ButtonDefault';
import InputAutoComplete from '../../../components/InputAutocomplete';
import { useDispatch } from 'react-redux';
import {
  editCaseRequest,
  deleteCase,
  updateAdvisors,
  updateInterns,
  updateAssistedPerson,
  updateLawSuit,
  updateTask,
  updateAxes,
  updateDocuments,
  updateEntities,
  updateRegistrationDate,
  updateSolutionDate,
} from '../../../store/modules/case/actions';
import Dialog from '../../../components/Dialog';
import { withRouter } from 'react-router-dom';
import Datapicker from '../../../components/Datapicker';

/* Imports Select Default */
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import api from '../../../services/api';

/* Input Styling */
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

function ViewCase(props) {
  const aCase = useSelector((state) => state.cases.caseSelected);

  const [users, setUsers] = useState([]);
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

  useEffect(() => {
    async function loadUsers() {
      await api.get('/accounts/').then((res) => {
        const usersId = users.map(({ id }) => id);
        const otherUsers = res.data.results
          .map(({ id, name }) => ({ id, name }))
          .filter((user) => !usersId.includes(user.id));

        setUsers((state) =>
          [...state, ...otherUsers].sort((a, b) => a.name.localeCompare(b.name))
        );
      });
    }

    async function loadPeople() {
      await api
        .get('/people/')
        .then((res) =>
          setAllAssistedPerson(
            res.data.results
              .map(({ id, full_name }) => ({ id, full_name }))
              .sort((a, b) => a.full_name.localeCompare(b.full_name))
          )
        );
    }

    async function getAxes() {
      await api
        .get('/axes/')
        .then((res) =>
          setAllAxis(
            res.data.results
              .map(({ id, name }) => ({ id, name }))
              .sort((a, b) => a.name.localeCompare(b.name))
          )
        );
    }

    async function getTasks() {
      await api
        .get('/tasks/')
        .then((res) =>
          setAllTasks(
            res.data.results
              .map(({ id, title }) => ({ id, title }))
              .sort((a, b) => a.title.localeCompare(b.title))
          )
        );
    }

    async function getLawSuits() {
      await api
        .get('/law_suits/')
        .then((res) =>
          setAllLawSuits(
            res.data.results
              .map(({ id, law_suit_number }) => ({ id, law_suit_number }))
              .sort((a, b) =>
                a.law_suit_number
                  .toString()
                  .localeCompare(b.law_suit_number.toString())
              )
          )
        );
    }

    async function getDocuments() {
      await api.get('/documents/').then((res) => {
        res.data.results.map((document) => {
          document.idString = document.id + '';
        });
        setAllDocuments(
          res.data.results
            .map(({ id, idString }) => ({ id, idString }))
            .sort((a, b) =>
              a.idString.toString().localeCompare(b.idString.toString())
            )
        );
      });
    }

    async function getEntities() {
      await api
        .get('/entities/')
        .then((res) =>
          setAllEntities(
            res.data.results
              .map(({ id, name }) => ({ id, name }))
              .sort((a, b) => a.name.localeCompare(b.name))
          )
        );
    }
    loadUsers();
    getAxes();
    loadPeople();
    getTasks();
    getLawSuits();
    getDocuments();
    getEntities();
  }, []);

  /* Validation errors setState */
  const [relatedAreasError, setRelatedAreasError] = useState('');
  const [advisorError, setAdvisorError] = useState('');
  const [internError, setInternError] = useState('');
  const [reportError, setReportError] = useState('');
  const [registrationDateError, setRegistrationDateError] = useState('');
  const [axisError, setAxisError] = useState('');

  const validate = () => {
    let hasError = false;
    console.log(aCase);
    if (state.related_areas?.length === 0 || state.related_areas == null) {
      hasError = true;
      setRelatedAreasError('Obrigatório o preenchimento.');
    } else setRelatedAreasError('');

    if (aCase.advisor.length === 0) {
      hasError = true;
      setAdvisorError('Obrigatório o preenchimento.');
    } else setAdvisorError('');

    if (aCase.intern.length === 0) {
      hasError = true;
      setInternError('Obrigatório o preenchimento.');
    } else setInternError('');

    if (state.report.length === 0) {
      hasError = true;
      setReportError('Obrigatório o preenchimento.');
    } else setReportError('');

    console.log(aCase.registration_date);

    if (aCase.registration_date.length === 0) {
      hasError = true;
      setRegistrationDateError('Obrigatório o preenchimento.');
    } else setRegistrationDateError('');

    if (aCase.axis.length === 0) {
      hasError = true;
      setAxisError('Obrigatório o preenchimento.');
    } else setAxisError('');

    return hasError;
  };

  const handleEdit = () => {
    setIsDisabled(!isDisabled);
  };

  const handleDelete = () => {};

  const handleSubmitEdit = (e) => {
    const err = validate();

    if (!err) {
      const values = { ...aCase };
      values.reference_contacts = state.reference_contacts;
      values.related_areas = state.related_areas;
      values.daj_advisor = state.daj_advisor;
      values.daj_intern = state.daj_intern;
      values.daj_number = state.daj_number;
      values.report = state.report;

      console.log(values);
      dispatch(editCaseRequest(values));
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

  /* Choices in area select input */
  const areas = [
    { key: 1, value: 'Administrativo' },
    { key: 2, value: 'Ambiental' },
    { key: 3, value: 'Cível' },
    { key: 4, value: 'Consumidor' },
    { key: 5, value: 'Criminal' },
    { key: 6, value: 'Família' },
    { key: 7, value: 'Ambiental' },
    { key: 8, value: 'Previdenciário' },
    { key: 9, value: 'Sucessões' },
    { key: 10, value: 'Societário' },
    { key: 11, value: 'Trabalhista' },
    { key: 12, value: 'Tributário' },
    { key: 13, value: 'Contratos' },
    { key: 14, value: 'Internacional' },
  ];

  const [allAssistedPerson, setAllAssistedPerson] = useState([
    { name: '', id: 0 },
  ]);
  const [allTasks, setAllTasks] = useState([{ name: '', id: 0 }]);
  const [allAxis, setAllAxis] = useState([{ name: '', id: 0 }]);
  const [allLawSuits, setAllLawSuits] = useState([{ name: '', id: 0 }]);
  const [allDocuments, setAllDocuments] = useState([{ name: '', id: 0 }]);
  const [allEntities, setAllEntities] = useState([{ name: '', id: 0 }]);

  const assistedPersonState = aCase.assisted_person
    .map(({ id, full_name }) => ({ id, full_name }))
    .sort((a, b) => a.full_name.localeCompare(b.full_name));

  const internState = aCase.intern
    .map(({ id, name }) => ({ id, name }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const advisorState = aCase.advisor
    .map(({ id, name }) => ({ id, name }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const axisState = aCase.axis
    .map(({ id, name }) => ({ id, name }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const lawSuitsState = aCase.law_suits
    .map(({ id, law_suit_number }) => ({ id, law_suit_number }))
    .sort((a, b) => a.law_suit_number.localeCompare(b.law_suit_number));

  const tasksState = aCase.tasks
    .map(({ id, title }) => ({ id, title }))
    .sort((a, b) => a.title.localeCompare(b.title));

  const documentsState = aCase.documents
    .map(({ id, link }) => ({ id, idString: id.toString() }))
    .sort((a, b) => a.id.toString().localeCompare(b.id.toString()));

  const entitiesState = aCase.entities
    .map(({ id, name }) => ({ id, name }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <ButtonContainer>
        <Grid className="buttonContainer" item xs={12}>
          {buttonAreaContent}
        </Grid>
      </ButtonContainer>
      <Container>
        <Grid justify="space-around" container spacing={3}>
          <Grid item xs={12} sm={6} className="brotherOfAutoselect">
            <FormControl>
              <InputLabel id="demo-customized-select-label">
                Área Relacionada
              </InputLabel>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={state.related_areas}
                name="related_areas"
                disabled={isDisabled}
                onChange={handleChange('related_areas')}
                input={<BootstrapInput />}
              >
                <MenuItem value="">
                  <em style={{ color: '#a1a1a1' }}>vazio</em>
                </MenuItem>
                {areas.map((area, index) => (
                  <MenuItem key={index} value={area.key}>
                    {area.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormHelperText>{relatedAreasError}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputAutoComplete
              label={'Pessoa Assistida'}
              isDisabled={isDisabled}
              defaultValue={assistedPersonState}
              data={allAssistedPerson.filter(
                (o) => !assistedPersonState.find((o2) => o.id === o2.id)
              )}
              id={'id'}
              value={'full_name'}
              dispatchAction={updateAssistedPerson}
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputAutoComplete
              label={'Orientador Responsável'}
              isDisabled={isDisabled}
              defaultValue={advisorState}
              data={users.filter(
                (o) => !advisorState.find((o2) => o.id === o2.id)
              )}
              id={'id'}
              value={'name'}
              dispatchAction={updateAdvisors}
            />
            <FormHelperText>{advisorError}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputAutoComplete
              label={'Estagiário Responsável'}
              isDisabled={isDisabled}
              defaultValue={internState}
              data={users.filter(
                (o) => !internState.find((o2) => o.id === o2.id)
              )}
              id={'id'}
              value={'name'}
              dispatchAction={updateInterns}
            />
            <FormHelperText>{internError}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <InputAutoComplete
              label={'Eixos'}
              isDisabled={isDisabled}
              defaultValue={axisState}
              data={allAxis.filter(
                (o) => !axisState.find((o2) => o.id === o2.id)
              )}
              id={'id'}
              value={'name'}
              dispatchAction={updateAxes}
            />
            <FormHelperText>{axisError}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4} className="brotherOfAutoselect">
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

          <Grid item xs={12} sm={6} md={4} className="brotherOfAutoselect">
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

          <Grid item xs={12} sm={6} md={4} className="brotherOfAutoselect">
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

          <Grid item xs={12} sm={6} md={4} className="brotherOfAutoselect">
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
            <InputAutoComplete
              label={'Processos'}
              isDisabled={isDisabled}
              defaultValue={lawSuitsState}
              data={allLawSuits.filter(
                (o) => !lawSuitsState.find((o2) => o.id === o2.id)
              )}
              id={'id'}
              value={'law_suit_number'}
              dispatchAction={updateLawSuit}
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputAutoComplete
              data={allTasks.filter(
                (o) => !tasksState.find((o2) => o.id === o2.id)
              )}
              isDisabled={isDisabled}
              defaultValue={tasksState}
              id={'id'}
              label={'Tarefas'}
              value={'title'}
              dispatchAction={updateTask}
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputAutoComplete
              label={'Documentos'}
              isDisabled={isDisabled}
              defaultValue={documentsState}
              data={allDocuments.filter(
                (o) => !documentsState.find((o2) => o.id === o2.id)
              )}
              id={'id'}
              value={'idString'}
              dispatchAction={updateDocuments}
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="outlined-multiline-static"
              label="Relatório"
              multiline
              name="report"
              rows={3}
              disabled={isDisabled}
              onChange={handleChange('report')}
              value={state.report}
              variant="outlined"
            />
            <FormHelperText>{reportError}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <InputAutoComplete
              label={'Entidades'}
              defaultValue={entitiesState}
              isDisabled={isDisabled}
              data={allEntities.filter(
                (o) => !entitiesState.find((o2) => o.id === o2.id)
              )}
              id={'id'}
              value={'name'}
              dispatchAction={updateEntities}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} className="brotherOfAutoselect">
            <Datapicker
              defaultValue={aCase.registration_date}
              disabled={isDisabled}
              label="Data de Cadastro"
              dispatchAction={updateRegistrationDate}
            />
            <FormHelperText>{registrationDateError}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4} className="brotherOfAutoselect">
            <Datapicker
              defaultValue={aCase.solution_date}
              disabled={isDisabled}
              label="Data de Solução"
              dispatchAction={updateSolutionDate}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default withRouter(ViewCase);
