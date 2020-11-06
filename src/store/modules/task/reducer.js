import produce from 'immer';

const INITIAL_STATE = {
  newTask: null,
  taskSelected: {
    title: '',
    deadline: null,
    description: '',
    responsible: [],
    documents: [],
    cases: [],
  },
  newTask: {
    responsible: [],
    documents: [],
    cases: [],
  },
};

export default function tasks(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@task/CREATE_TASK_REQUEST': {
        draft.newTask = action.payload.values;
        break;
      }
      case '@task/CREATE_TASK_SUCCESS': {
        draft.viewMode = !draft.viewMode;
        break;
      }
      case '@task/TASK_SELECTED': {
        draft.taskSelected = action.payload.taskSelected;
        break;
      }
      case '@task/EDIT_TASK_REQUEST': {
        draft.taskSelected = action.payload.taskSelected;
        break;
      }
      case '@task/EDIT_TASK_SUCCESS': {
        draft.taskSelected = action.payload.taskSelected;
        break;
      }
      case '@task/DELETE_TASK': {
        break;
      }
      case '@task/UPDATE_RESPONSIBLE': {
        draft.newTask.responsible = action.payload.responsible;
        break;
      }
      case '@task/UPDATE_DOCUMENTS': {
        draft.newTask.documents = action.payload.documents;
        break;
      }
      case '@task/UPDATE_CASES': {
        console.log('Action', action.payload.cases);
        draft.newTask.cases = action.payload.cases;
        break;
      }
      default:
        return state;
    }
  });
}
