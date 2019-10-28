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
    </Container>
  );
}
