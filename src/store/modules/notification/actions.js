export function receiveNotification(values) {
  console.log(values);
  return {
    type: '@notification/RECEIVE_NOTIFICATION',
    payload: { values },
  };
}
