import React from 'react';
import history from '../../../services/history';
import api from '../../../services/api';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { createDocumentSuccess } from './actions';
import { editDocumentSuccess } from './actions';

export function* createDocumentRequest({ payload }) {
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

    const response = yield call(api.post, 'documents/', {
      type,
      date,
      prepared_by,
      recipients,
      axis,
      link,
      tasks,
    });

    console.log(response);

    const { aDocument } = response.data;

    yield put(createDocumentSuccess(aDocument));
    console.log('History:');
    toast.error('Documento criado com sucesso.');
  } catch (err) {
    toast.error('Falha na Criação, verifique os dados.');
  }
}

export function* editDocumentRequest({ payload }) {
  console.log(payload);
  try {
    const {
      type,
      date,
      prepared_by,
      recipients,
      axis,
      link,
      tasks,
      id,
    } = payload.documentSelected;

    const response = yield call(api.put, `documents/${id}/`, {
      type,
      date,
      prepared_by,
      recipients,
      axis,
      link,
      tasks,
      id,
    });

    const aDocument = response.data;
    yield put(editDocumentSuccess(aDocument));

    toast.error('Documento editado com sucesso.');
  } catch (err) {
    console.log(err);
    toast.error('Falha na edição, verifique seus dados.');
  }
}

export function* deleteDocument({ payload }, props) {
  try {
    yield call(api.delete, `documents/${payload.id}/`);
    /*setTimeout(function () {
      window.location.reload(true);
    }, 1500);
    */
    toast.error(`Documento ${payload.id} deletado(a) com sucesso`);
  } catch (err) {
    console.log(err);
    toast.error('Falha ao deletar documento, verifique seus dados.');
  }
}

export default all([
  takeLatest('@document/CREATE_DOCUMENT_REQUEST', createDocumentRequest),
  takeLatest('@document/EDIT_DOCUMENT_REQUEST', editDocumentRequest),
  takeLatest('@document/DELETE_DOCUMENT', deleteDocument),
]);
