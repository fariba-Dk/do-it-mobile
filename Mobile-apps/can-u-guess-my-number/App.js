import { StatusBar } from 'expo-status-bar';
import {LinearGradient} from 'expo-linear-gradient'
import { StyleSheet, Text, View } from 'react-native';

import StartGameScreen from './screens/StartGameScreen'

export default function App() {
  return (
    <LinearGradient colors={['purple', 'lightblue']} style={styles.rootScreen}>
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create( {
  rootScreen: {
    flex:1,
    backgroundColor: 'lightblue',
  }
});
