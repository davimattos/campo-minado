import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: #fff;
  align-items: center;
  justify-content: space-around;
  padding: 20px 20px 0 20px;
`;

export const FlagContainer = styled.View`
  flex-direction: row;
`;

export const FlagButton = styled.TouchableOpacity`
  margin-top: 10px;
  min-width: 30px;
`;

export const FlagText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  padding-top: 5px;
  margin-left: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #999;
  padding: 6px;
  border-radius: 5px;
`;

export const Label = styled.Text`
  font-size: 20px;
  color: #ddd;
  font-weight: bold;
`;
