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

export const HorizontalLine = styled.View`
  position: absolute;
  height: 3;
  width: 24;
  border-radius: 3;
  background-color: #000;
`;

export const DiagonalLineLeft = styled(HorizontalLine)`
  transform: rotate(45deg);
`;

export const DiagonalLineRight = styled(HorizontalLine)`
  transform: rotate(135deg);
`;

export const VerticalLine = styled(HorizontalLine)`
  transform: rotate(90deg);
`;
