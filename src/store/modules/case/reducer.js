import produce from 'immer';

const INITIAL_STATE = {
  caseSelected: {
    case_number: null,
    related_areas: null,
    reference_contacts: '',
    daj_number: '',
    daj_advisor: '',
    daj_intern: '',
    report: '',
    registration_date: null,
    solution_date: null,
    documents: '',
    tasks: '',
    law_suits: '',
    entities: '',
    intern: '',
    advisor: '',
    assted_person: '',
    axis: '',
  },
  newCase: {
    advisors: [],
    interns: [],
  },
};

export default function cases(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@case/CREATE_CASE_REQUEST': {
        draft.newCase = action.payload.values;
        break;
      }
      case '@case/CREATE_CASE_SUCCESS': {
        draft.viewMode = !draft.viewMode;
        break;
      }
      case '@case/CASE_SELECTED': {
        draft.caseSelected = action.payload.caseSelected;
        break;
      }
      case '@case/EDIT_CASE_REQUEST': {
        draft.caseSelected = action.payload.caseSelected;
        break;
      }
      case '@case/EDIT_CASE_SUCCESS': {
        draft.caseSelected = action.payload.caseSelected;
        break;
      }
      case '@case/EDIT_CASE_SUCCESS': {
        draft.caseSelected = action.payload.caseSelected;
        break;
      }
      case '@case/UPDATE_ADVISORS': {
        draft.newCase.advisors = action.payload.advisors;
        break;
      }
      case '@case/UPDATE_INTERNS': {
        draft.newCase.interns = action.payload.interns;
        break;
      }
      case '@case/UPDATE_ASSISTED_PERSON': {
        draft.newCase.assistedPerson = action.payload.assistedPerson;
        break;
      }
      case '@case/DELETE_CASE': {
        break;
      }
      default:
        return state;
    }
  });
}
