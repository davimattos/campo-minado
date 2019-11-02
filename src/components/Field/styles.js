import styled from 'styled-components';

import params from '../../config/params';

export const Field = styled.View`
  height: ${params.blockSize};
  width: ${params.blockSize};
  border-width: ${params.borderSize};

  background-color: #999;

  align-items: center;
  justify-content: center;
`;

export const FieldNearMinesText = styled.Text`
  font-weight: bold;
  font-size: ${params.fontSize};
  color: ${props => props.color};
`;
