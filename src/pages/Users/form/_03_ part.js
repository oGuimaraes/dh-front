import React from 'react';
import { Form } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { createUserRequest } from '../../../store/modules/user/actions';
import { ButtonContainer } from './styles';

export default function _03_part(props) {
  const dispatch = useDispatch();
  const { values } = props;

  const handleSubmit = (e) => {
    dispatch(createUserRequest(values));
  };

  const back = (e) => {
    props.prevStep();
  };

  const intern_type_choices = [
    { key: 1, value: 'Bolsista' },
    { key: 2, value: 'Voluntário' },
  ];

  return (
    <Form onSubmit={handleSubmit}>
      <Grid justify="space-around" container spacing={3}>
        <Grid item xs={8}>
          <TextField
            variant="outlined"
            size="small"
            name="course"
            label="Curso"
            onChange={props.handleChange('course')}
            defaultValue={values.course}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            variant="outlined"
            size="small"
            name="university"
            label="Universidade"
            onChange={props.handleChange('university')}
            defaultValue={values.university}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            variant="outlined"
            size="small"
            name="department"
            label="Departamento"
            onChange={props.handleChange('department')}
            defaultValue={values.department}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            variant="outlined"
            size="small"
            name="scholarship"
            label="Escolaridade"
            onChange={props.handleChange('scholarship')}
            defaultValue={values.scholarship}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            variant="outlined"
            size="small"
            name="scholarship_type"
            label="Tipo de escolaridade"
            onChange={props.handleChange('scholarship_type')}
            defaultValue={values.scholarship_type}
          />
        </Grid>
      </Grid>
      <ButtonContainer>
        <Grid className="buttonContainer" item xs={12}>
          <button className="buttonDefault" onClick={back}>
            Voltar
          </button>
          <button className="buttonDefault" icon="add" type="submit">
            Cadastrar
          </button>
        </Grid>
      </ButtonContainer>
    </Form>
  );
}
