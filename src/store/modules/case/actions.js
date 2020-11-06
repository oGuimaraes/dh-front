export function createCaseRequest(values) {
  return {
    type: '@case/CREATE_CASE_REQUEST',
    payload: { values },
  };
}

export function createCaseSuccess(cases) {
  return {
    type: '@case/CREATE_CASE_SUCCESS',
    payload: { cases },
  };
}

export function selectCase(caseSelected) {
  return {
    type: '@case/CASE_SELECTED',
    payload: { caseSelected },
  };
}

export function editCaseRequest(caseSelected) {
  return {
    type: '@case/EDIT_CASE_REQUEST',
    payload: { caseSelected },
  };
}

export function editCaseSuccess(caseSelected) {
  return {
    type: '@case/EDIT_CASE_SUCCESS',
    payload: { caseSelected },
  };
}

export function deleteCase(id) {
  return {
    type: '@case/DELETE_CASE',
    payload: { id },
  };
}

export function updateAdvisors(advisors) {
  return {
    type: '@case/UPDATE_ADVISORS',
    payload: { advisors },
  };
}

export function updateInterns(interns) {
  return {
    type: '@case/UPDATE_INTERNS',
    payload: { interns },
  };
}

export function updateAssistedPerson(assistedPerson) {
  return {
    type: '@case/UPDATE_ASSISTED_PERSON',
    payload: { assistedPerson },
  };
}
