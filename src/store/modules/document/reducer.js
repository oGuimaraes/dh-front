import produce from 'immer';

const INITIAL_STATE = {
  newDocument: null,
  documentSelected: {
    document_number: null,
    type: null,
    date: null,
    prepared_by: '',
    recipients: '',
    axis: '',
    link: '',
    tasks: '',
  },
};

export default function documents(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@document/CREATE_DOCUMENT_REQUEST': {
        draft.newDocument = action.payload.values;
        break;
      }
      case '@document/CREATE_DOCUMENT_SUCCESS': {
        draft.viewMode = !draft.viewMode;
        break;
      }
      case '@document/DOCUMENT_SELECTED': {
        draft.documentSelected = action.payload.documentSelected;
        break;
      }
      case '@document/EDIT_DOCUMENT_REQUEST': {
        draft.documentSelected = action.payload.documentSelected;
        break;
      }
      case '@document/EDIT_DOCUMENT_SUCCESS': {
        draft.documentSelected = action.payload.documentSelected;
        break;
      }
      case '@document/DELETE_DOCUMENT': {
        break;
      }
      default:
        return state;
    }
  });
}
