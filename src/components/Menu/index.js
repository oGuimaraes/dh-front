import React, { useState } from 'react';

import { MdMenu } from 'react-icons/md';

import { Container, Button, MenuList, Scroll, MenuItem } from './styles';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeView } from '../../store/modules/view/actions';

export default function Menu() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setTimeout(() => setVisible(!visible), 250);
  }

  return (
    <Container>
      <Button onClick={handleToggleVisible}>
        <MdMenu color="#0387b3" size={23} style={{ marginBottom: 2 }} />
        <span>MENU</span>
      </Button>

      <MenuList visible={visible}>
        <Scroll>
          <MenuItem>
            <Link to="/documentos" onClick={handleToggleVisible}>
              DOCUMENTOS
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to="/entidades" onClick={handleToggleVisible}>
              ENTIDADES
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to="/processos" onClick={handleToggleVisible}>
              PROCESSOS
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to="/recursos" onClick={handleToggleVisible}>
              RECURSOS
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to="/tarefas" onClick={handleToggleVisible}>
              TAREFAS
            </Link>
          </MenuItem>
        </Scroll>
      </MenuList>
    </Container>
  );
}
