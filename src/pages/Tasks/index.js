import React, { useEffect, useState } from 'react';
import HeaderPage from '../../components/HeaderPage';
import ViewTask from './pages/ViewTask';
import MainForm from './form/_00_MainForm';
import Container from '../../components/Container';
import { useSelector } from 'react-redux';
import Table from '../../components/Tables';
import api from '../../services/api';
import { selectTask } from '../../store/modules/task/actions';
import Grid from '@material-ui/core/Grid';

export default function Tasks(props) {
  const [data, setData] = useState([]);

  /* Fazer requisição e setar data com os valores obtidos */
  useEffect(() => {
    async function loadUsers() {
      await api.get('/tasks/').then((res) => setData(res.data.results));
    }
    loadUsers();
  }, []);

  /* Declarar valores que irão no header */
  const header = ['Título', 'Prazo', 'Responsável', 'Casos'];

  /* Declarar nome dos atributos que irão no header */
  const attributesToView = ['title', 'deadline', 'responsible.id', 'cases'];

  let mode = useSelector((state) => state.view.mode);
  let taskSelected = useSelector((state) => state.tasks.taskSelected);

  let PageContent, Header;

  switch (mode) {
    case 'form': {
      PageContent = <MainForm />;
      Header = <HeaderPage title="Cadastro de Tarefa" viewMode button />;
      break;
    }
    case 'table': {
      PageContent = (
        <Grid item xs={12}>
          <Table
            data={data}
            info={{ header, orderBy: 'id', attributesToView }}
            action={selectTask}
          />
        </Grid>
      );
      Header = <HeaderPage title="Tarefas" viewMode button />;
      break;
    }
    case 'view': {
      PageContent = <ViewTask />;
      Header = (
        <HeaderPage
          title={taskSelected ? `Tarefa ${taskSelected.id}` : ''}
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
