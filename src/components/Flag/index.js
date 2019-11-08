import React from 'react';

import {Container, FlagPole, Flag, FirstBase, SecondBase} from './styles';

export default props => {
  const {bigger} = props;
  return (
    <Container>
      <FlagPole bigger={bigger} />
      <Flag bigger={bigger} />
      <FirstBase bigger={bigger} />
      <SecondBase bigger={bigger} />
    </Container>
  );
};
