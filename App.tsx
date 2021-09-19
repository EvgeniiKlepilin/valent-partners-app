import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';
import {QRCode} from '@screens/qrcode/QRCode';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
// });

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>Hello World</Text>
      <QRCode />
    </SafeAreaView>
  );
};

export default App;
