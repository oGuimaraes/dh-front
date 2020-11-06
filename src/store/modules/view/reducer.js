import produce from 'immer';

const INITIAL_STATE = {
  mode: 'table',
};

export default function view(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@view/CHANGE': {
        draft.mode = action.payload.values;
        break;
      }
      default:
        return state;
    }
  });
}
