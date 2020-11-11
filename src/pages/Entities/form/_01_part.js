import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import { Form } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Container, ButtonContainer } from './styles';
import { createEntityRequest } from '../../../store/modules/entity/actions';
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
      dispatch(createEntityRequest(values));
    }
  };
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Grid justify="space-around" container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                size="small"
                name="name"
                onChange={props.handleChange('name')}
                value={values.name}
                label="Nome"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                size="small"
                name="address"
                onChange={props.handleChange('address')}
                value={values.address}
                label="Endereço"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                size="small"
                name="entity_liked"
                onChange={props.handleChange('entity_liked')}
                value={values.entity_liked}
                label="Ente Administrativo a que se vincula"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6} className="centerGrid">
              <TextField
                variant="outlined"
                size="small"
                name="description"
                onChange={props.handleChange('description')}
                value={values.description}
                label="Descrição da atuação"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                variant="outlined"
                size="small"
                name="contact"
                onChange={props.handleChange('contact')}
                value={values.contact}
                label="Telefone ou Email Institucional"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                variant="outlined"
                size="small"
                name="reference_person"
                onChange={props.handleChange('reference_person')}
                value={values.reference_person}
                label="Pessoa de referência"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                variant="outlined"
                size="small"
                name="reference_person_contact"
                onChange={props.handleChange('reference_person_contact')}
                value={values.reference_person_contact}
                label="Contato da pessoa de referência"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                variant="outlined"
                size="small"
                name="comments"
                onChange={props.handleChange('comments')}
                value={values.comments}
                label="Observação"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                variant="outlined"
                size="small"
                name="people"
                onChange={props.handleChange('people')}
                value={values.peoplo}
                label="Pessoas relacionadas"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                variant="outlined"
                size="small"
                name="cases"
                onChange={props.handleChange('cases')}
                value={values.cases}
                label="Casos relacionados"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                variant="outlined"
                size="small"
                name="axis"
                onChange={props.handleChange('axis')}
                value={values.axis}
                label="Eixos relacionados"
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
