import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';

import { signInSuccess, signFailure, saveAuthenticatedUser } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'auth/login/', {
      email,
      password,
    });

    const { token } = response.data;

    api.defaults.headers.Authorization = `JWT ${token}`;

    const responseUser = yield call(api.get, 'auth/users/me/');
    let authenticatedUser = responseUser.data;

    if (responseUser.address) {
      const addressUser = yield call(
        api.get,
        `address/${authenticatedUser.address}`
      );
      authenticatedUser['address'] = addressUser.data;
    }

    yield put(signInSuccess(token));
    yield put(saveAuthenticatedUser(authenticatedUser));

    history.push('/dashboard');

    // Ajust it //
    window.location.reload(false);
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados.');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('');
  //window.location.reload(false);
}
export function signOutSuccess() {
  setTimeout(function () {
    window.location.reload(true);
  }, 1000);
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/SIGN_OUT_SUCCESS', signOutSuccess),
]);
