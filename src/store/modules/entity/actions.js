export function createEntityRequest(values) {
  return {
    type: '@entity/CREATE_ENTITY_REQUEST',
    payload: { values },
  };
}

export function createEntitySuccess(entities) {
  return {
    type: '@entity/CREATE_ENTITY_SUCCESS',
    payload: { entities },
  };
}

export function selectEntity(entitySelected) {
  return {
    type: '@entity/ENTITY_SELECTED',
    payload: { entitySelected },
  };
}

export function editEntityRequest(entitySelected) {
  return {
    type: '@entity/EDIT_ENTITY_REQUEST',
    payload: { entitySelected },
  };
}

export function editEntitySuccess(entitySelected) {
  return {
    type: '@entity/EDIT_ENTITY_SUCCESS',
    payload: { entitySelected },
  };
}

export function deleteEntity(id) {
  return {
    type: '@entity/DELETE_ENTITY',
    payload: { id },
  };
}
