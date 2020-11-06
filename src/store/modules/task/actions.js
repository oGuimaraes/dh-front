export function createTaskRequest(values) {
  console.log(values);
  return {
    type: '@task/CREATE_TASK_REQUEST',
    payload: { values },
  };
}

export function createTaskSuccess(tasks) {
  return {
    type: '@task/CREATE_TASK_SUCCESS',
    payload: { tasks },
  };
}

export function selectTask(taskSelected) {
  return {
    type: '@task/TASK_SELECTED',
    payload: { taskSelected },
  };
}

export function editTaskRequest(taskSelected) {
  return {
    type: '@task/EDIT_TASK_REQUEST',
    payload: { taskSelected },
  };
}

export function editTaskSuccess(taskSelected) {
  return {
    type: '@task/EDIT_TASK_SUCCESS',
    payload: { taskSelected },
  };
}

export function deleteTask(id) {
  return {
    type: '@task/DELETE_TASK',
    payload: { id },
  };
}

export function updateResponsible(responsible) {
  return {
    type: '@task/UPDATE_RESPONSIBLE',
    payload: { responsible },
  };
}

export function updateDocuments(documents) {
  return {
    type: '@task/UPDATE_DOCUMENTS',
    payload: { documents },
  };
}

export function updateCases(cases) {
  return {
    type: '@task/UPDATE_CASES',
    payload: { cases },
  };
}

export function emmitPublish(taskID) {
  return {
    type: '@task/EMMIT_PUBLISH',
    payload: { taskID },
  };
}
