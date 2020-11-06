import produce from 'immer';

const INITIAL_STATE = {
  hasUnread: false,
  notification: '',
};

export default function people(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@notification/RECEIVE_NOTIFICATION': {
        const notification = action.payload.values;
        draft.hasUnread = true;
        draft.notification = notification;
        break;
      }
      default:
        return state;
    }
  });
}
