import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Alarm, Analytics } from './src/components/body';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Alarm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
