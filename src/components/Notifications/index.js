import React, { useState } from 'react';

import { MdNotifications } from 'react-icons/md';
import { useSelector } from 'react-redux';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  const notifications = useSelector((state) => state.notifications);
  let { hasUnread, notification } = notifications;
  const [unread, setRead] = useState(false);
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#0387b3" size={20} />
      </Badge>

      <NotificationList className="notificationContainer" visible={visible}>
        <Scroll>
          {hasUnread ? (
            <Notification unread>
              <p style={{ marginBottom: '10px' }}>
                A tarefa{' '}
                <span style={{ color: '#f06a9a', fontStyle: 'italic' }}>
                  "{notification.task_title}"
                </span>
                , nº{notification.task_id} que você está associado(a) foi
                atualizada.
              </p>
              <time>há 1 minuto</time>
              <button type="button">Marcar como lida</button>
            </Notification>
          ) : (
            <Notification>
              <p> Você não possui notificações </p>
            </Notification>
          )}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
