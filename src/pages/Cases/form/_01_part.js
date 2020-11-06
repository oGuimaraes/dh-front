import React, { useEffect, useState } from 'react';
import { Form } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Container, ButtonContainer } from './styles';
import { createCaseRequest } from '../../../store/modules/case/actions';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAutoComplete from '../../../components/InputAutocomplete';
import { withRouter } from 'react-router-dom';

/* Imports Select Default */
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import api from '../../../services/api';

/* Import data actions (Select auto complete) */
import {
  updateAdvisors,
  updateInterns,
  updateAssistedPerson,
} from '../../../store/modules/case/actions';

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

const _01_part = (props) => {
  /* Destructurin values in props */
  const { values } = props;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const err = validate();
    if (!err) {
      props.values.intern = interns;
      props.values.advisor = advisors;
      console.log('teste');
      dispatch(createCaseRequest(values));
    }
  };

  /* Get values in Redux for advisors and intern */

  const advisors = useSelector((state) => state.cases.newCase.advisors);
  const interns = useSelector((state) => state.cases.newCase.interns);

  /* Validation errors setState */

  const [relatedAreasError, setRelatedAreasError] = useState('');
  const [advisorError, setAdvisorError] = useState('');
  const [internError, setInternError] = useState('');
  const [reportError, setReportError] = useState('');
  const [registrationDateError, setRegistrationDateError] = useState('');
  const [axiesError, setAxesError] = useState('');

  const validate = () => {
    console.log(values);
    let hasError = false;
    if (values.related_areas.length === 0) {
      hasError = true;
      setRelatedAreasError('Obrigatório o preenchimento.');
    } else setRelatedAreasError('');

    if (advisors.length === 0) {
      hasError = true;
      setAdvisorError('Obrigatório o preenchimento.');
    } else setAdvisorError('');

    if (interns.length === 0) {
      hasError = true;
      setInternError('Obrigatório o preenchimento.');
    } else setInternError('');

    if (values.report.length === 0) {
      hasError = true;
      setReportError('Obrigatório o preenchimento.');
    } else setReportError('');

    if (values.registration_date.length === 0) {
      hasError = true;
      setRegistrationDateError('Obrigatório o preenchimento.');
    } else setRegistrationDateError('');

    if (values.axis.length === 0) {
      hasError = true;
      setAxesError('Obrigatório o preenchimento.');
    } else setAxesError('');

    return hasError;
  };

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

  const [users, setUsers] = useState([{ name: '', id: 0 }]);
  const [axes, setAxes] = useState([{ name: '', id: 0 }]);
  const [assistedPerson, setAssistedPerson] = useState([{ name: '', id: 0 }]);

  /* Get all users e axes, envia apenas os dados necessários */
  useEffect(() => {
    const infoUsers = [];
    const infoPeople = [];
    const intern = [];
    const advisors = [];
    async function loadUsers() {
      await api.get('/accounts/').then(
        (res) =>
          res.data.map((user) => {
            const cleanUser = { name: user.name, id: user.id };
            infoUsers.push(cleanUser);
          }),
        setUsers(infoUsers)
      );
    }

    async function loadPeople() {
      await api.get('/people/').then(
        (res) =>
          res.data.map((person) => {
            const cleanPerson = { name: person.full_name, id: person.id };
            infoPeople.push(cleanPerson);
          }),
        setAssistedPerson(infoPeople)
      );
    }

    async function getAxes() {
      await api.get('/axes/').then((res) => setAxes(res.data));
    }

    loadUsers();
    getAxes();
    loadPeople();
  }, []);

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Grid justify="space-around" container spacing={3}>
            <Grid item xs={6} className="brotherOfAutoselect">
              <FormControl>
                <InputLabel id="demo-customized-select-label">
                  Área Relacionada
                </InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={values.related_areas}
                  name="related_areas"
                  onChange={props.handleChange('related_areas')}
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

            <Grid item xs={6}>
              <InputAutoComplete
                label={'Pessoa Assistida'}
                data={assistedPerson}
                id={'id'}
                value={'name'}
                dispatchAction={updateAssistedPerson}
              />
              <FormHelperText>{internError}</FormHelperText>
            </Grid>

            <Grid item xs={6}>
              <InputAutoComplete
                label={'Orientador Responsável'}
                data={users}
                id={'id'}
                value={'name'}
                dispatchAction={updateAdvisors}
              />
              <FormHelperText>{advisorError}</FormHelperText>
            </Grid>

            <Grid item xs={6}>
              <InputAutoComplete
                label={'Estagiário Responsável'}
                data={users}
                id={'id'}
                value={'name'}
                dispatchAction={updateInterns}
              />
              <FormHelperText>{internError}</FormHelperText>
            </Grid>

            <Grid item xs={6}>
              <FormControl>
                <InputLabel id="demo-customized-select-label">Eixo</InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={values.axis}
                  name="axis"
                  onChange={props.handleChange('axis')}
                  input={<BootstrapInput />}
                  inputProps={{
                    renderValue: (option) => option.name,
                  }}
                >
                  {axes.map((axis, index) => {
                    return (
                      <MenuItem
                        key={index}
                        value={{ name: axis.name, id: axis.id }}
                      >
                        {axis.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormHelperText>{axiesError}</FormHelperText>
            </Grid>

            <Grid item xs={6} className="centerGrid">
              <TextField
                variant="outlined"
                size="small"
                name="reference_contacts"
                onChange={props.handleChange('reference_contacts')}
                value={values.reference_contacts}
                label="Contatos de Referência"
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="daj_number"
                onChange={props.handleChange('daj_number')}
                value={values.daj_number}
                label="Número do caso no MinhaDAJ"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="daj_advisor"
                onChange={props.handleChange('daj_advisor')}
                value={values.daj_advisor}
                label="Orientador no DAJ"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="daj_intern"
                onChange={props.handleChange('daj_intern')}
                value={values.daj_intern}
                label="Estagiário no DAJ"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="law_suits"
                onChange={props.handleChange('law_suits')}
                value={values.law_suits}
                label="Processos"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="tasks"
                onChange={props.handleChange('tasks')}
                value={values.tasks}
                label="Tarefas"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="documents"
                onChange={props.handleChange('documents')}
                value={values.documents}
                label="Documentos"
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
                onChange={props.handleChange('report')}
                value={values.report}
                variant="outlined"
              />
              <FormHelperText>{reportError}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="entities"
                onChange={props.handleChange('entities')}
                value={values.entities}
                label="Entidades"
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="registration_date"
                onChange={props.handleChange('registration_date')}
                value={values.registration_date}
                label="Data de Cadastro"
              />
              <FormHelperText>{registrationDateError}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="solution_date"
                onChange={props.handleChange('solution_date')}
                value={values.solution_date}
                label="Data de Solução"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>
          </Grid>
          <ButtonContainer>
            <Grid className="buttonContainer" item xs={12}>
              <button className="buttonDefault" icon="right" type="submit">
                Cadastrar
              </button>
            </Grid>
          </ButtonContainer>
        </Form>
      </Container>
    </>
  );
};

export default withRouter(_01_part);
