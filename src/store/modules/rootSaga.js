import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import view from './view/sagas';
import user from './user/sagas';
import cases from './case/sagas';
import people from './people/sagas';
import lawSuits from './lawSuit/sagas';
import judicialAppeals from './judicialAppeal/sagas';
import entities from './entity/sagas';
import documents from './document/sagas';
import tasks from './task/sagas';
import notifications from './notification/sagas';

export default function* rootSaga() {
  return yield all([auth, view, user, cases, people, lawSuits, judicialAppeals, entities, documents, tasks, notifications]);
}
