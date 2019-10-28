import React from 'react';
import {Text} from 'react-native';

import params from '../../config/params';

import {Container} from './styles';

export default function mines() {
  const columnsAmount = params.getColumnsAmount();
  const rowsAmount = params.getRowsAmount();
  return (
    <Container>
      <Text>
        {columnsAmount} X {rowsAmount}
      </Text>
    </Container>
  );
}
