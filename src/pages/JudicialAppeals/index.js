import React, { useEffect, useState } from 'react';
import HeaderPage from '../../components/HeaderPage';
import ViewJudicialAppeal from './pages/ViewJudicialAppeal';
import MainForm from './form/_00_MainForm';
import Container from '../../components/Container';
import { useSelector } from 'react-redux';
import Table from '../../components/Tables';
import api from '../../services/api';
import { selectJudicialAppeal } from '../../store/modules/judicialAppeal/actions';

export default function JudicialAppeals(props) {
  const [data, setData] = useState([]);

  /* Fazer requisição e setar data com os valores obtidos */
  useEffect(() => {
    async function loadUsers() {
      await api
        .get('/judicial_appeals/')
        .then((res) => setData(res.data.results));
    }
    loadUsers();
  }, []);

  /* Declarar valores que irão no header */
  const header = [
    'Tipo',
    'Número do Recurso',
    'Câmara/Turma/Plenário',
    'Processo Relacionado',
  ];

  /* Declarar nome dos atributos que irão no header */
  const attributesToView = [
    'type',
    'judicial_appeal_number',
    'plenary',
    'law_suit',
  ];

  let mode = useSelector((state) => state.view.mode);
  let judicialAppealSelected = useSelector(
    (state) => state.judicialAppeals.judicialAppealSelected
  );

  let PageContent, Header;

  switch (mode) {
    case 'form': {
      PageContent = <MainForm />;
      Header = <HeaderPage title="Cadastro de Recurso" viewMode button />;
      break;
    }
    case 'table': {
      PageContent = (
        <Table
          data={data}
          info={{ header, orderBy: 'id', attributesToView }}
          action={selectJudicialAppeal}
        />
      );
      Header = <HeaderPage title="Recursos" viewMode button />;
      break;
    }
    case 'view': {
      PageContent = <ViewJudicialAppeal />;
      Header = (
        <HeaderPage
          title={
            judicialAppealSelected ? `Recurso ${judicialAppealSelected.id}` : ''
          }
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
