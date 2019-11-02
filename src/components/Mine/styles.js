import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const CoreMine = styled.View`
  height: 14;
  width: 14;
  border-radius: 20;
  background-color: #000;
`;

export const DiagonalLine = styled.View`
  position: absolute;
  height: 3;
  width: 20;
  border-radius: 3;
  background-color: #000;
  transform: rotate(45deg);
`;

export const VerticalLine = styled(DiagonalLine)`
  transform: rotate(90deg);
`;

export const HorizontalLine = styled(DiagonalLine)`
  transform: rotate(135deg);
`;
