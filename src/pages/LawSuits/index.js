import React, { useEffect, useState } from 'react';
import HeaderPage from '../../components/HeaderPage';
import ViewLawSuit from './pages/ViewLawSuit';
import MainForm from './form/_00_MainForm';
import Container from '../../components/Container';
import { useSelector } from 'react-redux';
import Table from '../../components/Tables';
import api from '../../services/api';
import { selectLawSuit } from '../../store/modules/lawSuit/actions';

export default function LawSuits(props) {
  const [data, setData] = useState([]);

  /* Fazer requisição e setar data com os valores obtidos */
  useEffect(() => {
    async function loadUsers() {
      await api.get('/law_suits/').then((res) => setData(res.data));
    }
    loadUsers();
  }, []);

  /* Declarar valores que irão no header */
  const header = [
    'Número do Processo',
    'Tipo de Ação',
    '"Mandado de prisão em aberto',
    'Comarca',
  ];

  /* Declarar nome dos atributos que irão no header */
  const attributesToView = [
    'law_suit_number',
    'action_type',
    'open_mandate',
    'district',
  ];

  let mode = useSelector((state) => state.view.mode);
  let lawSuitSelected = useSelector((state) => state.lawSuits.lawSuitSelected);

  let PageContent, Header;

  switch (mode) {
    case 'form': {
      PageContent = <MainForm />;
      Header = <HeaderPage title="Cadastro de Processo" viewMode button />;
      break;
    }
    case 'table': {
      PageContent = (
        <Table
          data={data}
          info={{ header, orderBy: 'id', attributesToView }}
          action={selectLawSuit}
        />
      );
      Header = <HeaderPage title="Processos" viewMode button />;
      break;
    }
    case 'view': {
      PageContent = <ViewLawSuit />;
      Header = (
        <HeaderPage
          title={lawSuitSelected ? `Processo ${lawSuitSelected.law_suit_number}` : ''}
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
