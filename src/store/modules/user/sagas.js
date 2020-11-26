import history from '../../../services/history';
import api from '../../../services/api';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { createUserSuccess } from './actions';
import { editUserSuccess } from './actions';
import { withRouter } from 'react-router-dom';

export function* createUserRequest({ payload }) {
  console.log('teste');
  try {
    const {
      bond_type,
      city_address,
      cnh,
      course,
      cpf,
      date_fired,
      date_joined,
      department,
      email,
      is_active,
      name,
      on_duty,
      phone,
      registration,
      rg,
      scholarship,
      scholarship_type,
      university,
      password,
      id,
    } = payload.values;

    const response = yield call(api.post, 'auth/users/', {
      bond_type,
      city_address,
      cnh,
      course,
      cpf,
      date_fired,
      date_joined,
      department,
      email,
      is_active,
      name,
      on_duty,
      phone,
      registration,
      rg,
      scholarship,
      scholarship_type,
      university,
      id,
      password,
    });

    console.log(response);

    const { user } = response.data;

    yield put(createUserSuccess(user));
    toast.error('Usuário criado com sucesso.');
    history.push('/usuarios');
    setTimeout(function () {
      window.location.reload(false);
    }, 2500);
    // Ajust it //
    //window.location.reload(false);
  } catch (err) {
    toast.error('Falha na Criação, verifique os dados.');
  }
}

export function* editUserRequest({ payload }) {
  try {
    const {
      bond_type,
      cnh,
      course,
      cpf,
      date_fired,
      date_joined,
      department,
      email,
      is_active,
      name,
      on_duty,
      phone,
      registration,
      rg,
      scholarship,
      scholarship_type,
      university,
      id,
      address,
    } = payload.userSelected;

    const response = yield call(api.put, `accounts/${id}/`, {
      bond_type,
      cnh,
      course,
      cpf,
      date_fired,
      date_joined,
      department,
      email,
      is_active,
      name,
      on_duty,
      phone,
      registration,
      rg,
      scholarship,
      scholarship_type,
      university,
      address,
      id,
    });

    const user = response.data;
    yield put(editUserSuccess(user));

    /*
    const authenticatedUser = useSelector((state) => state.auth.user);
    console.log(authenticatedUser);

    history.push('/dashboard');

    /*if (user.id === authenticatedUser.id) {
      yield put(saveAuthenticatedUser(authenticatedUser));
    }*/
    toast.error('Usuário editado com sucesso.');
    history.push('/usuarios');
    setTimeout(function () {
      window.location.reload(false);
    }, 2500);
  } catch (err) {
    console.log(err);
    toast.error('Falha na edição, verifique seus dados.');
  }
}

export function* deleteUser({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `accounts/${id}/`);

    toast.error(`Usuário deletado(a) com sucesso`);

    history.push('/usuarios');
    setTimeout(function () {
      window.location.reload(false);
    }, 2500);
  } catch (err) {
    console.log(err);
    toast.error('Falha ao deletar usuário, verifique seus dados.');
  }
}

export default all([
  takeLatest('@user/CREATE_USER_REQUEST', createUserRequest),
  takeLatest('@user/EDIT_USER_REQUEST', editUserRequest),
  takeLatest('@user/DELETE_USER', deleteUser),
]);
