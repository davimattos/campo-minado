import React, {useState, useEffect} from 'react';

import params from '../../config/params';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
} from '../../config/functions';

import {Container, Board} from './styles';

import MineField from '../../components/MineField';
import {Alert} from 'react-native';

function Main() {
  const [originalBoard, setOriginalBoard] = useState(createState());

  const columns = params.getColumnsAmount();
  const rows = params.getRowsAmount();
  const difficultLevel = params.difficultLevel;

  useEffect(() => {
    setOriginalBoard(createState());
  }, []);

  function minesAmount() {
    return Math.ceil(columns * rows * difficultLevel);
  }

  function createState() {
    return {
      board: createMinedBoard(rows, columns, minesAmount()),
      won: false,
      lost: false,
    };
  }

  const onOpenField = (row, column) => {
    const board = cloneBoard(originalBoard.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('Perdeu', 'Ai que burro!');
    }

    if (won) {
      Alert.alert('Parabéns', 'Você venceu!');
    }

    setOriginalBoard({board, lost, won});
  };

  const onSelectField = (row, column) => {
    const board = cloneBoard(originalBoard.board);
    invertFlag(board, row, column);
    const won = wonGame(board);

    if (won) {
      Alert.alert('Parabéns', 'Você venceu!');
    }

    setOriginalBoard({board, won});
  };

  return (
    <Container>
      <Board>
        <MineField
          originalBoard={originalBoard}
          onOpenField={onOpenField}
          onSelectField={onSelectField}
        />
      </Board>
    </Container>
  );
}

export default Main;
