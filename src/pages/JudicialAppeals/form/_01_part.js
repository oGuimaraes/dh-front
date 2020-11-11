import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import { Form } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Container, ButtonContainer } from './styles';
import { createJudicialAppealRequest } from '../../../store/modules/judicialAppeal/actions';
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
      dispatch(createJudicialAppealRequest(values));
    }
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Grid justify="space-around" container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                variant="outlined"
                size="small"
                name="type"
                onChange={props.handleChange('type')}
                value={values.type}
                label="Tipo"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                variant="outlined"
                size="small"
                name="judicial_appeal_number"
                onChange={props.handleChange('judicial_appeal_number')}
                value={values.judicial_appeal_number}
                label="Número do Recurso"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                variant="outlined"
                size="small"
                name="plenary"
                onChange={props.handleChange('plenary')}
                value={values.plenary}
                label="Câmara/Turma/Plenário"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={6} className="centerGrid">
              <TextField
                variant="outlined"
                size="small"
                name="report"
                onChange={props.handleChange('report')}
                value={values.report}
                label="Relatoria"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <TextField
                variant="outlined"
                size="small"
                name="law_suit"
                onChange={props.handleChange('law_suit')}
                value={values.law_suit}
                label="Processo relacionado"
              />
              <FormHelperText>{}</FormHelperText>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                size="small"
                name="resume"
                multiline
                rows={3}
                onChange={props.handleChange('resume')}
                value={values.resume}
                label="Resumo"
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
