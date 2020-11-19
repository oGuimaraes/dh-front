import React, { useEffect, useState } from 'react';
import HeaderPage from '../../components/HeaderPage';
import ViewCase from './pages/ViewCase';
import MainForm from './form/_00_MainForm';
import Container from '../../components/Container';
import { useSelector } from 'react-redux';
import Table from '../../components/Tables';
import api from '../../services/api';
import { selectCase } from '../../store/modules/case/actions';

export default function Cases(props) {
  const [data, setData] = useState([]);
  const [account, setAccount] = useState({});

  const { id: userId } = useSelector((state) => state.auth.user);

  /* Fazer requisição e setar data com os valores obtidos */
  useEffect(() => {
    async function loadCases() {
      await api.get('/cases/').then((res) => setData(res.data.results));
      await api.get(`/accounts/${userId}/`).then((res) => setAccount(res.data));
    }
    loadCases();
  }, []);

  /* Declarar valores que irão no header */
  const header = [
    'Número do Caso',
    'Orientador Responsável',
    'Estagiário Responsável',
    'Data de Registro',
  ];

  /* Declarar nome dos atributos que irão no header */
  const attributesToView = [
    '$.id',
    '$.advisor[*].name',
    '$.intern[*].name',
    '$.registration_date',
  ];

  let mode = useSelector((state) => state.view.mode);
  let caseSelected = useSelector((state) => state.cases.caseSelected);

  let PageContent, Header;

  switch (mode) {
    case 'form': {
      PageContent = <MainForm />;
      Header = <HeaderPage title="Cadastro de Caso" viewMode button />;
      break;
    }
    case 'table': {
      PageContent = (
        <Table
          data={data}
          info={{
            header,
            orderBy: 'id',
            attributesToView,
            isAdmin: account.is_superuser,
            axis: account.axis,
            useFilter: true
          }}
          action={selectCase}
        />
      );
      Header = <HeaderPage title="Casos" viewMode button />;
      break;
    }
    case 'view': {
      PageContent = <ViewCase />;
      Header = (
        <HeaderPage
          title={caseSelected ? `Caso ${caseSelected.id}` : ''}
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
