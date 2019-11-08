import React from 'react';

import {
  Container,
  CoreMine,
  DiagonalLineLeft,
  DiagonalLineRight,
  VerticalLine,
  HorizontalLine,
} from './styles';

export default props => {
  return (
    <Container>
      <CoreMine />
      <HorizontalLine />
      <VerticalLine />
      <DiagonalLineLeft />
      <DiagonalLineRight />
    </Container>
  );
};
