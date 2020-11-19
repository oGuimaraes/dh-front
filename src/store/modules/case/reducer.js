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
    documents: [],
    tasks: [],
    law_suits: [],
    entities: [],
    intern: [],
    advisor: [],
    assisted_person: [],
    axis: [],
  },
  newCase: {
    advisors: [],
    intern: [],
    axes: [],
    assistedPerson: [],
    lawSuits: [],
    tasks: [],
    documents: [],
    entities: [],
  },
  updateDate: {
    solution: '',
    registration: '',
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
        draft.caseSelected.advisor = action.payload.advisors;
        break;
      }
      case '@case/UPDATE_INTERNS': {
        draft.caseSelected.intern = action.payload.interns;
        break;
      }
      case '@case/UPDATE_AXES': {
        draft.caseSelected.axis = action.payload.axes;
        break;
      }
      case '@case/UPDATE_ASSISTED_PERSON': {
        draft.caseSelected.assisted_person = action.payload.assistedPerson;
        break;
      }
      case '@case/UPDATE_LAW_SUIT': {
        draft.caseSelected.law_suits = action.payload.lawSuits;
        break;
      }
      case '@case/UPDATE_TASK': {
        draft.caseSelected.tasks = action.payload.tasks;
        break;
      }
      case '@case/UPDATE_DOCUMENTS': {
        draft.caseSelected.documents = action.payload.documents;
        break;
      }
      case '@case/UPDATE_ENTITIES': {
        draft.caseSelected.entities = action.payload.entities;
        break;
      }
      case '@case/UPDATE_SOLUTION_DATE': {
        draft.caseSelected.solution_date = action.payload.solutionDate;
        break;
      }
      case '@case/UPDATE_REGISTRATION_DATE': {
        draft.caseSelected.registration_date = action.payload.registrationDate;
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
