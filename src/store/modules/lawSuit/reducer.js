import produce from 'immer';

const INITIAL_STATE = {
  newLawSuit: null,
  lawSuitSelected: {
    law_suit_number: '',
    action_type: '',
    open_mandate: false,
    district: '',
    law_area: '',
    latest_moves: '',
    has_lawyer: false,
    lawyer_name: '',
    lawyer_contact: '',
    followed_by_daj: false,
    minhadaj_number: '',
    start_date: null,
    transit_date: null,
    related_person: [],
    cases: [],
  },
};

export default function lawSuits(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@lawSuit/CREATE_LAWSUIT_REQUEST': {
        draft.newLawSuit = action.payload.values;
        break;
      }
      case '@lawSuit/CREATE_LAWSUIT_SUCCESS': {
        draft.viewMode = !draft.viewMode;
        break;
      }
      case '@lawSuit/LAWSUIT_SELECTED': {
        draft.lawSuitSelected = action.payload.lawSuitSelected;
        break;
      }
      case '@lawSuit/EDIT_LAWSUIT_REQUEST': {
        draft.lawSuitSelected = action.payload.lawSuitSelected;
        break;
      }
      case '@lawSuit/EDIT_LAWSUIT_SUCCESS': {
        draft.lawSuitSelected = action.payload.lawSuitSelected;
        break;
      }
      case '@lawSuit/DELETE_LAWSUIT': {
        break;
      }
      default:
        return state;
    }
  });
}
