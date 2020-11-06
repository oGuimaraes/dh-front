export function createPersonRequest(values) {
  return {
    type: '@people/CREATE_PERSON_REQUEST',
    payload: { values },
  };
}

export function createPersonSuccess(person) {
  return {
    type: '@people/CREATE_PERSON_REQUEST',
    payload: { person },
  };
}

export function selectPerson(personSelected) {
  return {
    type: '@people/PERSON_SELECTED',
    payload: { personSelected },
  };
}

export function editPersonRequest(personSelected) {
  return {
    type: '@people/EDIT_PERSON_REQUEST',
    payload: { personSelected },
  };
}

export function editPersonSuccess(personSelected) {
  return {
    type: '@people/EDIT_PERSON_SUCCESS',
    payload: { personSelected },
  };
}

export function deletePerson(id) {
  return {
    type: '@people/DELETE_PERSON',
    payload: { id },
  };
}
