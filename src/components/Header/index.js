import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Gravatar from 'react-gravatar';
import { useSelector } from 'react-redux';

import Menu from '../Menu';
import Notification from '../Notifications';

import logo from '../../assets/Logo1.png';
import { changeView } from '../../store/modules/view/actions';
import { useDispatch } from 'react-redux';

import { Container, Content, Profile } from './styles';
import { receiveNotification } from '../../store/modules/notification/actions';

let ws;

export default function Header() {
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.auth.user.id);

  useEffect(() => {
    ws = new WebSocket('ws://dh-ufmg.herokuapp.com/notifications/');

    ws.onmessage = (evt) => {
      const notification = JSON.parse(evt.data);
      const users = JSON.parse(notification.task_responsible);
      if (users.includes(currentUserId))
        dispatch(receiveNotification(notification));
    };

    return () => {
      ws.close();
    };
  }, []);

  const user = useSelector((state) => state.auth.user);
  const setView = () => {
    dispatch(changeView('table'));
  };

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="DH" />
          </Link>
          <Menu />
        </nav>

        <nav>
          <Link to="/usuarios" onClick={setView()}>
            USUÁRIOS
          </Link>
          <Link to="/casos" onClick={setView()}>
            CASOS
          </Link>
          <Link to="/pessoas" onClick={setView()}>
            PESSOAS
          </Link>
        </nav>

        <aside>
          <Notification />
          <Profile>
            <div>
              <strong>{user.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <Gravatar email={user.email} size={60} />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
