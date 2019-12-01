import React from 'react';

import params from '../../config/params';
import {createMinedBoard} from '../../config/functions';

import {Container, Board} from './styles';

import MineField from '../../components/MineField';

function Main() {
  const columns = params.getColumnsAmount();
  const rows = params.getRowsAmount();
  const difficultLevel = params.difficultLevel;

  function minesAmount() {
    return Math.ceil(columns * rows * difficultLevel);
  }

  function createState() {
    return createMinedBoard(rows, columns, minesAmount());
  }

  return (
    <Container>
      <Board>
        <MineField board={createState()} />
      </Board>
    </Container>
  );
}

export default Main;
