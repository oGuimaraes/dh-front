export function createJudicialAppealRequest(values) {
  return {
    type: '@judicialAppeal/CREATE_JUDICIALAPPEAL_REQUEST',
    payload: { values },
  };
}

export function createJudicialAppealSuccess(judicialAppeals) {
  return {
    type: '@judicialAppeal/CREATE_JUDICIALAPPEAL_SUCCESS',
    payload: { judicialAppeals },
  };
}

export function selectJudicialAppeal(judicialAppealSelected) {
  return {
    type: '@judicialAppeal/JUDICIALAPPEAL_SELECTED',
    payload: { judicialAppealSelected },
  };
}

export function editJudicialAppealRequest(judicialAppealSelected) {
  return {
    type: '@judicialAppeal/EDIT_JUDICIALAPPEAL_REQUEST',
    payload: { judicialAppealSelected },
  };
}

export function editJudicialAppealSuccess(judicialAppealSelected) {
  return {
    type: '@judicialAppeal/EDIT_JUDICIALAPPEAL_SUCCESS',
    payload: { judicialAppealSelected },
  };
}

export function deleteJudicialAppeal(id) {
  return {
    type: '@judicialAppeal/DELETE_JUDICIALAPPEAL',
    payload: { id },
  };
}
