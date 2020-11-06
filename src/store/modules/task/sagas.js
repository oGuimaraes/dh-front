import React from 'react';
import history from '../../../services/history';
import api from '../../../services/api';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { createTaskSuccess, editTaskSuccess, emmitPublish } from './actions';

export function* createTaskRequest({ payload }) {
  try {
    const {
      title,
      deadline,
      description,
      responsible,
      document_task,
      case_tasks,
    } = payload.values;

    const response = yield call(api.post, 'tasks/', {
      title,
      deadline,
      description,
      responsible,
      document_task,
      case_tasks,
    });

    console.log(response);

    const { aTask, id } = response.data;

    yield put(createTaskSuccess(aTask));
    yield put(emmitPublish(id));

    toast.error('Tarefa criado com sucesso.');
  } catch (err) {
    console.log(err);
    toast.error('Falha na Criação, verifique os dados.');
  }
}

export function* editTaskRequest({ payload }) {
  console.log(payload);
  try {
    const {
      title,
      deadline,
      description,
      responsible,
      document_task,
      case_tasks,
      id,
    } = payload.taskSelected;

    const response = yield call(api.put, `tasks/${id}/`, {
      title,
      deadline,
      description,
      responsible,
      document_task,
      case_tasks,
      id,
    });

    const aTask = response.data;
    yield put(editTaskSuccess(aTask));

    toast.error('Tarefa editado com sucesso.');
  } catch (err) {
    console.log(err);
    toast.error('Falha na edição, verifique seus dados.');
  }
}

export function* deleteTask({ payload }, props) {
  try {
    yield call(api.delete, `tasks/${payload.id}/`);
    /*setTimeout(function () {
      window.location.reload(true);
    }, 1500);
    */
    toast.error(`Tarefa ${payload.id} deletado(a) com sucesso`);
  } catch (err) {
    console.log(err);
    toast.error('Falha ao deletar tarefa, verifique seus dados.');
  }
}

export function* emmitPublishSaga(value) {
  const { taskID } = value.payload;
  try {
    yield call(api.get, `tasks/${taskID}/publish/`);
  } catch (err) {
    console.log(err);
    toast.error('Error');
  }
}

export default all([
  takeLatest('@task/CREATE_TASK_REQUEST', createTaskRequest),
  takeLatest('@task/EDIT_TASK_REQUEST', editTaskRequest),
  takeLatest('@task/DELETE_TASK', deleteTask),
  takeLatest('@task/EMMIT_PUBLISH', emmitPublishSaga),
]);
