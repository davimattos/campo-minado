import React from 'react';
import {StyleSheet} from 'react-native';

import {Container, FlagPole, Flag, FirstBase, SecondBase} from './styles';

export default props => {
  const {bigger} = props;
  return (
    <Container>
      <FlagPole style={bigger && styles.flagPoleBigger} />
      <Flag style={bigger && styles.flagBigger} />
      <FirstBase style={bigger && styles.firstBaseBigger} />
      <SecondBase style={bigger && styles.secondBaseBigger} />
    </Container>
  );
};

const styles = StyleSheet.create({
  flagPoleBigger: {
    height: 16,
    width: 3,
    marginLeft: 16,
  },
  flagBigger: {
    height: 8,
    width: 14,
    marginLeft: 3,
  },
  firstBaseBigger: {
    height: 3,
    width: 10,
    marginTop: 16,
    marginLeft: 12,
  },
  secondBaseBigger: {
    height: 3,
    width: 16,
    marginLeft: 8,
    marginTop: 18,
  },
});
