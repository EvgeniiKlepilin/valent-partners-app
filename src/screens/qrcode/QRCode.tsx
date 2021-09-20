import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import QRCodeGenerator from 'react-native-qrcode-svg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export const QRCode = () => {
  const DEFAULT_QRCODE_LINK = 'https://www.valentpartners.com/';
  const [qrvalue, setQrvalue] = useState('');

  return (
    <View style={styles.container}>
      <Text>QRCode</Text>
      <QRCodeGenerator value={qrvalue || DEFAULT_QRCODE_LINK} size={200} />
      <TextInput
        style={styles.input}
        onChangeText={setQrvalue}
        value={qrvalue}
        placeholder="Please enter a link"
      />
    </View>
  );
};
