import produce from 'immer';

const INITIAL_STATE = {
  newPerson: null,
  personSelected: {},
};

export default function people(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@people/CREATE_PERSON_REQUEST': {
        draft.newCase = action.payload.values;
        break;
      }
      case '@people/CREATE_PERSON_REQUEST': {
        break;
      }
      case '@people/PERSON_SELECTED': {
        draft.caseSelected = action.payload.caseSelected;
        break;
      }
      case '@people/EDIT_PERSON_REQUEST': {
        draft.caseSelected = action.payload.caseSelected;
        break;
      }
      case '@people/EDIT_PERSON_SUCCESS': {
        draft.caseSelected = action.payload.caseSelected;
        break;
      }
      case '@people/DELETE_PERSON': {
        break;
      }
      default:
        return state;
    }
  });
}
