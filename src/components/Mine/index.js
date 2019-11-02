import React from 'react';

import {
  Container,
  CoreMine,
  DiagonalLine,
  VerticalLine,
  HorizontalLine,
} from './styles';

export default props => {
  return (
    <Container>
      <CoreMine />
      <DiagonalLine />
      <VerticalLine />
      <HorizontalLine />
    </Container>
  );
};
