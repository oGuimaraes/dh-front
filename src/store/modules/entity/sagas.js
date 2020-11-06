import React from 'react';
import history from '../../../services/history';
import api from '../../../services/api';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { createEntitySuccess } from './actions';
import { editEntitySuccess } from './actions';

export function* createEntityRequest({ payload }) {
  try {
    const {
      name,
      address,
      entity_liked,
      description,
      contact,
      reference_person,
      reference_person_contact,
      comments,
      people,
      axis,
      cases,
    } = payload.values;

    const response = yield call(api.post, 'entities/', {
      name,
      address,
      entity_liked,
      description,
      contact,
      reference_person,
      reference_person_contact,
      comments,
      people,
      axis,
      cases,
    });

    console.log(response);

    const { aEntity } = response.data;

    yield put(createEntitySuccess(aEntity));
    console.log('History:');
    toast.error('Entidade criada com sucesso.');
  } catch (err) {
    toast.error('Falha na Criação, verifique os dados.');
  }
}

export function* editEntityRequest({ payload }) {
  console.log(payload);
  try {
    const {
      name,
      address,
      entity_liked,
      description,
      contact,
      reference_person,
      reference_person_contact,
      comments,
      people,
      axis,
      cases,
      id,
    } = payload.entitySelected;

    const response = yield call(api.put, `entities/${id}/`, {
      name,
      address,
      entity_liked,
      description,
      contact,
      reference_person,
      reference_person_contact,
      comments,
      people,
      axis,
      cases,
      id,
    });

    const aEntity = response.data;
    yield put(editEntitySuccess(aEntity));

    toast.error('Entidade editado com sucesso.');
  } catch (err) {
    console.log(err);
    toast.error('Falha na edição, verifique seus dados.');
  }
}

export function* deleteEntity({ payload }, props) {
  try {
    yield call(api.delete, `entities/${payload.id}/`);
    /*setTimeout(function () {
      window.location.reload(true);
    }, 1500);
    */
    toast.error(`Entidade ${payload.id} deletado(a) com sucesso`);
  } catch (err) {
    console.log(err);
    toast.error('Falha ao deletar entidade, verifique seus dados.');
  }
}

export default all([
  takeLatest('@entity/CREATE_ENTITY_REQUEST', createEntityRequest),
  takeLatest('@entity/EDIT_ENTITY_REQUEST', editEntityRequest),
  takeLatest('@entity/DELETE_ENTITY', deleteEntity),
]);
