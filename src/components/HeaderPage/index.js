import React from 'react';
import { Container } from './styles';
import Button from '../Button';
import { useSelector } from 'react-redux';

export default function HeaderPage(props) {
  let mode = useSelector((state) => state.view.mode);

  let TypeButton;

  if (mode === 'table')
    TypeButton = <Button icon="add" text="Cadastrar" linkTo="form" />;
  else if (mode === 'form' || mode === 'view')
    TypeButton = <Button text="Voltar" icon="left" linkTo="table" />;

  return (
    <Container>
      <h2>{props.title}</h2>
      {TypeButton}
    </Container>
  );
}
