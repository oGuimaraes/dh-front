export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function saveAuthenticatedUser(user) {
  return {
    type: '@auth/SAVE_AUTHENTICATED_USER',
    payload: { user },
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function signOutSuccess() {
  return {
    type: '@auth/SIGN_OUT_SUCCESS',
  };
}
