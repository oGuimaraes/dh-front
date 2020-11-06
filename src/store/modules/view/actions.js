export function changeView(values) {
  return {
    type: '@view/CHANGE',
    payload: { values },
  };
}
