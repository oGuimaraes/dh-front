import React, { useState, useEffect } from 'react';

import { MdMenu } from 'react-icons/md';

import { Container, Button, MenuList, Scroll, MenuItem } from './styles';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeView } from '../../store/modules/view/actions';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function Menu() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setTimeout(() => setVisible(!visible), 250);
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      <Button onClick={handleToggleVisible}>
        <MdMenu color="#0387b3" size={23} style={{ marginBottom: 2 }} />
        <span>MENU</span>
      </Button>

      <MenuList visible={visible}>
        <Scroll>
          {getWindowDimensions().width < 800 && (
            <MenuItem>
              <Link to="/casos" onClick={handleToggleVisible}>
                CASOS
              </Link>
            </MenuItem>
          )}
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

          {getWindowDimensions().width < 800 && (
            <MenuItem>
              <Link to="/pessoas" onClick={handleToggleVisible}>
                PESSOAS
              </Link>
            </MenuItem>
          )}

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

          {getWindowDimensions().width < 800 && (
            <MenuItem>
              <Link to="/usuarios" onClick={handleToggleVisible}>
                USUÁRIOS
              </Link>
            </MenuItem>
          )}
        </Scroll>
      </MenuList>
    </Container>
  );
}

{
}
