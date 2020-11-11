import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Container from '../../../components/Container';
import { ButtonContainer } from '../form/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '../../../components/Button/ButtonDefault';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import {
  editLawSuitRequest,
  deleteLawSuit,
} from '../../../store/modules/lawSuit/actions';
import Dialog from '../../../components/Dialog';
import { withRouter } from 'react-router-dom';

function ViewLawSuit(props) {
  console.log(props);
  const aLawSuit = useSelector((state) => state.lawSuits.lawSuitSelected);
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = useState(true);
  const {
    id,
    law_suit_number,
    action_type,
    open_mandate,
    district,
    law_area,
    latest_moves,
    has_lawyer,
    lawyer_name,
    lawyer_contact,
    followed_by_daj,
    minhadaj_number,
    start_date,
    transit_date,
    related_person,
    cases,
  } = aLawSuit;

  const [state, setState] = useState({
    id,
    law_suit_number,
    action_type,
    open_mandate,
    district,
    law_area,
    latest_moves,
    has_lawyer,
    lawyer_name,
    lawyer_contact,
    followed_by_daj,
    minhadaj_number,
    start_date,
    transit_date,
    related_person,
    cases,
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
      dispatch(editLawSuitRequest(state));
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
          name={`recurso ${state.id}`}
          id={state.id}
          functionDelete={deleteLawSuit}
          history={props.history}
          url="/recursos"
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
              name="action_type"
              disabled={isDisabled}
              onChange={handleChange('action_type')}
              value={state.action_type}
              label="Tipo de ação"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          {/* <Grid item xs={3} className="checkboxSection">
              <span>Mandado de prisão em aberto?</span>
              <Checkbox
                defaultChecked
                color="primary"
                checked={values.assisted}
                onChange={props.handleChange('open_mandate')}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
          </Grid> */}

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="prepared_by"
              disabled={isDisabled}
              onChange={handleChange('prepared_by')}
              value={state.prepared_by}
              label="Elaborado por"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="district"
              disabled={isDisabled}
              onChange={handleChange('district')}
              value={state.district}
              label="Comarca"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="law_area"
              disabled={isDisabled}
              onChange={handleChange('law_area')}
              value={state.law_area}
              label="Área do direito"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="latest_moves"
              disabled={isDisabled}
              onChange={handleChange('latest_moves')}
              value={state.latest_moves}
              label="Últimas movimentações"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          {/* <Grid item xs={3} className="checkboxSection">
              <span>Possui advogado/defensor constituído nos autos?</span>
              <Checkbox
                defaultChecked
                color="primary"
                checked={values.assisted}
                onChange={props.handleChange('has_lawyer')}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
          </Grid> */}

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="lawyer_name"
              disabled={isDisabled}
              onChange={handleChange('lawyer_name')}
              value={state.lawyer_name}
              label="Nome advogado/defensor"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="lawyer_contact"
              disabled={isDisabled}
              onChange={handleChange('lawyer_contact')}
              value={state.lawyer_contact}
              label="Contato advogado/defenso"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          {/* <Grid item xs={3} className="checkboxSection">
              <span>Acompanhado pela DAJ?</span>
              <Checkbox
                defaultChecked
                color="primary"
                checked={values.assisted}
                onChange={props.handleChange('followed_by_daj')}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
          </Grid> */}

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="minhadaj_number"
              disabled={isDisabled}
              onChange={handleChange('minhadaj_number')}
              value={state.minhadaj_number}
              label="Número MinhaDAJ"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="start_date"
              disabled={isDisabled}
              onChange={handleChange('start_date')}
              value={state.start_date}
              label="Data início [PI/recebimento da denúncia]"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="transit_date"
              disabled={isDisabled}
              onChange={handleChange('transit_date')}
              value={state.transit_date}
              label="Data trânsito em julgado"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="related_person"
              disabled={isDisabled}
              onChange={handleChange('related_person')}
              value={state.related_person}
              label="Pessoas relacionadas (MtM to tipo bloquinho)"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="cases"
              disabled={isDisabled}
              onChange={handleChange('cases')}
              value={state.cases}
              label="Casos relacionados (MtM to tipo tabela)"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default withRouter(ViewLawSuit);
