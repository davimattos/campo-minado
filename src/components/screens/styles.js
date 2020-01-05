import styled from 'styled-components';

export const Modal = styled.Modal``;

export const Frame = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.View`
  background-color: #eee;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: #eee;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 5px;
`;

export const EasyButton = styled(Button)`
  background-color: #49b65d;
`;

export const NormalButton = styled(Button)`
  background-color: #2765f7;
`;

export const HardButton = styled(Button)`
  background-color: #f26337;
`;
