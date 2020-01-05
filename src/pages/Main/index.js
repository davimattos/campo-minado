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
  flagsUsed,
} from '../../config/functions';

import {Container, Board} from './styles';

import MineField from '../../components/MineField';
import Header from '../../components/Header';
import LevelSelection from '../../components/screens/LevelSelection';

import {Alert} from 'react-native';

function Main() {
  const [originalBoard, setOriginalBoard] = useState(createState());
  const [showLevelSelection, setShowLevelSelection] = useState(false);

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
      showLevelSelection: false,
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

  const onLevelSelected = level => {
    params.difficultLevel = level;

    setShowLevelSelection(false);
    setOriginalBoard(createState());
  };

  return (
    <Container>
      <LevelSelection
        isVisible={showLevelSelection}
        onLevelSelected={onLevelSelected}
        onCancel={() => setShowLevelSelection(false)}
      />
      <Header
        flagsLeft={minesAmount() - flagsUsed(originalBoard.board)}
        onNewGame={() => setOriginalBoard(createState())}
        onFlagPress={() => setShowLevelSelection(true)}
      />
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
