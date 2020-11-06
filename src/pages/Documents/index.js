import React, { useEffect, useState } from 'react';
import HeaderPage from '../../components/HeaderPage';
import ViewDocument from './pages/ViewDocument';
import MainForm from './form/_00_MainForm';
import Container from '../../components/Container';
import { useSelector } from 'react-redux';
import Table from '../../components/Tables';
import api from '../../services/api';
import { selectDocument } from '../../store/modules/document/actions';

export default function Documents(props) {
  const [data, setData] = useState([]);

  /* Fazer requisição e setar data com os valores obtidos */
  useEffect(() => {
    async function loadUsers() {
      await api.get('/documents/').then((res) => setData(res.data));
    }
    loadUsers();
  }, []);

  /* Declarar valores que irão no header */
  const header = [
    'Tipo do Documento',
    'Elaborado por',
    'Data',
    'Destinatários',
  ];

  /* Declarar nome dos atributos que irão no header */
  const attributesToView = [
    'type',
    'prepared_by',
    'date',
    'recipients',
  ];

  let mode = useSelector((state) => state.view.mode);
  let documentSelected = useSelector((state) => state.documents.documentSelected);

  let PageContent, Header;

  switch (mode) {
    case 'form': {
      PageContent = <MainForm />;
      Header = <HeaderPage title="Cadastro de Documento" viewMode button />;
      break;
    }
    case 'table': {
      PageContent = (
        <Table
          data={data}
          info={{ header, orderBy: 'id', attributesToView }}
          action={selectDocument}
        />
      );
      Header = <HeaderPage title="Documentos" viewMode button />;
      break;
    }
    case 'view': {
      PageContent = <ViewDocument />;
      Header = (
        <HeaderPage
          title={documentSelected ? `Documento ${documentSelected.id}` : ''}
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
