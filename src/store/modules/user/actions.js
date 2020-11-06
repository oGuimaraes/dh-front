export function createUserRequest(values) {
  return {
    type: '@user/CREATE_USER_REQUEST',
    payload: { values },
  };
}

export function createUserSuccess(user) {
  return {
    type: '@user/CREATE_USER_SUCCESS',
    payload: { user },
  };
}

export function selectUser(userSelected) {
  return {
    type: '@user/USER_SELECTED',
    payload: { userSelected },
  };
}

export function editUserRequest(userSelected) {
  return {
    type: '@user/EDIT_USER_REQUEST',
    payload: { userSelected },
  };
}

export function editUserSuccess(userSelected) {
  return {
    type: '@user/EDIT_USER_SUCCESS',
    payload: { userSelected },
  };
}

export function deleteUser(id) {
  return {
    type: '@user/DELETE_USER',
    payload: { id },
  };
}
