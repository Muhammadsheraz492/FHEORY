import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Stack from './src/Stack/Stack';

export default function App() {
  return (
    // Delete Main File
    <SafeAreaView  style={{flex:1}}>
   <NavigationContainer>
    <Stack/>
   </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
