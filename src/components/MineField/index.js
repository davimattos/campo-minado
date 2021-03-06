import React from 'react';
import {View, StyleSheet} from 'react-native';
import Field from '../Field';

export default props => {
  const {originalBoard, onOpenField, onSelectField} = props;

  const rows = originalBoard.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return (
        <Field
          {...field}
          key={c}
          onOpen={() => onOpenField(r, c)}
          onSelect={e => onSelectField(r, c, e)}
        />
      );
    });
    return (
      <View key={r} style={styles.container}>
        {columns}
      </View>
    );
  });
  return <View>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
