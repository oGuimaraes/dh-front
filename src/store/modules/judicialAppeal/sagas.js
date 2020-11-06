import React from 'react';
import history from '../../../services/history';
import api from '../../../services/api';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { createJudicialAppealSuccess } from './actions';
import { editJudicialAppealSuccess } from './actions';

export function* createJudicialAppealRequest({ payload }) {
  try {
    const {
      type,
      date,
      prepared_by,
      recipients,
      axis,
      link,
      tasks,
    } = payload.values;

    const response = yield call(api.post, 'judicial_appeals/', {
      type,
      date,
      prepared_by,
      recipients,
      axis,
      link,
      tasks,
    });

    console.log(response);

    const { aJudicialAppeal } = response.data;

    yield put(createJudicialAppealSuccess(aJudicialAppeal));
    console.log('History:');
    toast.error('Recurso criado com sucesso.');
  } catch (err) {
    toast.error('Falha na Criação, verifique os dados.');
  }
}

export function* editJudicialAppealRequest({ payload }) {
  console.log(payload);
  try {
    const {
      type,
      judicial_appeal_number,
      plenary,
      report,
      resume,
      law_suit,
      id,
    } = payload.judicialAppealSelected;

    const response = yield call(api.put, `judicial_appeals/${id}/`, {
      type,
      judicial_appeal_number,
      plenary,
      report,
      resume,
      law_suit,
      id,
    });

    const aJudicialAppeal = response.data;
    yield put(editJudicialAppealSuccess(aJudicialAppeal));

    toast.error('Recurso editado com sucesso.');
  } catch (err) {
    console.log(err);
    toast.error('Falha na edição, verifique seus dados.');
  }
}

export function* deleteJudicialAppeal({ payload }, props) {
  try {
    yield call(api.delete, `judicial_appeals/${payload.id}/`);
    /*setTimeout(function () {
      window.location.reload(true);
    }, 1500);
    */
    toast.error(`Recurso ${payload.id} deletado(a) com sucesso`);
  } catch (err) {
    console.log(err);
    toast.error('Falha ao deletar recurso, verifique seus dados.');
  }
}

export default all([
  takeLatest('@judicialAppeal/CREATE_JUDICIALAPPEAL_REQUEST', createJudicialAppealRequest),
  takeLatest('@judicialAppeal/EDIT_JUDICIALAPPEAL_REQUEST', editJudicialAppealRequest),
  takeLatest('@judicialAppeal/DELETE_JUDICIALAPPEAL', deleteJudicialAppeal),
]);
