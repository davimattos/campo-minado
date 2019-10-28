import React from 'react';
import {Text} from 'react-native';

import params from '../../config/params';

import {Container} from './styles';
import Field from '../../components/Fields';

export default function mines() {
  const columnsAmount = params.getColumnsAmount();
  const rowsAmount = params.getRowsAmount();
  return (
    <Container>
      <Text>
        {rowsAmount} x {columnsAmount}
      </Text>
      <Field />
      <Field opened />
      <Field opened nearMines={1} />
      <Field opened nearMines={2} />
      <Field opened nearMines={3} />
      <Field opened nearMines={6} />
    </Container>
  );
}
