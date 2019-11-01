import React from 'react';
import {StyleSheet} from 'react-native';

import {Field, FieldNearMinesText} from './styles';

export default props => {
  const {mined, opened, nearMines} = props;
  const styledField = [];

  opened && styledField.push(styles.opened);
  styledField.length === 0 && styledField.push(styles.regular);

  let color = null;
  if (nearMines > 0) {
    if (nearMines === 1) {
      color = '#2A28D7';
    }
    if (nearMines === 2) {
      color = '#2BF20F';
    }
    if (nearMines > 2 && nearMines < 6) {
      color = '#F9060A';
    }
    if (nearMines >= 6) {
      color = '#F221A9';
    }

    return (
      <Field style={styledField}>
        {!mined && opened && nearMines > 0 ? (
          <FieldNearMinesText color={color}>{nearMines}</FieldNearMinesText>
        ) : (
          false
        )}
      </Field>
    );
  }

  return <Field style={styledField} />;
};

const styles = StyleSheet.create({
  regular: {
    borderTopColor: '#ccc',
    borderRightColor: '#333',
    borderBottomColor: '#333',
    borderLeftColor: '#ccc',
  },
  opened: {
    borderColor: '#777',
  },
});
