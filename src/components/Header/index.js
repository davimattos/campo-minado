import React from 'react';
import Flag from '../Flag';

import {
  Container,
  FlagContainer,
  FlagButton,
  FlagText,
  Button,
  Label,
} from './styles';

export default props => {
  const {onFlagPress, flagsLeft, onNewGame} = props;

  return (
    <Container>
      <FlagContainer>
        <FlagButton onPress={onFlagPress}>
          <Flag bigger />
        </FlagButton>
        <FlagText> = {flagsLeft}</FlagText>
      </FlagContainer>
      <Button onPress={onNewGame}>
        <Label>Novo Jogo</Label>
      </Button>
    </Container>
  );
};
