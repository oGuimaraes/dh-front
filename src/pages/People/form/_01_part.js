import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Form } from '@rocketseat/unform';
import Grid from '@material-ui/core/Grid';
import { Container, ButtonContainer } from './styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';

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

export default function _01_part(props) {
  const { values } = props;

  const [responsibleAdvisorError, setResponsibleAdvisorError] = useState('');
  const [responsibleInternError, setResponsibleInternError] = useState('');
  const [firstAppointmentDateError, setFirstAppointmentDateError] = useState(
    ''
  );
  const [nameError, setNameError] = useState('');
  const [civilStatusError, setCivilStatusError] = useState('');

  const validate = () => {
    let hasError = false;

    if (values.full_name.length === 0) {
      hasError = true;
      setNameError('O nome é obrigatório');
    } else setNameError('');

    if (values.responsible_advisor.length === 0) {
      hasError = true;
      setResponsibleAdvisorError('Orientador(a) responsável é obrigatório');
    } else setResponsibleAdvisorError('');

    if (values.responsible_intern.length === 0) {
      hasError = true;
      setResponsibleInternError('Estagiário(a) responsável é obrigatório');
    } else setResponsibleInternError('');

    if (values.first_appointment_date.length === 0) {
      hasError = true;
      setFirstAppointmentDateError(
        'Data do primeiro atendimento é obrigatório'
      );
    } else setFirstAppointmentDateError('');

    if (values.civil_status.length === 0) {
      hasError = true;
      setCivilStatusError('Estado civil é obrigatório');
    } else setCivilStatusError('');

    return hasError;
  };

  const saveAndContinue = (e) => {
    const err = validate();
    console.log(props);
    if (!err) {
      props.nextStep();
    }
  };

  const civilStatus = [
    { key: 1, value: 'Solteira' },
    { key: 2, value: 'Casada' },
    { key: 3, value: 'Separada' },
    { key: 4, value: 'Divorciada' },
    { key: 5, value: 'Viúva' },
  ];
  return (
    <>
      <Container>
        <Form onSubmit={saveAndContinue}>
          <Grid justify="space-around" container spacing={3}>
            <Grid item xs={3} className="checkboxSection">
              <span>Pessoa Assistida?</span>
              <Checkbox
                defaultChecked
                color="primary"
                checked={values.assisted}
                onChange={props.handleChange('assisted')}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>

            <Grid item xs={5}>
              <TextField
                variant="outlined"
                size="small"
                name="responsible_advisor"
                onChange={props.handleChange('responsible_advisor')}
                value={values.responsible_advisor}
                label="Orientadora Responsável*"
              />
              <FormHelperText>{responsibleAdvisorError}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="responsible_intern"
                onChange={props.handleChange('responsible_intern')}
                value={values.responsible_intern}
                label="Estagiária Responsável*"
              />
              <FormHelperText>{responsibleInternError}</FormHelperText>
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="related_person"
                onChange={props.handleChange('related_person')}
                value={values.related_person}
                label="Pessoa de Referência na DAJ"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="related_case_bond"
                onChange={props.handleChange('related_case_bond')}
                value={values.related_case_bond}
                label="Nº do Caso Minha DAJ"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="first_appointment_date"
                onChange={props.handleChange('first_appointment_date')}
                value={values.first_appointment_date}
                label="Data do primeiro atendimento"
              />
              <FormHelperText>{firstAppointmentDateError}</FormHelperText>
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="full_name"
                onChange={props.handleChange('full_name')}
                value={values.full_name}
                label="Nome Completo"
              />
              <FormHelperText>{nameError}</FormHelperText>
            </Grid>

            <Grid item xs={6}>
              <TextField
                variant="outlined"
                size="small"
                name="civil_registry"
                onChange={props.handleChange('civil_registry')}
                value={values.civil_registry}
                label="Registro Civil"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={6}>
              <FormControl>
                <InputLabel id="demo-customized-select-label">
                  Estado Civil*
                </InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={values.civil_status}
                  name="related_areas"
                  onChange={props.handleChange('civil_status')}
                  input={<BootstrapInput />}
                >
                  {civilStatus.map((area) => (
                    <MenuItem value={area.key}>{area.value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormHelperText>{civilStatusError}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="rg"
                onChange={props.handleChange('rg')}
                value={values.rg}
                label="Nº RG"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="cpf"
                onChange={props.handleChange('cpf')}
                value={values.cpf}
                label="Nº CPF"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="cnh"
                onChange={props.handleChange('civil_registry')}
                value={values.civil_registry}
                label="Nº CNH"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <ButtonContainer>
              <Grid className="buttonContainer" item xs={12}>
                <button className="buttonDefault" icon="right" type="submit">
                  Próximo
                </button>
              </Grid>
            </ButtonContainer>
          </Grid>
        </Form>
      </Container>
    </>
  );
}
