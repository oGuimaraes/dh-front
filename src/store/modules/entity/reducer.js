import produce from 'immer';

const INITIAL_STATE = {
  newEntity: null,
  entitySelected: {
    name: '',
    address: null,
    entity_liked: '',
    description: '',
    contact: '',
    reference_person: '',
    reference_person_contact: '',
    comments: '',
    people: [],
    axis: [],
    cases: [],
  },
};

export default function entities(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@entity/CREATE_ENTITY_REQUEST': {
        draft.newEntity = action.payload.values;
        break;
      }
      case '@entity/CREATE_ENTITY_SUCCESS': {
        draft.viewMode = !draft.viewMode;
        break;
      }
      case '@entity/ENTITY_SELECTED': {
        draft.entitySelected = action.payload.entitySelected;
        break;
      }
      case '@entity/EDIT_ENTITY_REQUEST': {
        draft.entitySelected = action.payload.entitySelected;
        break;
      }
      case '@entity/EDIT_ENTITY_SUCCESS': {
        draft.entitySelected = action.payload.entitySelected;
        break;
      }
      case '@entity/DELETE_ENTITY': {
        break;
      }
      default:
        return state;
    }
  });
}
