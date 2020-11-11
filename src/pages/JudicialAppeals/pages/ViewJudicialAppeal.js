import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Container from '../../../components/Container';
import { ButtonContainer } from '../form/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '../../../components/Button/ButtonDefault';
import { useDispatch } from 'react-redux';
import {
  editJudicialAppealRequest,
  deleteJudicialAppeal,
} from '../../../store/modules/judicialAppeal/actions';
import Dialog from '../../../components/Dialog';
import { withRouter } from 'react-router-dom';

function ViewJudicialAppeal(props) {
  console.log(props);
  const aJudicialAppeal = useSelector(
    (state) => state.judicialAppeals.judicialAppealSelected
  );
  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = useState(true);
  const {
    id,
    type,
    judicial_appeal_number,
    plenary,
    report,
    resume,
    law_suit,
  } = aJudicialAppeal;

  const [state, setState] = useState({
    id,
    type,
    judicial_appeal_number,
    plenary,
    report,
    resume,
    law_suit,
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
      dispatch(editJudicialAppealRequest(state));
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
          functionDelete={deleteJudicialAppeal}
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
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="type"
              disabled={isDisabled}
              onChange={handleChange('type')}
              value={state.type}
              label="Tipo de Recurso"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="judicial_appeal_number"
              disabled={isDisabled}
              onChange={handleChange('judicial_appeal_number')}
              value={state.judicial_appeal_number}
              label="Número do Recurso"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              size="small"
              name="plenary"
              disabled={isDisabled}
              onChange={handleChange('plenary')}
              value={state.plenary}
              label="Câmara/Turma/Plenário"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              size="small"
              name="report"
              disabled={isDisabled}
              onChange={handleChange('report')}
              value={state.report}
              label="Relatoria"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <TextField
              variant="outlined"
              size="small"
              name="law_suit"
              disabled={isDisabled}
              onChange={handleChange('law_suit')}
              value={state.law_suit}
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
              disabled={isDisabled}
              onChange={handleChange('resume')}
              value={state.resume}
              label="Resumo"
            />
            <FormHelperText>{}</FormHelperText>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default withRouter(ViewJudicialAppeal);
