import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  viewMode: false,
  newUser: null,
  mode: 'table',
  userSelected: {
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
    date_joined: '2020-10-01',
    date_fired: '',
    is_active: '',
    scholarship: '',
    scholarship_type: '',
  },
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@user/CHANGE_VIEW_REGISTER': {
        draft.viewMode = !draft.viewMode;
        break;
      }
      case '@user/CREATE_USER_REQUEST': {
        draft.newUser = action.payload.values;
        break;
      }
      case '@user/CREATE_USER_SUCCESS': {
        draft.viewMode = !draft.viewMode;
        break;
      }
      case '@user/CHANGE_MODE_TABLE': {
        draft.mode = 'table';
        break;
      }
      case '@user/CHANGE_MODE_VIEW': {
        draft.mode = 'view';
        break;
      }
      case '@user/CHANGE_MODE_FORM': {
        draft.mode = 'form';
        break;
      }
      case '@user/USER_SELECTED': {
        draft.userSelected = action.payload.userSelected;
        break;
      }
      case '@user/EDIT_USER_REQUEST': {
        draft.userSelected = action.payload.userSelected;
        draft.mode = 'view';
        break;
      }
      case '@user/EDIT_USER_SUCCESS': {
        draft.userSelected = action.payload.userSelected;
        draft.mode = 'view';
        break;
      }
      case '@user/DELETE_USER': {
        draft.mode = 'table';
        break;
      }
      default:
        return state;
    }
  });
}
