import React, { useEffect, useState } from 'react';
import HeaderPage from '../../components/HeaderPage';
import Table from '../../components/Tables';
import ViewUser from './pages/ViewUser';
import Container from '../../components/Container';
import MainForm from './form/_00_MainForm';
import { useSelector } from 'react-redux';
import api from '../../services/api';
import { selectUser } from '../../store/modules/user/actions';

export default function Users(props) {
  const [data, setData] = useState([]);
  let mode = useSelector((state) => state.view.mode);
  let userSelected = useSelector((state) => state.user.userSelected);

  /* Fazer requisição e setar data com os valores obtidos */
  useEffect(() => {
    async function loadUsers() {
      await api.get('/accounts/').then((res) => setData(res.data));
    }
    loadUsers();
  }, []);

  /* Declarar valores que irão no header */
  const header = ['Nome', 'Email', 'CPF', 'RG', 'ID'];

  /* Declarar nome dos atributos que irão no header */
  const attributesToView = ['name', 'email', 'cpf', 'rg', 'id'];

  let PageContent, Header;
  switch (mode) {
    case 'form': {
      PageContent = <MainForm />;
      Header = <HeaderPage title="Cadastro de Usuário" viewMode button />;
      break;
    }
    case 'table': {
      PageContent = (
        <Table
          data={data}
          info={{ header, orderBy: 'name', attributesToView }}
          action={selectUser}
        />
      );
      Header = <HeaderPage title="Usuários" viewMode button />;
      break;
    }
    case 'view': {
      PageContent = <ViewUser />;
      Header = (
        <HeaderPage
          title={userSelected ? userSelected.name : ''}
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
