import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  user: {
    name: '',
    email: '',
    bond_type: '',
    phone: '',
    registration: '',
    address: '',
    course: '',
    university: '',
    department: '',
    rg: '',
    cpf: '',
    cnh: '',
    date_joined: '',
    date_fired: '',
    is_active: '',
    scholarship: '',
    scholarship_type: '',
    is_superuser: '',
  },
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SAVE_AUTHENTICATED_USER': {
        draft.user = action.payload.user;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }
      case '@auth/SIGN_OUT_SUCCESS': {
        draft.user = {
          name: '',
          email: '',
          bond_type: '',
          phone: '',
          registration: '',
          address: '',
          course: '',
          university: '',
          department: '',
          rg: '',
          cpf: '',
          cnh: '',
          date_joined: '',
          date_fired: '',
          is_active: '',
          scholarship: '',
          scholarship_type: '',
        };
        break;
      }
      default:
        return;
    }
  });
}
