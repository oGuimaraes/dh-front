import { combineReducers } from 'redux';

import auth from './auth/reducer';
import view from './view/reducer';
import user from './user/reducer';
import cases from './case/reducer';
import people from './people/reducer';
import lawSuits from './lawSuit/reducer';
import judicialAppeals from './judicialAppeal/reducer';
import entities from './entity/reducer';
import documents from './document/reducer';
import tasks from './task/reducer';
import notifications from './notification/reducer';

export default combineReducers({
  auth,
  view,
  user,
  cases,
  people,
  lawSuits,
  judicialAppeals,
  entities,
  documents,
  tasks,
  notifications,
});
