import React from 'react';
import history from '../../../services/history';
import api from '../../../services/api';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { createCaseSuccess } from './actions';
import { editCaseSuccess } from './actions';

export function* createCaseRequest({ payload }) {
  try {
    const {
      related_areas,
      reference_contacts,
      daj_number,
      daj_advisor,
      daj_intern,
      report,
      registration_date,
      solution_date,
      documents,
      tasks,
      law_suits,
      entities,
      intern,
      advisor,
      assited_person,
      axes,
    } = payload.values;

    const response = yield call(api.post, 'cases/', {
      related_areas,
      reference_contacts,
      daj_number,
      daj_advisor,
      daj_intern,
      report,
      registration_date,
      solution_date,
      documents,
      tasks,
      law_suits,
      entities,
      intern,
      advisor,
      assited_person,
      axes,
    });

    console.log(response);

    const { aCase } = response.data;

    yield put(createCaseSuccess(aCase));
    toast.error('Caso criado com sucesso.');
    setTimeout(function () {
      window.location.reload(false);
    }, 2500);
  } catch (err) {
    toast.error('Falha na Criação, verifique os dados.');
  }
}

export function* editCaseRequest({ payload }) {
  console.log(payload);
  try {
    const {
      related_areas,
      reference_contacts,
      daj_number,
      daj_advisor,
      daj_intern,
      report,
      registration_date,
      solution_date,
      documents,
      tasks,
      law_suits,
      entities,
      intern,
      advisor,
      assisted_person,
      axis,
      id,
    } = payload.caseSelected;

    const response = yield call(api.put, `cases/${id}/`, {
      related_areas,
      reference_contacts,
      daj_number,
      daj_advisor,
      daj_intern,
      report,
      registration_date,
      solution_date,
      documents,
      tasks,
      law_suits,
      entities,
      intern,
      advisor,
      assisted_person,
      axis,
      id,
    });

    const aCase = response.data;
    yield put(editCaseSuccess(aCase));

    toast.error('Caso editado com sucesso.');
    setTimeout(function () {
      window.location.reload(false);
    }, 2500);
  } catch (err) {
    console.log(err);
    toast.error('Falha na edição, verifique seus dados.');
  }
}

export function* deleteCase({ payload }, props) {
  try {
    yield call(api.delete, `cases/${payload.id}/`);
    setTimeout(function () {
      window.location.reload(true);
    }, 2500);

    toast.error(`Caso ${payload.id} deletado(a) com sucesso`);
  } catch (err) {
    console.log(err);
    toast.error('Falha ao deletar caso, verifique seus dados.');
  }
}

export default all([
  takeLatest('@case/CREATE_CASE_REQUEST', createCaseRequest),
  takeLatest('@case/EDIT_CASE_REQUEST', editCaseRequest),
  takeLatest('@case/DELETE_CASE', deleteCase),
]);
