import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import { Form } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Container, ButtonContainer } from './styles';
import { createLawSuitRequest } from '../../../store/modules/lawSuit/actions';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
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
      dispatch(createLawSuitRequest(values));
    }
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Grid justify="space-around" container spacing={3}>
          <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="action_type"
                onChange={props.handleChange('action_type')}
                value={values.action_type}
                label="Tipo de ação"
              />
              <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={3} className="checkboxSection">
              <span>Mandado de prisão em aberto?</span>
              <Checkbox
                defaultChecked
                color="primary"
                checked={values.assisted}
                onChange={props.handleChange('open_mandate')}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
          </Grid>

          <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="district"
                onChange={props.handleChange('district')}
                value={values.district}
                label="Comarca"
              />
              <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="law_area"
                onChange={props.handleChange('law_area')}
                value={values.law_area}
                label="Área do direito"
              />
              <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="latest_moves"
                onChange={props.handleChange('latest_moves')}
                value={values.latest_moves}
                label="Últimas movimentações"
              />
              <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={3} className="checkboxSection">
              <span>Possui advogado/defensor constituído nos autos?</span>
              <Checkbox
                defaultChecked
                color="primary"
                checked={values.assisted}
                onChange={props.handleChange('has_lawyer')}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
          </Grid>

          <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="lawyer_name"
                onChange={props.handleChange('lawyer_name')}
                value={values.lawyer_name}
                label="Nome advogado/defensor"
              />
              <FormHelperText>{}</FormHelperText>
          </Grid>
          
          <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="lawyer_contact"
                onChange={props.handleChange('lawyer_contact')}
                value={values.lawyer_contact}
                label="Contato advogado/defensor"
              />
              <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={3} className="checkboxSection">
              <span>Acompanhado pela DAJ?</span>
              <Checkbox
                defaultChecked
                color="primary"
                checked={values.assisted}
                onChange={props.handleChange('followed_by_daj')}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
          </Grid>

          <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="minhadaj_number"
                onChange={props.handleChange('minhadaj_number')}
                value={values.minhadaj_number}
                label="Número MinhaDAJ"
              />
              <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="start_date"
                onChange={props.handleChange('start_date')}
                value={values.start_date}
                label="Data início [PI/recebimento da denúncia]"
              />
              <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="transit_date"
                onChange={props.handleChange('transit_date')}
                value={values.transit_date}
                label="Data trânsito em julgado"
              />
              <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={4}>
              <TextField
                variant="outlined"
                size="small"
                name="related_people"
                onChange={props.handleChange('related_people')}
                value={values.related_people}
                label="Pessoas relacionadas"
              />
              <FormHelperText>{}</FormHelperText>
          </Grid>


          <Grid item xs={4}>
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
