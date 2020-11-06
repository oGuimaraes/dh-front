import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard/index.js';
import Profile from '../pages/Profile';
import Users from '../pages/Users';
import Cases from '../pages/Cases';
import People from '../pages/People';
import LawSuits from '../pages/LawSuits';
import JudicialAppeals from '../pages/JudicialAppeals';
import Entities from '../pages/Entities';
import Documents from '../pages/Documents';
import Tasks from '../pages/Tasks';

import Route from './Route';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />

        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/profile" component={Profile} isPrivate />
        <Route path="/usuarios" component={Users} isPrivate />
        <Route path="/casos" component={Cases} isPrivate />
        <Route path="/pessoas" component={People} isPrivate />
        <Route path="/processos" component={LawSuits} isPrivate />
        <Route path="/recursos" component={JudicialAppeals} isPrivate />
        <Route path="/entidades" component={Entities} isPrivate />
        <Route path="/documentos" component={Documents} isPrivate />
        <Route path="/tarefas" component={Tasks} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
