import React from 'react';
import history from '../../../services/history';
import api from '../../../services/api';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { createLawSuitSuccess } from './actions';
import { editLawSuitSuccess } from './actions';

export function* createLawSuitRequest({ payload }) {
  try {
    const {
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
    } = payload.values;

    const response = yield call(api.post, 'law_suits/', {
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

    console.log(response);

    const { aLawSuit } = response.data;

    yield put(createLawSuitSuccess(aLawSuit));
    console.log('History:');
    toast.error('Recurso criado com sucesso.');
  } catch (err) {
    toast.error('Falha na Criação, verifique os dados.');
  }
}

export function* editLawSuitRequest({ payload }) {
  console.log(payload);
  try {
    const {
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
      id,
    } = payload.lawSuitSelected;

    const response = yield call(api.put, `law_suits/${id}/`, {
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
      id,
    });

    const aLawSuit = response.data;
    yield put(editLawSuitSuccess(aLawSuit));

    toast.error('Recurso editado com sucesso.');
  } catch (err) {
    console.log(err);
    toast.error('Falha na edição, verifique seus dados.');
  }
}

export function* deleteLawSuit({ payload }, props) {
  try {
    yield call(api.delete, `law_suits/${payload.id}/`);
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
  takeLatest('@lawSuit/CREATE_LAWSUIT_REQUEST', createLawSuitRequest),
  takeLatest('@lawSuit/EDIT_LAWSUIT_REQUEST', editLawSuitRequest),
  takeLatest('@lawSuit/DELETE_LAWSUIT', deleteLawSuit),
]);
