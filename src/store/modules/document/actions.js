export function createDocumentRequest(values) {
  return {
    type: '@document/CREATE_DOCUMENT_REQUEST',
    payload: { values },
  };
}

export function createDocumentSuccess(documents) {
  return {
    type: '@document/CREATE_DOCUMENT_SUCCESS',
    payload: { documents },
  };
}

export function selectDocument(documentSelected) {
  return {
    type: '@document/DOCUMENT_SELECTED',
    payload: { documentSelected },
  };
}

export function editDocumentRequest(documentSelected) {
  return {
    type: '@document/EDIT_DOCUMENT_REQUEST',
    payload: { documentSelected },
  };
}

export function editDocumentSuccess(documentSelected) {
  return {
    type: '@document/EDIT_DOCUMENT_SUCCESS',
    payload: { documentSelected },
  };
}

export function deleteDocument(id) {
  return {
    type: '@document/DELETE_DOCUMENT',
    payload: { id },
  };
}
