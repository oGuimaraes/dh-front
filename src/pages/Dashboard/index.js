import React, { useEffect, useState } from 'react';
import HeaderPage from '../../components/HeaderPage';
import Header from '../../components/Header';
import Container from '../../components/Container';
import { useSelector } from 'react-redux';
import Table from '../../components/Tables';
import api from '../../services/api';
import ViewTask from '../Tasks/pages/ViewTask';
import { selectTask } from '../../store/modules/task/actions';

export default function Dashboard(props) {
  const [data, setData] = useState([]);
  const [account, setAccount] = useState({});

  const { id: userId } = useSelector((state) => state.auth.user);

  /* Fazer requisição e setar data com os valores obtidos */
  useEffect(() => {
    async function loadTasks() {
      await api.get('/tasks/').then((res) => setData(res.data.results));
      await api.get(`/accounts/${userId}/`).then((res) => setAccount(res.data));
    }
    loadTasks();
  }, []);

  /* Declarar valores que irão no header */
  const header = ['Número da Tarefa', 'Titulo', 'Prazo', 'Casos'];

  /* Declarar nome dos atributos que irão no header */
  const attributesToView = ['$.id', '$.title', '$.deadline', '$.cases[*].id'];

  let mode = useSelector((state) => state.view.mode);
  let taskSelected = useSelector((state) => state.tasks.taskSelected);

  let PageContent, Header;

  switch (mode) {
    case 'table': {
      PageContent = (
        <>
          <h2 className="phrases">
            {frases[Math.floor(Math.random() * frases.length)]}
          </h2>
          <HeaderPage title="Minhas Tarefas" viewMode button />
          <Table
            data={data}
            info={{
              header,
              orderBy: 'id',
              attributesToView,
              isAdmin: account.is_superuser,
              axis: account.axis,
              useFilter: true,
            }}
            action={selectTask}
          />
        </>
      );
      //Header = <HeaderPage title={''} viewMode noButton />;

      break;
    }
    case 'view': {
      PageContent = <ViewTask />;
      Header = (
        <HeaderPage
          title={taskSelected ? `Caso ${taskSelected.id}` : ''}
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

const frases = [
  `"The first person to climb a tree could claim tangible progress toward reaching the moon" - Hubert L. Dreyfus, 1992`,
  `"enquanto coisa assim se ata, a gente sente mais é o que o corpo a próprio é: coração bem batendo. ... o real roda e põe diante. Essas são as horas da gente. As outras, de todo tempo, são as horas de todos...amor  desse, cresce primeiro; brota é depois. ... a vida não é entendível" Guimarães Rosa, Grande sertão: Veredas.`,
  `"As pessoas vão mas como elas foram sempre fica" - Rupi Kaur, 2017`,
  `"Só acho que se desiludir é uma ótima forma de aprender sobre o mundo" - Filme: Mulheres do Século XX, 2016`,
  `"Só uma nuvem te separa das estrelas" -  Paulo Leminski, Toda Poesia, 2013`,
  `"Isso de querer ser exatamente aquilo que a gente é ainda vai nos levar além" -  Paulo Leminski, Toda Poesia, 2013`,
  `"I am my own ghost haunting the memories I love the most" - autor desconhecido`,
  `"Estou liberto e perdido" - Fernando Pessoa, 1982`,
  `"It's your life and its ending one minute at time" Clube da Luta, 1999`,
  `"As soon as I saw you I knew an adventure was going to happen" Winnie the Pooh`,
];
