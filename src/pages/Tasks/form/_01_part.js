import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Form } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Container, ButtonContainer } from './styles';
import { createTaskRequest } from '../../../store/modules/task/actions';

import FormHelperText from '@material-ui/core/FormHelperText';

import InputBase from '@material-ui/core/InputBase';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

/* Imports Select Default */
import InputAutoComplete from '../../../components/InputAutocomplete';
import api from '../../../services/api';

/* Imports Datapicker */
import Datapicker from '../../../components/Datapicker';

import {
  updateResponsible,
  updateDocuments,
  updateCases,
  updateDeadlineDatapicker,
} from '../../../store/modules/task/actions';

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
  const dispatch = useDispatch();
  const { values } = props;

  const validate = () => {};

  /* Get the values ​​of the State's Selects and Datapicker (Redux) */

  const responsible = useSelector(
    (state) => state.tasks.taskSelected.responsible
  );
  const documentsState = useSelector(
    (state) => state.tasks.taskSelected.documents
  );
  const casesState = useSelector((state) => state.tasks.taskSelected.cases);
  const datapickerState = useSelector(
    (state) => state.tasks.updateDate.deadline
  );
  const handleSubmit = (e) => {
    const err = validate();
    if (!err) {
      values.responsible = responsible;
      values.document_task = documentsState;
      values.case_tasks = casesState;
      values.deadline = datapickerState;
      dispatch(createTaskRequest(values));
    }
  };
  // User for Select Responsible
  const [users, setUsers] = useState([{ name: '', id: 0 }]);
  const [documents, setDocuments] = useState([{ id: 0 }]);
  const [cases, setCases] = useState([{ id: 0 }]);

  useEffect(() => {
    const usersInfo = [];
    const documentsInfo = [];
    const casesInfo = [];

    async function loadUsers() {
      await api.get('/accounts/').then((res) =>
        res.data.results.map((user) => {
          const cleanUser = { name: user.name, id: user.id };
          usersInfo.push(cleanUser);
        })
      );
      /* Order by name */
      usersInfo.sort((a, b) => (a['name'] < b['name'] ? -1 : 1));
      setUsers(usersInfo);
    }

    async function loadDocuments() {
      await api.get('/documents/').then((res) =>
        res.data.results.map((document) => {
          const cleanDocument = {
            id: document.id,
            name: 'Documento nº ' + document.id,
          };
          documentsInfo.push(cleanDocument);
        })
      );
      /* Order by name */
      documentsInfo.sort((a, b) => (a['id'] < b['id'] ? -1 : 1));
      setDocuments(documentsInfo);
    }

    async function loadCases() {
      await api.get('/cases/').then((res) =>
        res.data.results.map((aCase) => {
          const cleanCase = {
            id: aCase.id,
            name: 'Caso nº' + aCase.id,
          };
          casesInfo.push(cleanCase);
        })
      );
      /* Order by name */
      casesInfo.sort((a, b) => (a['id'] < b['id'] ? -1 : 1));
      setCases(casesInfo);
    }

    loadUsers();
    loadDocuments();
    loadCases();
  }, []);

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Grid justify="space-around" container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                size="small"
                name="title"
                onChange={props.handleChange('title')}
                value={values.title}
                label="Título"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Datapicker
                label="Prazo"
                dispatchAction={updateDeadlineDatapicker}
              />
            </Grid>

            <Grid item xs={12} sm={6} sm={12} className="brotherOfAutoselect">
              <TextField
                id="outlined-multiline-static"
                label="Descrição"
                multiline
                name="description"
                rows={3}
                onChange={props.handleChange('description')}
                value={values.description}
                variant="outlined"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputAutoComplete
                label={'Responsável'}
                data={users}
                id={'id'}
                value={'name'}
                dispatchAction={updateResponsible}
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputAutoComplete
                label={'Documentos'}
                data={documents}
                id={'id'}
                value={'name'}
                dispatchAction={updateDocuments}
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputAutoComplete
                label={'Casos'}
                data={cases}
                id={'id'}
                value={'name'}
                dispatchAction={updateCases}
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
