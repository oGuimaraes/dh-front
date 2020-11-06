export function createLawSuitRequest(values) {
  return {
    type: '@lawSuit/CREATE_LAWSUIT_REQUEST',
    payload: { values },
  };
}

export function createLawSuitSuccess(lawSuits) {
  return {
    type: '@lawSuit/CREATE_LAWSUIT_SUCCESS',
    payload: { lawSuits },
  };
}

export function selectLawSuit(lawSuitSelected) {
  return {
    type: '@lawSuit/LAWSUIT_SELECTED',
    payload: { lawSuitSelected },
  };
}

export function editLawSuitRequest(lawSuitSelected) {
  return {
    type: '@lawSuit/EDIT_LAWSUIT_REQUEST',
    payload: { lawSuitSelected },
  };
}

export function editLawSuitSuccess(lawSuitSelected) {
  return {
    type: '@lawSuit/EDIT_LAWSUIT_SUCCESS',
    payload: { lawSuitSelected },
  };
}

export function deleteLawSuit(id) {
  return {
    type: '@lawSuit/DELETE_LAWSUIT',
    payload: { id },
  };
}
