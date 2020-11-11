import React, { useEffect, useState } from 'react';
import HeaderPage from '../../components/HeaderPage';
import ViewEntity from './pages/ViewEntity';
import MainForm from './form/_00_MainForm';
import Container from '../../components/Container';
import { useSelector } from 'react-redux';
import Table from '../../components/Tables';
import api from '../../services/api';
import { selectEntity } from '../../store/modules/entity/actions';

export default function Entities(props) {
  const [data, setData] = useState([]);

  /* Fazer requisição e setar data com os valores obtidos */
  useEffect(() => {
    async function loadUsers() {
      await api.get('/entities/').then((res) => setData(res.data.results));
    }
    loadUsers();
  }, []);

  /* Declarar valores que irão no header */
  const header = ['Nome', 'Eixos', 'Ente Administrativo', 'Contato'];

  /* Declarar nome dos atributos que irão no header */
  const attributesToView = ['name', 'axis', 'entity_liked', 'contact'];

  let mode = useSelector((state) => state.view.mode);
  let entitySelected = useSelector((state) => state.entities.entitySelected);

  let PageContent, Header;

  switch (mode) {
    case 'form': {
      PageContent = <MainForm />;
      Header = <HeaderPage title="Cadastro de Entidade" viewMode button />;
      break;
    }
    case 'table': {
      PageContent = (
        <Table
          data={data}
          info={{ header, orderBy: 'id', attributesToView }}
          action={selectEntity}
        />
      );
      Header = <HeaderPage title="Entidades" viewMode button />;
      break;
    }
    case 'view': {
      PageContent = <ViewEntity />;
      Header = (
        <HeaderPage
          title={entitySelected ? `Entidade ${entitySelected.id}` : ''}
          viewMode
          button
        />
      );
      break;
    }
    default:
      return <div />;
  }

  return (
    <>
      <Container>
        {Header}
        {PageContent}
      </Container>
    </>
  );
}
