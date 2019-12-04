import React from 'react';
import {View, StyleSheet} from 'react-native';
import Field from '../Field';

export default props => {
  const rows = props.board.map((row, r) => {
    const columns = row.map((field, f) => {
      return <Field {...field} key={f} />;
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
