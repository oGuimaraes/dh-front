import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import { Form } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Container, ButtonContainer } from './styles';
import { createDocumentRequest } from '../../../store/modules/document/actions';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

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

  const handleSubmit = (e) => {
    const err = validate();
    if (!err) {
      dispatch(createDocumentRequest(values));
      console.log(values);
    }
  };

  const types = [
    { key: 1, value: 'Ofício' },
    { key: 2, value: 'Parecer' },
    { key: 3, value: 'Nota Técnica' },
    { key: 4, value: 'Amicus Curiae' },
    { key: 5, value: 'Documentos de Assistidos' },
    { key: 6, value: 'Petições' },
    { key: 7, value: 'Atas de Reuniões' },
    { key: 8, value: 'Administrativo' },
    { key: 9, value: 'Outros' },
  ];

  /*
  const axes = [
    { id: 1, name: 'DRS' },
    { id: 2, name: 'Transpace' },
  ];
  */

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Grid justify="space-around" container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel id="demo-customized-select-label">
                  Área Relacionada
                </InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={values.type}
                  name="type"
                  onChange={props.handleChange('type')}
                  input={<BootstrapInput />}
                >
                  <MenuItem value="">
                    <em style={{ color: '#a1a1a1' }}>vazio</em>
                  </MenuItem>
                  {types.map((type) => (
                    <MenuItem value={type.key}>{type.value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                size="small"
                name="date"
                onChange={props.handleChange('date')}
                value={values.date}
                label="Data [produção/recebimento/envio/protocolo]"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                size="small"
                name="prepared_by"
                onChange={props.handleChange('prepared_by')}
                value={values.prepared_by}
                label="Elaborado por"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                size="small"
                name="recipients"
                onChange={props.handleChange('recipients')}
                value={values.recipients}
                label="Destinatários"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel id="demo-customized-select-label">Eixo</InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={values.axis}
                  name="axis"
                  onChange={props.handleChange('axis')}
                  input={<BootstrapInput />}
                >
                  <MenuItem value="">
                    <em style={{ color: '#a1a1a1' }}>vazio</em>
                  </MenuItem>
                  {/*
                  {axes.map((axis) => (
                    <MenuItem value={axis.id}>{axis.name}</MenuItem>
                  ))}
                  */}
                  <MenuItem value="1">DRS</MenuItem>
                  <MenuItem value="2">Transpasse</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} className="centerGrid">
              <TextField
                variant="outlined"
                size="small"
                name="link"
                onChange={props.handleChange('link')}
                value={values.link}
                label="Link"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
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
