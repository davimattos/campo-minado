import styled from 'styled-components/native';

const poleBackground = '#222';
const flagBackground = '#f22';

export const Container = styled.View`
  margin-top: 2;
`;

export const FlagPole = styled.View`
  position: absolute;
  height: ${props => (props.bigger ? 16 : 14)};
  width: ${props => (props.bigger ? 3 : 2)};
  background-color: ${poleBackground};
  margin-left: ${props => (props.bigger ? 16 : 9)};
`;

export const Flag = styled.View`
  position: absolute;
  height: ${props => (props.bigger ? 8 : 5)};
  width: ${props => (props.bigger ? 10 : 6)};
  background-color: ${flagBackground};
  margin-left: ${props => (props.bigger ? 6 : 3)};
`;

export const FirstBase = styled.View`
  height: ${props => (props.bigger ? 3 : 2)};
  width: ${props => (props.bigger ? 10 : 6)};
  background-color: ${poleBackground};
  margin-left: ${props => (props.bigger ? 12 : 7)};
  margin-top: ${props => (props.bigger ? 16 : 10)};
`;

export const SecondBase = styled.View`
  position: absolute;
  height: ${props => (props.bigger ? 3 : 2)};
  width: ${props => (props.bigger ? 14 : 10)};
  background-color: ${poleBackground};
  margin-left: ${props => (props.bigger ? 10 : 5)};
  margin-top: ${props => (props.bigger ? 18 : 12)};
`;
