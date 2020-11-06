import produce from 'immer';

const INITIAL_STATE = {
  newJudicialAppeal: null,
  judicialAppealSelected: {
    type: '',
    judicial_appeal_number: '',
    plenary: '',
    report: '',
    resume: '',
    law_suit: null,
  },
};

export default function judicialAppeals(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@judicialAppeal/CREATE_JUDICIALAPPEAL_REQUEST': {
        draft.newJudicialAppeal = action.payload.values;
        break;
      }
      case '@judicialAppeal/CREATE_JUDICIALAPPEAL_SUCCESS': {
        draft.viewMode = !draft.viewMode;
        break;
      }
      case '@judicialAppeal/JUDICIALAPPEAL_SELECTED': {
        draft.judicialAppealSelected = action.payload.judicialAppealSelected;
        break;
      }
      case '@judicialAppeal/EDIT_JUDICIALAPPEAL_REQUEST': {
        draft.judicialAppealSelected = action.payload.judicialAppealSelected;
        break;
      }
      case '@judicialAppeal/EDIT_JUDICIALAPPEAL_SUCCESS': {
        draft.judicialAppealSelected = action.payload.judicialAppealSelected;
        break;
      }
      case '@judicialAppeal/DELETE_JUDICIALAPPEAL': {
        break;
      }
      default:
        return state;
    }
  });
}
