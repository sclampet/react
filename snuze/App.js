import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { AlarmSettings, Analytics } from './src/components/body';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <AlarmSettings />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
