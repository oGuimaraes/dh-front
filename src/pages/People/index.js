import React, { useEffect, useState } from 'react';
import HeaderPage from '../../components/HeaderPage';
import ViewPerson from './pages/viewPerson';
import MainForm from './form/_00_MainForm';
import Container from '../../components/Container';
import { useSelector } from 'react-redux';
import Table from '../../components/Tables/';
import api from '../../services/api';
import { selectPerson } from '../../store/modules/people/actions';

export default function People() {
  const [data, setData] = useState([]);
  const [account, setAccount] = useState({});

  const { id: userId } = useSelector((state) => state.auth.user);

  useEffect(() => {
    async function loadPeople() {
      await api.get('/people/').then((res) => setData(res.data.results));
      await api.get(`/accounts/${userId}/`).then((res) => setAccount(res.data));
    }
    loadPeople();
  }, []);

  const header = [
    'Nome Completo',
    'RG',
    'Orientador Responsável',
    'Estagiário Responsável',
    'Caso Relacionado',
  ];

  const attributesToView = [
    'full_name',
    'rg',
    'daj_advisor',
    'daj_intern',
    'mother_name',
  ];

  let mode = useSelector((state) => state.view.mode);
  let personSelected = useSelector((state) => state.people.personSelected);

  let PageContent, Header;

  switch (mode) {
    case 'form': {
      PageContent = <MainForm />;
      Header = <HeaderPage title="Cadastro de Pessoa" viewMode button />;
      break;
    }
    case 'table': {
      PageContent = (
        <Table
          data={data}
          info={{
            header,
            orderBy: 'full_name',
            attributesToView,
            isAdmin: account.is_superuser,
            axis: account.axis,
            useFilter: true
          }}
          action={selectPerson}
        />
      );
      Header = <HeaderPage title="Pessoas" viewMode button />;
      break;
    }
    case 'view': {
      PageContent = <ViewPerson />;
      Header = (
        <HeaderPage
          title={personSelected ? `${personSelected.full_name}` : ''}
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
