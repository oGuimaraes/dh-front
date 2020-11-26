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
  const { id: userId } = useSelector((state) => state.auth.user);

  /* Fazer requisição e setar data com os valores obtidos */
  useEffect(() => {
    async function loadUsers() {
      await api.get('/tasks/').then((res) =>
        res.data.results.map((task) => {
          task.deadline_formated = format(task.deadline);
          setData(res.data.results);
        })
      );
      await api.get(`/accounts/${userId}/`).then((res) => setAccount(res.data));
    }
    loadUsers();
  }, []);

  function format(inputDate) {
    var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
      // Months use 0 index.
      return (
        date.getDate() + 1 + '/' + date.getMonth() + '/' + date.getFullYear()
      );
    }
  }

  /* Declarar valores que irão no header */
  const header = ['Título', 'Prazo', 'Responsável', 'Casos'];

  /* Declarar nome dos atributos que irão no header */
  const attributesToView = [
    'title',
    'deadline_formated',
    'responsible.id',
    'cases',
  ];

  let mode = useSelector((state) => state.view.mode);
  let taskSelected = useSelector((state) => state.tasks.taskSelected);

  let PageContent, Header;
  const [account, setAccount] = useState({});

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
            info={{
              header,
              orderBy: 'id',
              attributesToView,
              //axis: account.axis.id,
            }}
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
          title={
            taskSelected ? `${taskSelected.title}  | Nº${taskSelected.id}` : ''
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
