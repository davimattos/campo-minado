import styled from 'styled-components/native';

const poleBackground = '#222';
const flagBackground = '#f22';

export const Container = styled.View`
  margin-top: 2;
`;

export const FlagPole = styled.View`
  position: absolute;
  height: 14;
  width: 2;
  background-color: ${poleBackground};
  margin-left: 9;
`;

export const Flag = styled.View`
  position: absolute;
  height: 5;
  width: 6;
  background-color: ${flagBackground};
  margin-left: 3;
`;

export const FirstBase = styled.View`
  height: 2;
  width: 6;
  background-color: ${poleBackground};
  margin-left: 7;
  margin-top: 10;
`;

export const SecondBase = styled.View`
  position: absolute;
  height: 2;
  width: 10;
  background-color: ${poleBackground};
  margin-left: 5;
  margin-top: 12;
`;
