import React from 'react';
import {StyleSheet, View} from 'react-native';

import params from '../../config/params';

export default props => {
  const styledField = [styles.field];

  if (styledField.length === 1) {
    styledField.push(styles.regular);
  }

  return <View style={styledField} />;
};

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#ccc',
    borderTopColor: '#ccc',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
});
