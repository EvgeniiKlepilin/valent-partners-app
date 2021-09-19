import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const QRCode = () => {
  return (
    <View style={styles.container}>
      <Text>QRCode</Text>
    </View>
  );
};
