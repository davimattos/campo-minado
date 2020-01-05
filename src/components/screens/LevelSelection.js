import React from 'react';

import {
  Modal,
  Frame,
  Container,
  Title,
  EasyButton,
  ButtonText,
  NormalButton,
  HardButton,
} from './styles';

export default props => {
  const {onCancel, isVisible, onLevelSelected} = props;

  return (
    <Modal
      onRequestClose={onCancel}
      visible={isVisible}
      animationType="slide"
      transparent={true}>
      <Frame>
        <Container>
          <Title>Selecione o nível</Title>
          <EasyButton onPress={() => onLevelSelected(0.1)}>
            <ButtonText>Fácil</ButtonText>
          </EasyButton>
          <NormalButton onPress={() => onLevelSelected(0.2)}>
            <ButtonText>Normal</ButtonText>
          </NormalButton>
          <HardButton onPress={() => onLevelSelected(0.3)}>
            <ButtonText>Difícil</ButtonText>
          </HardButton>
        </Container>
      </Frame>
    </Modal>
  );
};
